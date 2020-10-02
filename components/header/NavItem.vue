<template>
  <b-navbar-nav id="custom_nav_bar">
    <div v-for="(navItem,index) in navItems" :key="index" class="custom_nav_item">
      <b-nav-item :to="navItem.link">
        {{ navItem.title }}
      </b-nav-item>
      <div v-if="navItem.subProducts" class="sub_products">
        {{ navItem.subProducts }}
      </div>
    </div>
  </b-navbar-nav>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: 'Home Applicants',
          link: 'homeApplicants',
          subProducts: [
            {
              name: 'Product one',
              link: ''
            },
            {
              name: 'Product two',
              link: ''
            }
          ]
        }, {
          title: 'Kitchen Applicants',
          link: 'kitchenApplicants',
          subProducts: [
            {
              name: 'Product one',
              link: ''
            },
            {
              name: 'Product two',
              link: ''
            }
          ]
        }, {
          title: 'FAQ',
          link: 'faq'
        }, {
          title: 'About Us',
          link: 'aboutus'
        }
      ]
    }
  }
}
</script>

<style scoped>
#custom_nav_bar{
  width: 100%;
}
.custom_nav_item{
  width: 20%;
  margin-right: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-family: "Poppins";
 display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  position: relative;
}

.custom_nav_item .nuxt-link-exact-active {
  font-weight: bold;
  color: black;
}
.sub_products{
  display: none;
  position: absolute;
  top: 100%;
  width: 400px;
  height: 200px;
  background: rgb(228, 228, 228);
}
.custom_nav_item:hover .sub_products{
  display: block;
}
.custom_nav_item:hover .sub_products{
  animation: animate 300ms ease-in-out forwards;
  animation-delay: -150ms;
}
@keyframes animate{
  0%{
    opacity: 0;
    transform: rotateX(-270deg);
  }
  50%{
    transform: rotateX(20deg);
  }
  100%{
    transform: rotateX(0deg);
  }
}
@media screen and (max-width: 991px) {
  .custom_nav_item{
  width: 100%;
}
}
</style>
