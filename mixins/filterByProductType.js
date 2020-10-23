/* eslint-disable no-console */
import { fan } from '@/static/content/allFan'
import { mosquitoKiller } from '@/static/content/mosquitoKiller'
import { iron } from '@/static/content/iron'
// eslint-disable-next-line camelcase
import { insect_repellent } from '@/static/content/insect_repellent'
import { vaccum } from '~/static/content/vaccum'

export default {
  data () {
    return {
      fan,
      mosquitoKiller,
      iron,
      insect_repellent,
      vaccum,
      routeName: this.$route.params.dataName,
      totalPages: this.$route.params.dataName.length / 24 * 10
    }
  }
}
