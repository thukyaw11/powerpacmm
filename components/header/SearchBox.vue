<template>
  <div class="search-container">
    <input type="text" class="search">
    <div class="click_icon">
      <search />
    </div>
  </div>
</template>
<script>
import search from '@/assets/svg/search.svg'
export default {
  components: {
    search
  }
}
</script>
<style scoped>
.search-container{
    width: 100%;
    height: 100%;
    display: flex;
    padding: 30px;
}
.search{
    width: 85%;
    float: left;
    border: none;
    border: 1px solid grey;
    height: 50px;
    outline: none;
    padding: 10px;
    font-family: "Poppins";
}
.click_icon{
    text-align: center;
    line-height: 50px;
    height: 50px;
    width: 15%;
    color: white;
    float: left;
    background-color: #f5dd0091;
    cursor: pointer;
}
.click_icon:hover{
    background: #F5DE00;
}
</style>
