<template>
  <b-container>
    <h4 class="sub_title text-center">
      NEW RELEASES
    </h4>
    <hr class="divider">
    <carousel
      navigation-enabled
      per-page="1"
      pagination-active-color="#4685CC"
      pagination-position="bottom-overlay"
      :scroll-per-page="true"
      :per-page-custom="[[300, 2], [500,2], [991, 5]]"
      class="mt-4 mb-5"
    >
      <slide
        v-for="(newRelease,index) in newReleases"
        :key="index"
      >
        <productCard :products="newRelease" />
      </slide>
    </carousel>
  </b-container>
</template>

<script>

import { newReleases } from '@/static/content/newRelease'
import productCard from '@/components/productCard'

export default {
  components: {
    productCard
  },
  data () {
    return {
      newReleases
    }
  }
}

</script>

<style scoped>
.divider{
    border: 1px solid #4685CC;
    width: 80px;
    margin: 0 auto;
}
</style>
