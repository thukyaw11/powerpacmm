<template>
  <div>
    <breadCumb :items="breadCumbItems" />
  </div>
</template>

<script>
import breadCumb from '@/components/mainpageBody/breadCumnb'
import { fan } from '@/static/content/allFan'
import { mosquitoKiller } from '@/static/content/mosquitoKiller'

export default {
  components: {
    breadCumb
  },
  data () {
    return {
      fan,
      mosquitoKiller
    }
  },
  computed: {
    singleItem () {
      return this.fan.find(element => element.navigator === this.$route.params.singleData)
    },
    breadCumbItems () {
      return [{
        text: 'Home / ',
        link: '/'
      },
      {
        text: `${this.productNameConvertor(this.singleItem.type)} /`,
        link: `/collections/${this.singleItem.type}`
      },
      {
        text: this.singleItem.productName,
        link: `/collections/${this.singleItem.type}/${this.singleItem.navigator}`,
        active: true
      }]
    }
  },
  methods: {
    productNameConvertor (nameInSmall) {
      switch (nameInSmall) {
        case 'fan':
          return 'All Fans'
        case 'mosquitoKiller':
          return 'Mosquito Killer'
      }
    }
  }
}
</script>
