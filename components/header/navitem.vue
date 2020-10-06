<template>
  <b-navbar-nav id="custom_nav_bar">
    <div v-for="(navItem,index) in navItems" :key="index" class="custom_nav_item">
      <b-nav-item :to="localePath(navItem.link)" class="nav_link">
        {{ navItem.title }}
      </b-nav-item>
      <div v-if="navItem.subProducts" class="sub_products">
        <div v-for="(product,i) in navItem.subProducts" :key="i" class="product_container">
          <img :src="product.imageURL" alt="" class="product_image">
          <div class="product_content">
            <h4 class="product_header">
              {{ product.type }}
            </h4>
            <span v-if="product.childContent">
              <ul v-for="(product_detail,indextwo) in product.childContent" :key="indextwo" class="product_detail_list">
                <nuxt-link :to="localePath('/collections/' + product_detail.link)">
                  <li>
                    {{ product_detail.name }}
                  </li>
                </nuxt-link>

              </ul>
            </span>
          </div>
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
          title: 'Home Apps',
          link: '/homeApplicants',
          subProducts: [
            {
              type: 'Fans',
              imageURL: '/homeapplicant/dryer.webp',
              childContent: [
                {
                  name: 'All Fans',
                  link: 'allFans',
                  filterValue: ''
                },
                {
                  name: 'All Fans',
                  link: 'allFans',
                  filterValue: 'iFan'
                }, {
                  name: 'All Fans',
                  link: 'allFans',
                  filterValue: 'powerpac'
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
          title: 'Kitchen Apps',
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
        },
        {
          title: 'Promotion',
          link: 'promo'
        },
        {
          title: 'About Us',
          link: '/aboutus'
        },
        {
          title: 'Infomation',
          link: 'info'
        },
        {
          title: 'Contact Us',
          link: '/contactus'
        }
      ]
    }
  }
}
</script>

<style scoped>
.product_header{
  text-align: left;
}
.product_detail_list{
  color: black;
  list-style-type: none;
  text-align: left;
   -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently */
}
.product_container{
  width: 50%;
  float: left;
}
.product_content{
  padding: 10px 50px;
  line-height: 30px;
  cursor: pointer;
}
.product_image{
  width: 80%;
  padding: 30px 30px 30px 0px;
  height: 150px;
}
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
  background:#4685CC;
  font-weight: bold;
}

.sub_products{
  display: none;
  position: absolute;
  top: 100%;
  min-width: 700px;
  min-height: 300px;
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
