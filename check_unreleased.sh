#!/bin/sh

ORANGE=$'\e[33m'
GREEN=$'\e[32m'
RED=$'\e[31m'
NC=$'\e[0m'

echo -n $ORANGE

if grep -lnr --include \*.tsx\* 'badges: \[BADGES.UNRELEASED\]' 'src/stories';
then
  echo $NC
  echo "${RED}Error: The Stories above are marked as unreleased, you need to version them first since you are creating a new release${NC}"
  echo "Read more: https://yu-open-lib.netlify.app (at the 'Guidelines' tab)"
  exit 1
else
  echo -n $NC
  exit 0
fi
