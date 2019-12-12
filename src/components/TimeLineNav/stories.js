import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import TimeLineNav from './TimeLineNav'

storiesOf('TimeLineNav')
  .add('with text', () => (
    <TimeLineNav onClick={action('clicked')} />
  ))
