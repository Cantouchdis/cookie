<template>
    <div class="d-flex flex-column align-items-center mailbox" :class="{drop: !drop}" @click="dropDown()">
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
<style scoped lang="scss">
.mailbox {
  height: 70px;
  width: 100px;
  background-color: #999999;

  &__slot {
    margin-top: 10px;
    width: 75px;
    height: 15px;
    background-color: #666666;
  }

  &__title {
    font-size: 16px;
    color: #666666;
  }
}

.drop {
  animation: move-down .3s ease-in forwards;
}

@keyframes move-down {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

</style>
