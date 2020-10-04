<template>
  <div>
    <NoSsr>
      <Banner />
    </NoSsr>
    <BrandCard />
    <no-ssr>
      <NewReleaseProductCard />
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
