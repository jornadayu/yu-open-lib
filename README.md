# yu-lib

[![NPM](https://img.shields.io/npm/v/yu-lib.svg)](https://www.npmjs.com/package/yu-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add yu-lib
```

## Usage

```tsx
import React, { useState } from 'react'

import { ConfirmDialog } from 'yu-lib'
import 'yu-lib/dist/index.css'

const App = () => {
  const [dialog, setDialog] = useState(false)

  const onConfirm = () => {
    console.log('confirm')
    setDialog(false)
  }

  const onCancel = () => {
    console.log('cancel')
    setDialog(false)
  }

  return (
    <div>
      <ConfirmDialog
        open={dialog}
        handleClose={onCancel}
        handleConfirm={onConfirm}
        title="Some title"
        text="Some text"
        cancelText="Cancel"
        confirmText="Confirm"
      />

      <button onClick={() => setDialog(true)}>Open Dialog</button>
    </div>
  )
}
```

## License

UNLICENSED © [jornadayu](https://bitbucket.org/sal-jornadayu/yulib)
