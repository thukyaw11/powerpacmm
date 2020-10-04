<template>
  <div>
    <NoSsr>
      <Banner />
    </NoSsr>

    <BrandCard />
    <no-ssr>
      <div data-aos="fade-left">
        <NewReleaseProductCard />
      </div>
    </no-ssr>
    <transition name="test" mode="out-in" />
  </div>
</template>

<script>
import BrandCard from '@/components/mainpageBody/brandcard'
import NewReleaseProductCard from '@/components/mainpageBody/newreleasedproductcard'
import Banner from '@/components/mainpageBody/banner'
export default {
  transition: {
    name: 'test',
    mode: 'out-in'
  },
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
