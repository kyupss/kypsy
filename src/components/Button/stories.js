import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './Button'

storiesOf('Button')
  .add('with text', () => (
    <Button hi='dsdf' onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button onClick={action('clicked')}>🚿 🚿 🐈 🐈</Button>
  ))
