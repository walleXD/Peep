<template lang="pug">
  v-card.post-card
    v-container.pb-0: v-layout(row, justify-space-between)
      v-flex(xs9, sm10)
        v-card-title.pl-0
          h6.title {{ title }}
      v-flex(xs3, sm2)
        v-card-text.pt-4
          p.text-xs-right.title {{ score }}
          p.text-xs-right
            v-icon(small).px-1 comment
            span.subheading {{ num_comments }}
    v-card-media.pt-0(:src="thumbnail" :height="thumbnailHeight")
    v-container: v-layout(row, justify-space-between, align-center)
      v-flex(xs6): .body-2.ma-0
          span.mr-3 {{ domain }}
          span r/{{ subreddit }}
      v-flex(xs6): v-layout(row, justify-end)
        v-btn(icon).ma-0.auto: v-icon save
        v-btn(icon).ma-0: v-icon thumb_up
        v-btn(icon).ma-0: v-icon thumb_down    
</template>

<script>
export default {
  props: [
    'id',
    'domain',
    'subreddit',
    'title',
    'score',
    'num_comments',
    'preview'
  ],
  computed: {
    thumbnail: function () {
      if (!this.preview) return ''
      const { images } = this.preview
      if (images.length > 0) {
        return images[0].source.url
      }
    },
    thumbnailHeight: function () {
      if (!this.preview) return ''
      const { images } = this.preview
      if (images.length > 0) {
        return images[0].source.height
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  h6
    font-weight 400
</style>
