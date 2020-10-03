<template>
  <b-container >
    <b-navbar toggleable="lg" variant="faded" type="light" style="padding:0px">
      <b-navbar-brand href="#" style="padding:0px" >
        <img src="/logo.png" height="100" alt="">
      </b-navbar-brand>
      <button
        class="navbar-toggler collapsed"
        target="nav-collapse"
      >
        <span class="line" />
        <span class="line" />
        <span class="line" />
      </button>
      <b-navbar-toggle target="nav-collapse">
        <span class="navbar-toggler-icon">
          <i class="fas fa-bars" style="color:#fff; font-size:28px;" />
        </span>
      </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <Search class="ml-auto d-none d-md-block d-lg-block" />
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <ContactUs class="d-none d-md-block d-lg-block" />
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-navbar toggleable="lg" variant="faded" type="light">
        <b-collapse id="nav-collapse" is-nav>
          <NavItem class="ml-auto" />
          <b-navbar-nav class="ml-auto">
            <ContactUs class="d-md-none" />
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
    
  </div>
</template>
<script>
import NavItem from "@/components/header/NavItem";
import Search from "@/components/header/SearchBox";
import ContactUs from "@/components/header/ContactUs";
export default {
  components: {
    NavItem,
    ContactUs,
    Search,
  },
};
</script>
<style scoped>
.navbar-toggler {
  width: 47px;
  height: 34px;
  outline: none;
  border: none;
}
.navbar-toggler .line {
  width: 100%;
  float: left;
  height: 3px;
  background-color: #fff;
  margin-bottom: 5px;
}
</style>
