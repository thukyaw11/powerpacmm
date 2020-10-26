<template>
  <b-container class="mt-5">
    <h4
      class="sub_title text-center"
      data-aos="fade-in"
    >
      ONLINE RETAILERS
    </h4>
    <hr class="divider">
    <carousel
      per-page="1"
      pagination-active-color="#4685CC"
      :scroll-per-page="true"
      :per-page-custom="[[300, 2], [500,2], [991, 5]]"
      class="pt-5"
    >
      <slide
        v-for="(review,index) in reviews"
        :key="index"
      >
        <div
          class="review_card"
          data-aos="zoom-in"
        >
          <!--  -->
          <h5 class="reviewer_name">
            {{ review.customerName }}
          </h5>
          <div class="review_text">
            {{ review.reviewContent }}
          </div>
          <div class="review_rating">
            <b-form-rating
              id="rating-lg-no-border"
              v-model="rating"
              readonly
              no-border
              variant="warning"
              class="rating_star"
            />
            <div class="media">
              facebook
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </b-container>
</template>

<script>
export default {
  retailers: [
    {
      imageURL: '',
      link: ''
    }, {
      imageURL: '',
      link: ''
    }, {
      imageURL: '',
      link: ''
    }, {
      imageURL: '',
      link: ''
    }, {
      imageURL: '',
      link: ''
    }
  ]
}
</script>
