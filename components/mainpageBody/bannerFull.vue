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
        -----------------------------------
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
          imageURL: '/bannerfull/banner_one.png',
          link: '/collections/insect_repellent'
        },
        {
          imageURL: '/bannerfull/banner_two.png',
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
    height: 300px;
  }
}
@media screen and (max-width: 460px) {
  .image {
    height: 200px;
  }
}
</style>
