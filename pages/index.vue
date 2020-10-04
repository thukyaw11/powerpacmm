<template>
  <div>
    <NoSsr>
      <Banner />
    </NoSsr>
    <div data-aos="zoom-in">
      <BrandCard />
    </div>
    <no-ssr>
      <div data-aos="zoom-in">
        <NewReleaseProductCard />
      </div>
    </no-ssr>
  </div>
</template>

<script>
import BrandCard from '@/components/mainpageBody/brandcard'
import NewReleaseProductCard from '@/components/mainpageBody/newreleasedproductcard'
import Banner from '@/components/mainpageBody/banner'
export default {
  components: {
    BrandCard,
    NewReleaseProductCard,
    Banner
  },
  head: {
    title: 'Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Powerpac MM'
      }
    ]
  }
}
</script>
