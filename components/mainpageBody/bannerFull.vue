<template>
  <div>
    <nuxt-link
      v-for="(image,index) in images"
      :key="index"
      :to="localePath(image.link)"
    >
      <img
        :src="image.imageURL"
        alt=""
        class="image"
        data-aos="fade-in"
      >
      <br>
      <br>
      <h4 data-aos="fade-in">
        ------------------------------------------------
      </h4>
      <br>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        {
          imageURL: '/home_banner_one.jpg',
          link: '/collections/vaccum'
        },
        {
          imageURL: '/home_banner_two.jpg',
          link: '/collections/cooker'
        },
        {
          imageURL: '/home_banner_three.jpg',
          link: '/collections/fridge'
        }
      ]
    }
  }
}
</script>

<style scoped>
h4 {
  text-align: center;
}
.image {
  width: 100%;
  height: 500px;
}
@media screen and (max-width: 991px) {
  .image {
    height: 400px;
  }
}
@media screen and (max-width: 460px) {
  .image {
    height: 300px;
  }
}
</style>
