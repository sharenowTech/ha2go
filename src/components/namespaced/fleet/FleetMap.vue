<template>
  <div class="FleetMap">
    <l-map
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      ></l-tile-layer>
      <l-marker
        v-for="(vehicle, i) in vehicles"
        :key="i"
        :lat-lng="coordinates(vehicle)"></l-marker>
    </l-map>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import L from 'leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import marker from '@/assets/icons/marker.svg'

export default {
  name: 'FleetMap',

  components: {
    LMap,
    LTileLayer,
    LMarker
  },

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

    center () {
      return this.coordinates(this.vehicles[0])
    },

    zoom: () => 12,

    url: () => 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',

    attribution: () => {
      return '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
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
  },

  methods: {
    coordinates (vehicle) {
      return L.latLng(
        vehicle.location.gps.coordinates[1],
        vehicle.location.gps.coordinates[0]
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.FleetMap {
  height: 70vh;
}
</style>
