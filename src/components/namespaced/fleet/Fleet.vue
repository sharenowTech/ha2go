<template>
  <div class="Fleet">
    <FleetLocationPicker
      :activeLocation="activeLocation"
      :pickHandler="toggleDropdown"
    />
    <FleetDropdown
      v-if="showDropdown"
      :locations="locations"
      :pickHandler="toggleDropdown"
    />
    <FleetMap
      v-if="activeLocation"
      :vehicles="vehicles"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import FleetLocationPicker from '@/components/namespaced/fleet/FleetLocationPicker'
import FleetDropdown from '@/components/namespaced/fleet/FleetDropdown'
import FleetMap from '@/components/namespaced/fleet/FleetMap'

export default {
  name: 'Fleet',

  props: {
    // Comes from router
    locationAlias: {
      type: String,
      default: null
    }
  },

  components: {
    FleetLocationPicker,
    FleetDropdown,
    FleetMap
  },

  data () {
    return {
      showDropdown: true
    }
  },

  computed: {
    ...mapGetters({
      locations: 'fleet/locations',
      activeLocation: 'fleet/activeLocation',
      vehicles: 'fleet/vehicles'
    }),

    showMap () {
      return this.activeLocation
    }
  },

  methods: {
    ...mapActions({
      autoPickLocation: 'fleet/autoPickLocation',
      giveMeLocations: 'fleet/fetchLocations'
    }),

    toggleDropdown () {
      this.showDropdown = !this.showDropdown
    }
  },

  beforeMount () {
    if (this.locationAlias) {
      this.autoPickLocation(this.locationAlias)
      this.toggleDropdown()
    } else {
      this.giveMeLocations()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
