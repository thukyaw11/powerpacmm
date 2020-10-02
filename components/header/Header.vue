<template>
  <b-container>
    <b-navbar toggleable="lg" variant="faded" type="light">
      <b-navbar-brand href="#">
        <img src="/logo.png" height="100" alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <NavItem class="ml-auto" />
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <ContactUs />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>
<script>

import NavItem from '@/components/header/NavItem'
import ContactUs from '@/components/header/ContactUs'
export default {
  components: {
    NavItem,
    ContactUs
  }
}
</script>
<style scoped>

</style>
