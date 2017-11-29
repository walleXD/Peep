import { storiesOf } from '@storybook/vue'

import Test from '../'

storiesOf('Test', module)
  .add('Base', () => ({
    components: { Test },
    render: h => <test />
  }))
