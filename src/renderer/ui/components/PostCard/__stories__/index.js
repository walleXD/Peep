import { storiesOf } from '@storybook/vue'
import PostCard from '../'
import centered from '@storybook/addon-centered'

storiesOf('Post Card', module)
  .addDecorator(centered)
  .add('base', () => ({
    components: { PostCard },
    render: h =>
      <post-card
        title="Even though Mel Blanc did over a 1000 different Voices, other voice actors are the most impressed by this"
        score="666"
        subreddit="random"
        domain="i.redd.it"
        num_comments="66"
      />
  }))
