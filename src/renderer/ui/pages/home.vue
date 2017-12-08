<template lang="pug"></template>

<script>
  import Example from '../containers/Example.vue'
  import { connect } from 'vue2-redux'
  import { getPosts, setActive } from 'common/actions'
  import { bindActionCreators } from 'redux'

  const mapDispatchToProps = dispatch => bindActionCreators({
    setActive, getPosts
  }, dispatch)

  export default connect(undefined, mapDispatchToProps)({
    components: { Example },
    name: 'HomePage',
    created () {
      this.setActive('')
      this.getPosts()
    }
  })
</script>
