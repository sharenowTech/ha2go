<template>
  <div class="FleetLocationPicker">
    <h4 class="selected-location">
      <span v-if="activeLocation">
        {{ activeLocation.city_name }}
        <small>
          <a
            @click.prevent="pickHandler"
            class="location-link"
            href="#"
          >
            [change]
          </a>
        </small>
      </span>
      <span v-else>Select your city</span>
    </h4>
  </div>
</template>

<script>
export default {
  name: 'FleetLocationPicker',

  props: {
    activeLocation: Object,
    pickHandler: Function
  }
}
</script>

<style lang="scss" scoped>
</style>
