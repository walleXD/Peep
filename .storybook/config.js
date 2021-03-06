import Vue from 'vue'
import Vuetify from 'vuetify'
import { configure, addDecorator } from '@storybook/vue'

import '@/ui/lib/app.styl'

Vue.use(Vuetify)

const req = require.context(
  '@/ui/components',
  true,
  /\__stories__\/.*.js$/
)

addDecorator(story => ({
  components: { Story: story() },
  render: h =>
    <v-app>
      <story />
    </v-app>
}))

const loadStories = () =>
  req
    .keys()
    .forEach(module => req(module))

configure(loadStories, module)
