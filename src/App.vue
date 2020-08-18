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
html { height: 100%; }
body { height: 80%; display: flex; }
body > div { flex: 1; }

.roof {
  width: 0;
  height: 0;
  border-left: 250px solid transparent;
  border-right: 250px solid transparent;
  border-bottom: 225px solid #DD7E6B;
}

.sun {
  margin: 30px 10px;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: #FFFF00;
}

.name {
  position: absolute;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.6rem;
  margin-bottom: 0;
  text-align: center;
  padding: 15px;
  background-color: #93C47D;
  color: #365E22;
  border: 4px solid #6FA650;
  font-weight: 400;
  transform: translateY(-50%);
}

.house {
  position: relative;
  background-color: #CCCCCC;
  width: 500px;
  height: 300px;

  .door {
    height: 225px;
    width: 150px;
    background-color: #F6B26B;

    &__knob {
      margin-top: 20px;
      margin-left: 10px;
      width: 40px;
      height: 8px;
      background-color: #B46007;
    }
  }
}

.night-mode {
  background-color: black;
  .sun {
    //border-radius: 50%;
    box-shadow: inset -13px 0px white, inset -30px 0px 1px 1px white;
    background-color: black;
  }
}
</style>
