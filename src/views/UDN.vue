<template>
  <div class="home">
    <Stop msg="聯合報（西向）" stationid="3929" />
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
