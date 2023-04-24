# yu-open-lib

## Install

```shell
yarn add yu-open-lib
```

## Interactive Documentation with Storybook

```shell
yarn storybook
```

> Warning: First time running Storybook it will take quite a while as it caches all dependencies used in the library

> Or `Ctrl + F5` in Vscode

Will run at: [https://localhost:6006](https://localhost:6006) by default

Read more about [Story Book](https://storybook.js.org/)

---

## Create new release/version

- Create feature branch

```shell
git checkout -b JIRA-XXX-some-feature-here
```

- Commit your changes

```shell
git add .
git commit -m "My commit message"
git push --set-upstream origin JIRA-XXX-some-feature-here
```

- Now add a reviewer to your Pull Request and wait for it to be reviewed/merged

- Create [new release](https://github.com/jornadayu/yu-open-lib/actions/workflows/new_release.yml) with the desired type
  - `major` - For breaking Changes (existing code already using the library has to change)
  - `minor` - No breaking changes, new components or decently big visual changes
  - `patch` - No breaking changes, bug fixes

---

## Theme Usage

```tsx
import React from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { AppTheme } from 'yu-open-lib'

const theme = AppTheme({ darkMode: false })

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      ...
    </ThemeProvider>
  )
}
```

---

## Components Usage

```tsx
import React, { useState } from 'react'

import { ConfirmDialog } from 'yu-open-lib'
import 'yu-open-lib/dist/index.css'

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

MIT © [YU Tecnologia e Consultoria](https://github.com/jornadayu/LICENSE)
