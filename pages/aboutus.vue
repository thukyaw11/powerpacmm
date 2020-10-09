<template>
<div>
  <div class="titlebar">
    home / aboutus
  </div>
  <div class="titlebox">
   <span class="titletext">Welcome to PowerPac Myanmar</span> <br>
   <span class="titlesmtext">Brightens Up Your Life</span>
  </div>
  <div class="cardbox row">
    <div class="card">
      <span class="cardtitle">About Us</span>
        <hr>
    </div>
    <div class="card">hello</div>
    <div class="card">hello</div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  head: {
    title: 'About Us',
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
.titlebar{
  height: 50px;
  background-color: #EEEEEE;
  font-size: 18px;
  font-family: 'Poppins';
  padding-left: 70px;
  color:#000;
  padding-top:10px;
}
.titlebox{
  height: 510px;
  background-color: #4685CC;
  opacity: 76%;
  text-align: center;
  padding-top: 15%;
}
.titletext{
  font-size: 43px;
  font-family: 'Poppins';
  color: #fff;
}
.titlesmtext{
  font-size: 20px;
  font-family: 'Poppins';
  color: #fff;
}
.cardbox{
  height: 800px;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  margin-left: 10%;
}
.card{
  border: 1px solid #000;
  background-color: #4685CC;
  height: 330px;
  width: 310px;
}
.cardtitle{
  font-size: 20px;
  color: #FFDE00;
  text-align: center;
  margin-top: 10%;
}
.devider{
}
</style>
