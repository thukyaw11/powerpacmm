<template>
  <b-navbar-nav id="custom_nav_bar">
    <div v-for="(navItem,index) in navItems" :key="index" class="custom_nav_item">
      <b-nav-item :to="navItem.link">
        {{ navItem.title }}
      </b-nav-item>
      <div v-if="navItem.subProducts" class="sub_products">
        <div v-for="(product,i) in navItem.subProducts" :key="i">
          {{ product.imageURL }}
          <img :src="product.imageURL" alt="">
        </div>
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
              type: 'Fans',
              imageURL: '/homeapplicant/dryer.webp',
              childContent: [
                {
                  name: 'All Fans'
                },
                {
                  name: 'All Fans'
                }, {
                  name: 'All Fans'
                }
              ]
            },
            {
              type: 'Fans',
              imageURL: '/homeapplicant/dryer.webp',
              childContent: [
                {
                  name: 'All Fans'
                },
                {
                  name: 'All Fans'
                }, {
                  name: 'All Fans'
                }
              ]
            }

          ]
        }, {
          title: 'Kitchen Applicants',
          link: 'kitchenApplicants',
          subProducts: [
            {
              type: 'Kit',
              imageURL: '/dryer.webp',
              childContent: [
                {
                  name: 'All Kit'
                },
                {
                  name: 'All Kit'
                }, {
                  name: 'All Kit'
                }
              ]
            },
            {
              type: 'f kit',
              imageURL: '/dryer.webp',
              childContent: [
                {
                  name: 'All FKit'
                },
                {
                  name: 'f kit'
                }, {
                  name: 'f kit'
                }
              ]
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
    position: relative;
}
.custom_nav_item{
  width: 20%;
  margin-right: 5px;
  padding-bottom: 10px;
  text-align: center;
  font-family: "Poppins";
 display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  font-size: 13px;
}

.custom_nav_item .nuxt-link-exact-active {
  font-weight: bold;
  color: black;
}
.sub_products{
  display: none;
  position: absolute;
  top: 100%;
  width: 600px;
  height: 500px;
  z-index: 1;
  background: #F9F9F9;
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
.custom_nav_item:hover .sub_products{
  display: none;
}
}
</style>
