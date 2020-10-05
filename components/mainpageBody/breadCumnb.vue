<template>
  <div class="bread_cumb_container">
    <div class="container">
      <ul class="bread_cumb_text">
        <nuxt-link v-for="(item,index) in items" :key="index" :to="item.link" style="float:left">
          <li>
            {{ item.text }}
          </li>
        </nuxt-link>
      </ul>
    </div>
    <!-- <b-breadcrumb :items="items" class="container bg-light" /> -->
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.bread_cumb_container{
    width: 100%;
    height: 50px;
    background: #F8F9FA;

}
.bread_cumb_text{
    list-style-type: none;
    display: flex;
    height: 100%;
}
.container{
    height: 100%;
}
li{
    height: 100%;
    float: left;
    padding: 15px 0px;
}
.active{
    color: black;
}
</style>
