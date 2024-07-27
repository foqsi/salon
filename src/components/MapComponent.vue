<template>
  <div style="width: 100%; height: 400px;">
    <GMapMap
      :center="center"
      :zoom="zoom"
      style="width: 100%; height: 400px;"
      @ready="onMapReady"
    >
      <GMapMarker
        :position="center"
        @click="toggleInfoWindow"
      />
      <GMapInfoWindow
        :position="center"
        :opened="infoWindowOpened"
        @closeclick="infoWindowOpened = false"
      >
        <div>
          <h3>El Reno Nail Spa</h3>
          <p>1601 Investors Ave, El Reno, OK, 73036</p>
        </div>
      </GMapInfoWindow>
    </GMapMap>
  </div>
</template>

<script>
import { ref } from 'vue';
import { GMapMap, GMapMarker, GMapInfoWindow } from '@fawmi/vue-google-maps';

export default {
  name: 'MapComponent',
  components: {
    GMapMap,
    GMapMarker,
    GMapInfoWindow
  },
  setup() {
    const center = { lat: 35.51309382301597, lng: -97.97322797601785 };
    const zoom = ref(14);
    const infoWindowOpened = ref(true);

    const onMapReady = () => {
      console.log('Map is ready');
    };

    const toggleInfoWindow = () => {
      infoWindowOpened.value = !infoWindowOpened.value;
    };

    return {
      center,
      zoom,
      infoWindowOpened,
      onMapReady,
      toggleInfoWindow,
    };
  },
};
</script>
