import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: 108697137620643, //  change 'null' to your Facebook Page ID,
  theme_color: '#4685CC', // theme color in HEX
  locale: 'en_US' // default 'en_US'
})
