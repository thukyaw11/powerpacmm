<template>
  <div class="popular_box">
    <div class="title">
      <h6>Popular Products</h6>
    </div>
    <div class="popular_content">
      <div class="content_child">
        <carousel
          :navigation-enabled="true"
          :navigation-next-label="nextLabel"
          :navigation-prev-label="prevLabel"
          per-page="1"
          pagination-active-color="#4685CC"
          pagination-position="bottom-overlay"
          :scroll-per-page="true"
          :pagination-enabled="false"
        >
          <slide
            v-for="(popular,index) in popularProducts"
            :key="index"
          >
            <productCard :products="popular" />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/productCard'
import { popularProducts } from '@/static/content/popularProducts'
export default {
  components: {
    ProductCard
  },
  data () {
    return {
      value: 'all',
      popularProducts,
      nextLabel: "<img src='/chevron-right.png' />",
      prevLabel: "<img src='/chevron-left.png' />"
    }
  },
  methods: {
    onChange (e) {
      // eslint-disable-next-line no-undef
      $nuxt.$emit('my-custom-event', e.target.value)
    }
  }
}

</script>
<style scoped>
.popular_box{
  width: 100%;
  height: 250px;
  border: 1px solid #F5F5F5;
}
.title{
  background: #F5F5F5;
  padding: 8px;
}
.col{
  padding: 0px;
}
.brand_radio{
  padding: 10px;
}
</style>
