<template lang="pug">
  .example-container
    span {{ score }}
    v-btn(@click.native="increment(1)") add
    v-btn(@click.native="decrement(1)") substract
</template>

<script>
  import { increment, decrement } from 'common/actions/example'
  import { bindActionCreators } from 'redux'
  import { connect } from 'vue2-redux'

  const mapStateProps = ({example}) => ({
    score: example.score
  })

  const mapDispatchProps = dispatch => bindActionCreators({
    increment, decrement
  }, dispatch)

  export default connect(
    mapStateProps,
    mapDispatchProps
  )({
    name: 'ExampleContainer'
  })
</script>

