<template>
  <div class="e_container">
    <nuxt-link to="/aboutus">
      <detail-tick /> ewarranty registration

    </nuxt-link>
  </div>
</template>

<script>
import detailTick from '@/assets/svg/detail_tick.svg'
export default {
  components: {
    detailTick
  }
}
</script>

<style scoped>
.e_container {
  width: 100%;
}
</style>