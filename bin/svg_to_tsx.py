#!/usr/bin/env python3

"""
Converts all `.svg` files (recursively) from path passed to `.tsx` files with MUI's SvgIcon component
https://mui.com/components/icons/#svgicon

Usage Example: `bin/svg_to_tsx.py src/assets/icons`
"""

import glob
import sys
from pathlib import Path
import string
import subprocess
import re
import os
from typing import Iterator


SVG_REGEX = re.compile(r"(<svg version(?:.|\n)*$)", re.MULTILINE)


def get_files(path: str) -> Iterator[str]:
     return glob.iglob(path + '**/*.svg', recursive=True)


def to_pascal_case(text: str) -> str:
     return string.capwords(text.replace('_', ' ')).replace(' ', '')


def without_svg_file_extension(filename: str) -> str:
     return filename[:-4]


def without_first_x_lines(text: str, lines = 2) -> str:
     return ''.join(text.splitlines(keepends=True)[lines:])


def html_svg_to_react_svg(svg: str) -> str:
     final_svg = svg.replace('xmlns:xlink', 'xmlnsXlink')
     final_svg = final_svg.replace('xml:space', 'xmlSpace')

     return SVG_REGEX.findall(final_svg)[0]


def eslint_fix_glob(str_glob: str):
     res = subprocess.run(['yarn', 'run', 'eslint', str_glob, '--fix'], capture_output=True)
     print(res.stdout)


def confirmation(text: str) -> bool:
     return input(f'{text} (y/N) ').lower() in {'y', 'yes', 'Y', 'YES'}

if __name__ == '__main__':
     if len(sys.argv) <= 1:
          print('You need to pass in the path (full or relative) to the folder you want to convert *.svg to *.tsx')
          sys.exit(1)

     start: str = sys.argv[1]

     if not start.endswith('/'):
          start += '/'

     filenames = get_files(start)
     filenames_str = '\n'.join(filenames)

     if confirmation(f'{filenames_str}\n\nConvert the above files?'):
          for filename in get_files(start):
               with open(filename, 'r') as f:
                    svg_text = f.read()

               pathlib_file = Path(filename)
               component_name = to_pascal_case(pathlib_file.stem) + 'Icon'
               parent_folder = pathlib_file.parent.absolute()

               write_path = str(parent_folder) + '/' + component_name + '.tsx'

               with open(write_path, 'w+') as f:
                    print(f'Writing to {write_path}')

                    component_text = (
f"""
import React from 'react'

import SvgIcon, {{ SvgIconProps }} from '@mui/material/SvgIcon'

const {component_name}: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {{...props}}>
    {html_svg_to_react_svg(svg_text)}
  </SvgIcon>
)

export default {component_name}
"""
                    )

                    f.write(component_text)

          print('Running eslint --fix in all created files')
          eslint_fix_glob(start + '**/*.tsx')

          if confirmation('Remove svg files?'):
               for file_path in get_files(start):
                    try:
                         os.remove(file_path)
                    except OSError as e:
                         print(f'Error when trying to delete file {e}')
               print('Finished deleting svg files')
