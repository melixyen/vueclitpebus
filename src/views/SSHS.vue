<template>
  <div class="home">
    <Stop msg="松山高中（南向）" stationid="2095" />
  </div>
</template>

<script>
// @ is an alias to /src
import Stop from '@/components/stop.vue'

export default {
  name: 'home',
  components: {
    Stop
  }
}
</script>
