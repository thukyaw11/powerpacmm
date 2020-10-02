<template>
  <div>
    <h1>Home</h1>
    <carousel per-page="1" pagination-active-color="#4685CC" pagination-position="bottom-overlay">
      <slide>
        <img
          src="/home_banner_one.jpg"
          alt=""
          class="banner_image"
          data-index="0"
          data-name="productone"
          @slideclick="handleSlideClick"
        >
      </slide>
      <slide>
        <img src="/home_banner_two.jpg" alt="" class="banner_image">
      </slide>
      <slide>
        <img src="/home_banner_three.jpg" alt="" class="banner_image">
      </slide>
    </carousel>
  </div>
</template>

<script>

export default {
  methods: {
    handleSlideClick (dataset) {
      // eslint-disable-next-line no-console
      console.log(dataset.index, dataset.name)
    }
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

<style scoped>
.banner_image{
  width: 100%;
}
</style>
