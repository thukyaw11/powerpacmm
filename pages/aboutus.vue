<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <br>
      <div class="titleContainer">
        <span class="maintitle"> Welcome to PowerPac Myanmar</span>
        <span class="br"></span> 
        <span class="subtitle"> Brightens Up Your Life </span>
      </div>
      <div class="cardContainer">
        <div class="aboutCard">
          <h4 class="titleText"><b>About Us</b></h4> 
          <hr class="divider">
          <p class="aboutusText">
            Distributor of <br> PowerPac Singapore Brand <br> Since August 2019 owned and <br>
            operated by <br> UNION POWERPAC GROUP LTD <br> (Registration No. 121189836).
          </p> 
        </div>
        <div class="aboutCard">
           <h4 class="titleText"><b>Our Mission</b></h4> 
          <hr class="divider">
          <p class="aboutusText">
            To be <br> Safe and Innovation of <br> Every Future Life.
          </p> 
        </div>
        <div class="aboutCard">
           <h4 class="titleText"><b>Our Story</b></h4> 
          <hr class="divider">
          <p class="aboutusText">
            PowerPac products are proud to be <br>consistently voted as<br> Singapore's trusted brand<br> after 21 years of serving households<br> locally and overseas.
          </p>
        </div>
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
        text: 'about us',
        link: '/collections/allFans',
        active: true
      }]
    }
  },
}
</script>

<style scoped>
.br{
   display: block;
   margin: 40px 0;
}
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
.cardContainer{
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 10%;
}
.aboutCard{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 20%;
  height: 300px;
  background-color: #4685CC;
  text-align: center;
  padding-top: 20px;
}
.aboutusText{
  font-size: 16px;
  padding-top: 30px;
  color: #fff;
}
.titleText{
  padding-top: 10px;
  color:#FFDE00;
}
.divider{
    border: 1px solid #FFDE00;
    width: 80px;
    margin: 0 auto;
}
@media screen and (max-width: 500px) {
 .cardContainer{
    width: 100%;
    height: 100%;
    padding:10px;
    flex-direction: column;
  }
  .aboutCard{
    width: 100%;
    margin-top: 10px;
    padding:10px;
  }
}
</style>
