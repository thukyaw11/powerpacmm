<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <br>
    <b-container>
      <b-row>
        <b-col
          lg="3"
          md="3"
          sm="0"
          cols="0"
          class="d-none d-lg-block d-md-block"
        >
          <div class="filter_box">
            <div class="title">
              <h6>FILTER BY TYPE</h6>
            </div>
            <div class="filter_content">
              <div class="content_child">
                <a-checkbox @change="onChange">
                  filter by iFan
                </a-checkbox>
              </div>
              <div class="content_child">
                <a-checkbox @change="onChange">
                  filter by iFan
                </a-checkbox>
              </div>
              <div class="content_child">
                <a-checkbox @change="onChange">
                  filter by iFan
                </a-checkbox>
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="9" md="9" sm="12" cols="12" style="background: blue">
          <a-pagination v-model="current" :total="totalPages" show-less-items />
          <p v-for="fan in display" :key="fan.id">
            {{ fan }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import breadCumb from '@/components/mainpageBody/breadCumnb'
import { AllFans } from '@/static/content/allFan'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    breadCumb
  },
  data () {
    return {
      AllFans,
      current: 1,
      display: [],
      iFanCheck: false,
      filterValue: '',
      totalPages: AllFans.length / 5 * 10,
      breadCumbItems: [{
        text: 'Home / ',
        link: '/'
      },
      {
        text: 'All Fans',
        link: '/collections/allFans',
        active: true
      }]
    }
  },
  watch: {
    current (val) {
      this.current = val
      // eslint-disable-next-line no-console
      this.display = this.AllFans.filter(element => element.id <= val * 5 && element.id > (val * 5) - 5)
    }
  },
  mounted () {
    this.setInitialValue()
  },
  methods: {
    onChange () {
      this.iFanCheck = !this.iFanCheck
      this.iFanCheck ? this.setFilteredData() : this.setInitialValue()
    },
    setInitialValue () {
      this.totalPages = AllFans.length / 5 * 10

      this.display = this.AllFans.filter(element => element.id <= (this.current * 5) && element.id > (this.current * 5) - 5)
    },
    setFilteredData () {
      this.display = this.AllFans.filter(element => element.brand === 'iFan')

      this.totalPages = 10
    }
  },

  head: {
    title: 'All Fans',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Powerpac MM'
      }
    ]
  }

}
</script>

<style scoped>
.filter_box{
  width: 100%;
  height: 300px;
  border: 1px solid #F5F5F5;
}
.title{
  background: #F5F5F5;
  padding: 8px;
}
.content_child{
  padding: 10px;
}

</style>
