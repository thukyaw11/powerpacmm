<template>
  <div class="top_header fixedContainer" data-aos="fade-down">
    <b-container>
      <b-navbar toggleable="lg" variant="faded" type="light" class="searchbarContainer">
        <b-navbar-brand href="#" class="logo_imagebox">
          <img src="/logo.png" height="100" alt="" class="logo_imagebox">
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
          <MiddleBanner class="ml-auto d-none d-lg-block" />
          <!-- <Search class="ml-auto d-none d-md-block d-lg-block" /> -->
          <!-- Right aligned nav items -->
          <SearchBox class="d-none d-lg-block" />
        </b-collapse>
      </b-navbar>
      <b-navbar toggleable="lg" variant="faded" type="light">
        <b-collapse id="nav-collapse" is-nav>
          <NavItem class="ml-auto" />
        </b-collapse>
      </b-navbar>
    </b-container>
    <MiddleBanner class="ml-auto d-sm-block d-xs-block d-md-none" />
    <SearchBox class="ml-1 d-sm-block d-xs-block d-md-none" />
  </div>
</template>
<script>
import NavItem from '@/components/header/navitem'
import MiddleBanner from '@/components/header/middleBanner'
import SearchBox from '@/components/header/searchbox'
export default {
  components: {
    NavItem,
    MiddleBanner,
    SearchBox
  }
}
</script>
<style scoped>
.navbar-toggler{
    width: 47px;
    height: 34px;
    outline: none;
    border:none;
}
.navbar-toggler .line{
    width: 100%;
    float: left;
    height: 3px;
    background-color: #fff;
    margin-bottom: 5px;
}
.fixedContainer {
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: #fff;
}
.searchbarContainer{
  padding:0px;
}
.logo_imagebox{
  padding: 0px;
}
@media screen and (max-width: 500px) {
  .logo_imagebox{
    height: 100px;
}
}
</style>