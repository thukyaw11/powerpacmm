<template>
  <div class="popular_box">
    <div class="title">
      <h6>FILTER BY TYPE</h6>
    </div>
    <div class="filter_content">
      <div class="content_child">
        <a-radio-group v-model="value" @change="onChange">
          <a-radio value="all" class="brand_radio">
            All
          </a-radio>
          <br>
          <a-radio value="iFan" class="brand_radio">
            iFan
          </a-radio>
          <br>
          <a-radio value="PowrPac" class="brand_radio">
            PowerPac
          </a-radio>
          <br>
        </a-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 'all'
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
.content_child{
  padding: 20px;
}
.col{
  padding: 0px;
}
.brand_radio{
  padding: 10px;
}
</style>
