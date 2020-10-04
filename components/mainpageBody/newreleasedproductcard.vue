<template>
  <b-container>
    <h4 class="sub_title text-center">
      NEW RELEASES
    </h4>
    <carousel per-page="1" pagination-active-color="#4685CC" pagination-position="bottom-overlay" :per-page-custom="[[460, 2], [991, 5]]" class="mt-4">
      <slide>
        <b-card img-src="/multi/coffeemaker.jpg" img-alt="Image" img-top>
          <b-card-text class="card_text">
            Bear Digital Lunch Box
            Micro-computer Baby
            Multipurpose Cooker Mini
            <b-form-rating id="rating-lg-no-border" v-model="value" no-border variant="warning" />
            <b-card-text class="price_textbox row">
              <b-card-text class="promo_text">
                30,000 MMK
              </b-card-text>
              <b-card-text>
                25,000 MMK
              </b-card-text>
            </b-card-text>
          </b-card-text>
        </b-card>
      </slide>
      <slide>
        <b-card img-src="/multi/oven.jpg" img-alt="Image" img-top>
          <b-card-text class="card_text">
            Bear Digital Lunch Box
            Micro-computer Baby
            Multipurpose Cooker Mini
            <b-form-rating id="rating-lg-no-border" v-model="value" no-border variant="warning" />
            <b-card-text class="price_textbox row">
              <b-card-text class="promo_text">
                30,000 MMK
              </b-card-text>
              <b-card-text>
                25,000 MMK
              </b-card-text>
            </b-card-text>
          </b-card-text>
        </b-card>
      </slide>
      <slide>
        <b-card img-src="/multi/kettle.jpg" img-alt="Image" img-top />
        <b-card-text class="card_text">
          Bear Digital Lunch Box
          Micro-computer Baby
          Multipurpose Cooker Mini
          <b-form-rating id="rating-lg-no-border" v-model="value" no-border variant="warning" />
          <b-card-text class="price_textbox row">
            <b-card-text class="promo_text">
              30,000 MMK
            </b-card-text>
            <b-card-text>
              25,000 MMK
            </b-card-text>
          </b-card-text>
        </b-card-text>
      </slide>
      <slide>
        <b-card img-src="/multi/viruskiller.jpg" img-alt="Image" img-top>
          <b-card-text class="card_text">
            Bear Digital Lunch Box
            Micro-computer Baby
            Multipurpose Cooker Mini
            <b-form-rating id="rating-lg-no-border" v-model="value" no-border variant="warning" />
            <b-card-text class="price_textbox row">
              <b-card-text class="promo_text">
                30,000 MMK
              </b-card-text>
              <b-card-text>
                25,000 MMK
              </b-card-text>
            </b-card-text>
          </b-card-text>
        </b-card>
      </slide>
      <slide>
        <b-card img-src="/multi/coffeemaker.jpg" img-alt="Image" img-top>
          <b-card-text class="card_text">
            Bear Digital Lunch Box
            Micro-computer Baby
            Multipurpose Cooker Mini
            <b-form-rating id="rating-lg-no-border" v-model="value" no-border variant="warning" />
            <b-card-text class="price_textbox row">
              <b-card-text class="promo_text">
                30,000 MMK
              </b-card-text>
              <b-card-text>
                25,000 MMK
              </b-card-text>
            </b-card-text>
          </b-card-text>
        </b-card>
      </slide>
    </carousel>

    <b-row>
      <b-col lg="3" md="6" sm="6" cols="6" />
      <b-col lg="3" md="6" sm="6" cols="6" />
      <b-col lg="3" md="6" sm="6" cols="6" />
      <b-col lg="3" md="6" sm="6" cols="6" />
    </b-row>
  </b-container>
</template>
