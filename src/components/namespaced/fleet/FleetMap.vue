<template>
  <div class="FleetMap">
    MAP
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import marker from '@/assets/icons/marker.svg'

export default {
  name: 'FleetMap',

  props: {
    vehicles: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    ...mapGetters({
      activeLocation: 'fleet/activeLocation'
    }),

    mapCenter () {
      const { center } = this.activeLocation.mapSection
      return {
        lat: center.latitude,
        lng: center.longitude
      }
    },

    markerIcon () {
      return {
        url: marker,
        scaledSize: {
          width: 64,
          height: 42
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
