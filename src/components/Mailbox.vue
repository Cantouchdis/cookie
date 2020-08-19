<template>
    <div class="d-flex flex-column align-items-center mailbox" :class="{'mailbox-drop': !drop}" @click="dropDown()">
      <div class="mailbox__slot"></div>
      <p class="mailbox__title">Mailbox</p>
    </div>
</template>

<script lang="ts">

export default {
  data () {
    return {
      drop: true,
      elementHeight: 100
    }
  },
  methods: {
    dropDown () {
      this.drop = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "src/scss/components/_mailbox";
</style>
