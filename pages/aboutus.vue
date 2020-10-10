<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <br>
      <div class="titlebox">
       <span class="maintitle"> Welcome to PowerPac Myanmar  </span>
       <span class="subtitle"> Brightens Up Your Life </span>
      </div>
  </div>
</template>

<script>
import breadCumb from '@/components/mainpageBody/breadCumnb'
import { allFanInfo } from '@/static/content/allFanInfo'
import ProductCard from '@/components/productCard'
import fanFilter from '@/mixins/fanFilter'

export default {
  components: {
    breadCumb,
  },
  mixins: [fanFilter],
  data () {
    return {
      view: 'list',
      allFanInfo,
      current: 1,
      value: 'all',
      display: [],
      filterValue: '',
      breadCumbItems: [{
        text: 'home / ',
        link: '/'
      },
      {
        text: 'about us',
        link: '/collections/allFans',
        active: true
      }]
    }
  },
  mounted () {
    this.setInitialValue()
  },
  head: {
    title: 'All Fans',
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
.titlebox{
  height: 500px;
  background-color: #4685CC;
  display: flex;
}
.maintitle{
  color: #fff;
  font-size: 45px;
  font-family: 'Poppins';
  padding-top: 10%;
  padding-left: 20%;
}
.subtitle{
  color: #fff;
  font-size: 20px;
  font-family: 'Poppins';
  padding-top: 10%;
  padding-left: 20%;
}
.gridlist_photo{
  cursor: pointer;
  height: 30px;
  width: 30px;
  opacity: 0.5;
}
.gridlist_photo:hover{
  opacity: 1;
}
.active{
  opacity: 1;
}

.col{
  padding: 0px;
}

.allFanContent{
  height: 200px;
  width: 100%;
  padding: 10px;
}
.row{
  justify-content: space-between;
}

.productListHeader{
  width: 100%;
  height: 50px;
  border-top: 1px solid rgba(128, 128, 128, 0.3);
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  display: flex;
  justify-content: space-between;
}
.filter_mobile_bar{
  width: 100%;
  height: 35px;
  background: #4686CD;
  cursor: pointer;
  outline: none;
  text-align: center;
  line-height: 35px;
  color: white;

}
.filter_mobile_bar:focus{
  background: #3f6896;

}
</style>
