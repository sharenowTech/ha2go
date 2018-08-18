<template>
  <div class="FleetDropdown columns">
    <div
      v-for="(location, i) in locations"
      :key="i"
      class="column col-4 col-sm-6"
    >
      <a
        @click.prevent="setLocation(location)"
        class="location-link"
        href="#"
      >
        {{ location.city_name }}
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FleetDropdown',

  props: {
    locations: {
      type: Array,
      default: () => []
    },
    pickHandler: Function
  },

  methods: {
    ...mapActions({
      fetchVehicles: 'fleet/fetchVehicles',
      pickLocation: 'fleet/pickLocation'
    }),

    setLocation (location) {
      const locationAlias = location.city_name.toLowerCase()
      // Save location id
      this.pickLocation(location.location_id)
      // Toggle dropdown
      this.pickHandler()
      // Load vehicles
      this.fetchVehicles(location.location_id)
      // Update URL
      this.$router.push({
        name: 'fleet-of-city',
        params: {
          locationAlias
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.FleetDropdown {
  margin-bottom: .5rem;
}
</style>
