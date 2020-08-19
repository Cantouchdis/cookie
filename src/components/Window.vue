<template>
  <div class="window"
       @mouseover="!nightMode ? showCookie = true : showCookie = false"
       @mouseleave="showCookie = false" :class="{'window-cookie': showCookie}"></div>
</template>

<script lang="ts">
export default {
  props: ['nightMode'],
  data () {
    return {
      showCookie: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/scss/components/_window";
</style>
