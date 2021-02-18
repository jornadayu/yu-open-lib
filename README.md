# yu-lib

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
# Specify tag version at the end of the SSH URI
yarn add https://johnvictorfs@bitbucket.org/sal-jornadayu/yu-open-lib.git#v1.0.0
```

---

## Bump version

- Create feature branch

  ```bash
  gcb JIRA-XXX-some-feature-here
  ```

- Commit your changes

  ```bash
  ga .
  gc -m "My commit message"
  gp --set-upstream origin JIRA-XXX-some-feature-here
  ```

- Bump version accordingly

  ```
  # Choose new library version
  yarn version
  ```

- Push your changes (yarn will auto-commit your version bump)

  ```
  gp
  ```

- Now, when your Pull Request is merged, a new tag using your chosen version will be created on the project's repository

---

## Theme Usage

```tsx
import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { AppTheme } from 'yu-lib'

const theme = AppTheme({ darkMode: false })

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      ...
    </ThemeProvider>
  )
}
```

---

## Components Usage

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
