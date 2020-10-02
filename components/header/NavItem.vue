<template>
  <b-navbar-nav id="custom_nav_bar">
    <b-nav-item v-for="(navItem,index) in navItems" :key="index" class="custom_nav_item" :to="navItem.link">
      {{ navItem.title }}
    </b-nav-item>
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
          link: 'homeApplicants'
        }, {
          title: 'Kitchen Applicants',
          link: 'kitchenApplicants'
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
}

.custom_nav_item .nuxt-link-exact-active {
  font-weight: bold;
  color: black;
}
@media screen and (max-width: 991px) {
  .custom_nav_item{
  width: 100%;
}
}
</style>
