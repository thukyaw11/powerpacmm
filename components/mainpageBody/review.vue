<template>
  <b-container class="mt-5">
    <h4 class="sub_title text-center">
      REVIEWS AND COMMENTS
    </h4>
    <hr class="divider">
    <carousel
      per-page="1"
      pagination-active-color="#4685CC"
      pagination-position="bottom-overlay"
      :scroll-per-page="true"
      :per-page-custom="[[300, 2], [500,2], [991, 5]]"
      class="mt-4 mb-5"
      style="background-color:blue; padding:20px"
    >
      <slide
        v-for="(review,index) in reviews"
        :key="index"
      >
        <div
          class="product_card"
          data-aos="zoom-in"
        >
          <!--  -->
          <h1 class="reviewer_name">
            {{ review.customerName }}
          </h1>
          <div class="review_text">
            {{ review.reviewContent }}
          </div>
          <div class="review_rating">
            <!-- <b-form-rating
              id="rating-lg-no-border"
              v-model="newRelease.rating"
              readonly
              no-border
              variant="warning"
            /> -->
          </div>
        </div>
      </slide>
    </carousel>
  </b-container>
</template>

<script>
import { reviews } from '@/static/content/review'
export default {
  data () {
    return {
      reviews
    }
  }
}
</script>

<style scoped>
.product_card {
  width: 100%;
  height: 300px;
}
.product_image_container {
  width: 100%;
  height: 50%;
  position: relative;
}
.product_image_container:hover .overlay {
  opacity: 1;
}
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 90%;
  height: 90%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: 80px 30px 30px 30px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
}
.sale_badge {
  position: absolute;
  width: 50px;
  height: 25px;
  line-height: 25px;
  background: red;
  color: #fff;
  text-align: center;
  right: 0;
  bottom: 0;
  font-family: "Poppins";
}
.product_image {
  width: 100%;
  height: 100%;
  padding: 10px;
}
.product_content {
  min-height: 90px;
  width: 100%;
  padding: 10px;
  text-align: center;
}
.reviewer_name {
  text-align: left;
  font-size: 18px;
}
.review_text {
  text-align: left;
  font-size: 14px;
}
.review_rating {
  height: 50px;
  width: 80%;
  left: 0 auto;
}
.review_box {
  height: ;
}
.row {
  display: flex;
  justify-content: space-around;
}
.real_price {
  font-size: 14px;
  color: #c4c4c4;
  text-decoration: line-through;
}
.divider {
  border: 1px solid #4685cc;
  width: 80px;
  margin: 0 auto;
}
</style>
