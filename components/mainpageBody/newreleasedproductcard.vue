<template>
  <b-container>
    <h4 class="sub_title text-center">
      NEW RELEASES
    </h4>
    <hr class="divider">
    <carousel
      per-page="1"
      pagination-active-color="#4685CC"
      pagination-position="bottom-overlay"
      :per-page-custom="[[300, 2], [991, 5]]"
      class="mt-4"
    >
      <slide
        v-for="(newRelease,index) in newReleases"
        :key="index"
      >
        <b-card :img-src="newRelease.imageURL" img-alt="Image" img-top class="mr-2 mb-5">
          <b-card-text class="card_text">
            {{ newRelease.productName }}
            <b-form-rating id="rating-lg-no-border" v-model="newRelease.rating" readonly no-border variant="warning" />
            <b-card-text class="price_textbox row">
              <b-card-text class="real_price">
                {{ newRelease.realPrice }} MMK
              </b-card-text>
              <b-card-text>
                {{ newRelease.promoPrice }} MMK
              </b-card-text>
            </b-card-text>
          </b-card-text>
        </b-card>
      </slide>
    </carousel>
  </b-container>
</template>

<script>

import { newReleases } from '@/static/content/newRelease'
export default {
  data () {
    return {
      newReleases
    }
  }
}

</script>

<style scoped>
.price_textbox{
  justify-content: space-around;
}
.card_text{
  font-size: 14px;
  text-align: center;
}
.real_price{
  font-size: 14px;
  color: #C4C4C4;
  text-decoration: line-through;
}
.divider{
    border: 1px solid #4685CC;
    width: 80px;
    margin: 0 auto;
}
</style>
