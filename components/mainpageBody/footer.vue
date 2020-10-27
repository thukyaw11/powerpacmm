<template>
  <div class="footer mt-5">
    <b-container class="p-0 m-0">

      <b-row no-gutters>
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <div class="footer_text_container">
            <img
              src="/logo.png"
              alt=""
              class="footer_logo"
            >
            <div class="footer_text">
              We are proud to be consistently voted as Singapore's trusted brand after 21 years of serving households locally and overseas.
            </div>
            <div class="footer_power_text">
              powerpac@2020 <br> Powered by YGR advertising agency
            </div>
          </div>
        </b-col>
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <div class="footer_link_container">
            <b-row no-gutters>
              <b-col
                xs="12"
                sm="12"
                md="4"
                lg="4"
              >
                <h5>Customer Service</h5>
                <ul
                  v-for="(item,index) in customer_services"
                  :key="index"
                >
                  <li>{{item.title}}</li>
                </ul>
              </b-col>
              <b-col
                xs="12"
                sm="12"
                md="4"
                lg="4"
              >
                <h5>Quick Shop</h5>
                <ul
                  v-for="(item,index) in quick_shop"
                  :key="index"
                >
                  <li>{{item.title}}</li>
                </ul>
              </b-col>
              <b-col
                xs="12"
                sm="12"
                md="4"
                lg="4"
              >
                <h5>Contact Info</h5>
                <ul
                  v-for="(item,index) in contact_us"
                  :key="index"
                >
                  <li>{{item}}</li>
                </ul>
              </b-col>
            </b-row>
            <div class="social_row">
              <p
                class="social_text"
                v-for="(item,index) in socials"
                :key="index"
              >
                {{ item.title }}
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>
<script>
export default {
  data () {
    return {
      customer_services: [
        { title: 'Contact Us', link: '' },
        { title: 'Terms and Conditions', link: '' },
        { title: 'Warranty Registration', link: '' },
        { title: 'Privacy Policy', link: '' }
      ],
      quick_shop: [
        { title: 'Home', link: '' },
        { title: 'Products', link: '' },
        { title: 'Promotions', link: '' },
        { title: 'Contact Us', link: '' },
      ],
      contact_us: [
        'Everson Electrical (S) Pts Ltd 5 Changi South Lane #030 - 01Myanmar GST Reg No : 200000000000Fax : 62333333', '+95 0977777777777777', 'sales@powerpac.com.mm'
      ],
      socials: [
        { title: 'facebook', link: '' },
        { title: 'messenger', link: '' },
        { title: 'shop.com.mm', link: '' },
      ]
    }
  }
}
</script>
<style scoped>
.social_row {
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid grey;
}
.social_text {
  line-height: 50px;
  color: white;
}
.footer_link_container {
  padding: 30px;
  width: 100%;
  height: 100%;
}
h5 {
  color: yellow;
  font-weight: bolder;
  text-decoration: underline yellow;
}
ul {
  list-style-type: none;
  padding-top: 10px;
}
li {
  color: white;
  font-family: "Poppins";
}
.footer {
  height: auto;
  width: 100%;
  background: #4685cc;
}
.footer_text_container {
  width: 100%;
  height: 100%;
  padding: 30px;
}
.footer_logo {
  width: 150px;
  height: 70px;
}
.footer_text {
  color: white;
  font-family: "Poppins";
  margin-top: 20px;
  font-size: 18px;
}
.footer_power_text {
  margin-top: 50px;
  font-family: "Poppins";
  color: white;
  font-size: 13px;
}
</style>
