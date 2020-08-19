<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="d-flex flex-column align-items-center">
      <div class="align-self-end sun" @click="toggleNightMode"></div>
      <div class="roof"></div>
      <div class="d-flex flex-row justify-content-around house">
        <h1 class="name font-weight-bold">COOKIE BAKERY</h1>
        <app-window :nightMode="nightMode"></app-window>
        <div class="d-flex align-self-end door" @click="sendTimeToApi">
          <div class="door__knob align-self-center"></div>
        </div>
        <div class="d-flex flex-column align-items-center">
          <app-window :nightMode="nightMode"></app-window>
          <app-mailbox></app-mailbox>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Window from './components/Window.vue'
import Mailbox from './components/Mailbox.vue'
export default {
  data () {
    return {
      nightMode: false
    }
  },
  methods: {
    toggleNightMode () {
      this.nightMode = !this.nightMode
      console.log(this.nightMode)
      if (this.nightMode) {
        document.querySelector('body').classList.add('night-mode')
      } else {
        document.querySelector('body').classList.remove('night-mode')
      }
    },
    sendTimeToApi () {
      this.$http.post('timestamp', new Date()).then(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
    }
  },
  components: {
    appWindow: Window,
    appMailbox: Mailbox
  }
}
</script>

<style lang="scss">
@import "./scss/components/_home.scss";
</style>
