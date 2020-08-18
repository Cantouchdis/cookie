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
.window {
  margin: 30px 10px;
  border: 4px solid #A0C5E7;
  background-color: #CFE2F3;
  height: 100px;
  border-radius:50%;
  width: 100px;

  &-cookie {
    background-image: url("./../assets/cookie.png");
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
