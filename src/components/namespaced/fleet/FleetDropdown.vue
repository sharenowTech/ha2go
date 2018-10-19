<template>
  <div class="FleetDropdown columns">
    <div
      v-for="(location, i) in sort(locations)"
      :key="i"
      class="column col-4 col-sm-6"
    >
      <a
        @click.prevent="setLocation(location)"
        class="location-link"
        href="#"
      >
        {{ getFlag(location) }}
        {{ location.city_name }}
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import emoji from 'country-emoji'

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

    getFlag (location) {
      return emoji.flag(location.country)
    },

    sort (arr) {
      return arr.sort((a, b) => {
        if (a.country < b.country) return -1
        if (a.country > b.country) return 1
        return 0
      })
    },

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
  padding-bottom: 1rem;
  position: absolute;
  background: white;
  z-index: 10000;

  > div {
    text-align: center;

    > a {
      width: 5rem;
      display: inline-block;
      text-align: left;
    }
  }
}
</style>
