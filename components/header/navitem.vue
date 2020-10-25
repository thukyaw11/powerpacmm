<template>
  <b-container id="nav_wrapper">
    <b-navbar-nav
      id="custom_nav_bar"
      style="padding: 0px"
    >
      <div
        v-for="(navItem,index) in navItems"
        :key="index"
        class="custom_nav_item"
      >
        <div class="nav_link_container">
          <b-nav-item
            :to="localePath(navItem.link)"
            data-aos="fade-down"
            class="nav_link_item"
          >
            <p class="nav_link">
              {{ navItem.title }} <span v-if="navItem.subProducts">
                <img
                  src="/down-arrow.png"
                  alt=""
                  class="down-arrow"
                >
              </span>
            </p>
          </b-nav-item>
        </div>
        <div
          v-if="navItem.subProducts"
          class="sub_products"
        >
          <div
            v-for="(product,i) in navItem.subProducts"
            :key="i"
            class="product_container"
          >
            <img
              :src="product.imageURL"
              alt=""
              class="product_image"
            >
            <div class="product_content">
              <h6 class="product_header">
                <b> {{ product.type }}</b>
              </h6>
              <span v-if="product.childContent">
                <ul
                  v-for="(product_detail,indextwo) in product.childContent"
                  :key="indextwo"
                  class="product_detail_list"
                >
                  <nuxt-link :to="localePath('/collections/' + product_detail.link)">
                    <li
                      class="sub_product_list_child"
                      style="color:black"
                    >
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
  </b-container>
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
              type: 'FANS',
              imageURL: '/homeapplicant/fan.webp',
              childContent: [
                {
                  name: 'All Fans',
                  link: 'fan',
                  filterValue: ''
                },
                {
                  name: 'iFan',
                  link: 'fan',
                  filterValue: 'iFan'
                }, {
                  name: 'powerpac',
                  link: 'fan',
                  filterValue: 'powerpac'
                }
              ]
            },
            {
              type: 'IRON',
              imageURL: '/homeapplicant/iron.png',
              childContent: [
                {
                  name: 'Irons',
                  link: 'iron'
                }
              ]
            },
            {
              type: 'INSECT REPELLENTS',
              imageURL: '/homeapplicant/insectRepellent.png',
              childContent: [
                {
                  name: 'Insect repellents',
                  link: 'insect_repellent'
                }
              ]
            },
            {
              type: 'vaccum Cleaner',
              imageURL: '/homeapplicant/vacuumcleaner.png',
              childContent: [
                {
                  name: 'vaccum Cleaner',
                  link: 'vaccum'
                }
              ]
            }

          ]
        }, {
          title: 'Kitchen Apps',
          link: 'kitchenApplicants',
          subProducts: [
            {
              type: 'Large Kitchen App',
              imageURL: '/homeapplicant/largeapp.png',
              childContent: [
                {
                  name: 'Fridge',
                  link: 'fridge'
                }
              ]
            },
            {
              type: 'Kettles',
              imageURL: '/homeapplicant/kettles.png',
              childContent: [
                {
                  name: 'Electric Jug/Kettles',
                  link: 'jug'
                }
              ]
            },
            {
              type: 'Rice cooker/steamboat',
              imageURL: '/homeapplicant/ricecooker.png',
              childContent: [
                {
                  name: 'Rice Cooker',
                  link: 'cooker'
                },
                {
                  name: 'Steamboat',
                  link: 'steamboat'
                }
              ]
            },
            {
              type: 'Blender',
              imageURL: '/homeapplicant/blender.png',
              childContent: [
                {
                  name: 'Blender',
                  link: 'blender'
                },
                {
                  name: 'Chopper',
                  link: 'chopper'
                }
              ]
            },
            {
              type: 'Oven/Toaster/Freyer',
              imageURL: '/homeapplicant/toaster.png',
              childContent: [
                {
                  name: 'Ovan',
                  link: 'ovan'
                },
                {
                  name: 'Toaster',
                  link: 'toaster'
                },
                {
                  name: 'Freyer',
                  link: 'freyer'
                }
              ]
            }

          ]
        },
        {
          title: 'FAQ',
          link: 'faq'
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
.nav_link_item:hover {
  background: #0067b9;
  color: yellow;
}
.nav_link_item:hover .nav_link {
  color: yellow;
}
.nav_link_item {
  height: 100%;
  transition: 1s ease-in-out;
}
.down-arrow {
  width: 10px;
  height: 10px;
  margin-left: 5px;
}
.nav_link_container {
  position: relative;
}
.sub_product_list_child {
  transition: 0.3s;
}
.sub_product_list_child:hover {
  padding-left: 10px;
}
.product_header {
  text-align: left;
}
.product_detail_list {
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
.product_container {
  width: 50%;
  float: left;
}
.product_content {
  padding: 10px 50px;
  line-height: 30px;
  cursor: pointer;
}
.product_image {
  width: 80%;
  padding: 30px 30px 30px 0px;
  height: 150px;
}
#custom_nav_bar {
  width: 100%;
}
.nav_link {
  color: white;
  margin-top: 5px;
}
.custom_nav_item {
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
  background: #4685cc;
  font-weight: bold;
}

.sub_products {
  display: none;
  position: absolute;
  top: 90%;
  left: 0;
  min-width: 1000px;
  min-height: 300px;
  z-index: 1;
  background: #f9f9f9;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.custom_nav_item:hover .sub_products {
  display: flex;
}

.custom_nav_item:hover .sub_products {
  animation: animate 300ms ease-in-out forwards;
  animation-delay: -150ms;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: rotateX(-270deg);
  }
  50% {
    transform: rotateX(20deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
@media screen and (max-width: 991px) {
  .custom_nav_item {
    width: 100%;
  }
  .custom_nav_item:hover .sub_products {
    display: none;
  }
}
</style>
