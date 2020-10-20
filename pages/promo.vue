<template>
 <div>
    <breadCumb :items="breadCumbItems" />
    <br>
    <div class="titleContainer">
      <span class="maintitle"> Frequently Asked Question </span>
    </div>
    <span class="br" />
    <div class="faqContainer">
      <div class="quesBox"></div>
      <!-- <div class="ansBox"></div> -->
    </div>
 </div>
</template>

<script>
import breadCumb from '@/components/mainpageBody/breadCumnb'
export default {
  components: {
    breadCumb,
  },
  data () {
    return {
      breadCumbItems: [{
        text: 'home / ',
        link: '/'
      },
      {
        text: 'faq',
        link: '/collections/allFans',
        active: true
      }]
    }
  },
  head: {
    title: 'faq',
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
.titleContainer{
  height: 500px;
  background-color: #4685CC;
  text-align: center;
  padding-top: 15%;
}
.maintitle{
  color: #fff;
  font-size: 45px;
  font-family: 'Poppins';
}
.subtitle{
  color: #fff;
  font-size: 20px;
  font-family: 'Poppins';
}
.faqContainer{
  height: 800px;
  display: flex;
  justify-content: center;
  padding: 5%;
}
.quesBox{
  height: 50px;
  width: 800px;
  border: 1px solid #4685CC;
  background-color: #4685CC;
}
.ansBox{
  height: 50px;
  width: 800px;
  border: 1px solid #4685CC;
  background-color: #fff;
}
</style>
