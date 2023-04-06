import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Grid } from '@mui/material'

import { ContactChip } from '../../index'

export default {
  title: 'YU/ContactChip',
  component: ContactChip,
  parameters: {
    badges: ['Added: v3.0.0']
  }
} as Meta<typeof ContactChip>

const Template: StoryFn<typeof ContactChip> = () => {
  const onCopySuccess = (value: string) => {
    alert(value)
  }

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ContactChip
            onCopySuccess={onCopySuccess}
            value='5511123456789'
            variant='whatsapp'
          />
        </Grid>

        <Grid item xs={12}>
          <ContactChip
            onCopySuccess={onCopySuccess}
            value='foo.bar@foobar.com'
            variant='email'
          />
        </Grid>
        <Grid item xs={12}>
          <ContactChip
            onCopySuccess={onCopySuccess}
            value='https://linkedin.com/in/foobarfoobarfoobarfoobarfoobar'
            variant='linkedin'
          />
        </Grid>
      </Grid>

      <hr
        style={{
          marginTop: 20,
          marginBottom: 20
        }}
      />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ContactChip
            onCopySuccess={onCopySuccess}
            value='5511123456789'
            variant='whatsapp'
            copyable
            copyAs='url'
          />
        </Grid>

        <Grid item xs={12}>
          <ContactChip
            onCopySuccess={onCopySuccess}
            value='foo.bar@foobar.com'
            variant='email'
            copyable
          />
        </Grid>

        <Grid item xs={12}>
          <ContactChip
            onCopySuccess={onCopySuccess}
            value='https://linkedin.com/in/foobarfoobarfoobarfoobarfoobar'
            variant='linkedin'
            copyable
          />
        </Grid>
      </Grid>

      <hr
        style={{
          marginTop: 20,
          marginBottom: 20
        }}
      />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ContactChip
            chipProps={{ variant: 'filled' }}
            onCopySuccess={onCopySuccess}
            value='5511123456789'
            variant='whatsapp'
            copyable
            copyAs='url'
          />
        </Grid>

        <Grid item xs={12}>
          <ContactChip
            chipProps={{ variant: 'filled' }}
            onCopySuccess={onCopySuccess}
            value='foo.bar@foobar.com'
            variant='email'
            copyable
          />
        </Grid>

        <Grid item xs={12}>
          <ContactChip
            chipProps={{ variant: 'filled' }}
            onCopySuccess={onCopySuccess}
            value='https://linkedin.com/in/foobarfoobarfoobarfoobarfoobar'
            variant='linkedin'
            copyable
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export const Example = Template.bind({})
Example.args = {}
