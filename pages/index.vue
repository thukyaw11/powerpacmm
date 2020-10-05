<template>
  <div>
    <NoSsr>
      <Banner />
    </NoSsr>
    <BrandCard />
    <no-ssr>
      <NewReleaseProductCard />
    </no-ssr>
    <Homegrade />
    <BodyBanner/>
      <HealthBodyBanner />
      <HomeBodyBanner/>
      <Tranding/>
      <TrandingProductCard/>
  </div>
</template>

<script>
import BrandCard from '@/components/mainpageBody/brandcard'
import NewReleaseProductCard from '@/components/mainpageBody/newreleasedproductcard'
import Homegrade from '@/components/mainpageBody/homegrade'
import Banner from '@/components/mainpageBody/banner'
import HealthBodyBanner from '@/components/mainpageBody/healthbodybanner'
import HomeBodyBanner from '@/components/mainpageBody/homebodybanner'
import Tranding from '@/components/mainpageBody/tranding'
import TrandingProductCard from '@/components/mainpageBody/trandingproductcard'
export default {
  components: {
    BrandCard,
    NewReleaseProductCard,
    Homegrade,
    Banner,
    HealthBodyBanner,
    HomeBodyBanner,
    Tranding,
    TrandingProductCard
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
