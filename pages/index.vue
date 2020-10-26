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
      <retailers />
      <footerCustom />
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
import retailers from '@/components/mainpageBody/retailers'
import footerCustom from '@/components/mainpageBody/footer'
export default {
  components: {
    BrandCard,
    NewReleaseProductCard,
    Banner,
    homeGreat,
    bannerFull,
    aboutPowerPac,
    review,
    retailers,
    footerCustom
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
