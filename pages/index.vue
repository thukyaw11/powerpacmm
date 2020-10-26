<template>
  <div>
    <NoSsr>
      <Banner />
    </NoSsr>
    <BrandCard />
    <no-ssr>
      <NewReleaseProductCard />
      <HomeGreat />
      <bannerFull />
      <aboutPowerPac />
      <review />
    </no-ssr>
  </div>
</template>

<script>
import BrandCard from '@/components/mainpageBody/brandcard'
import NewReleaseProductCard from '@/components/mainpageBody/newreleasedproductcard'
import Banner from '@/components/mainpageBody/banner'
import homeGreat from '@/components/mainpageBody/homeGreat'
import bannerFull from '@/components/mainpageBody/bannerFull'
import aboutPowerPac from '@/components/mainpageBody/aboutPowerPac'
import review from '@/components/mainpageBody/review'
export default {
  components: {
    BrandCard,
    NewReleaseProductCard,
    Banner,
    homeGreat,
    bannerFull,
    aboutPowerPac,
    review
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
