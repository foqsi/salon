<template>
  <div>
    <GMapMap
      :center="center"
      :zoom="zoom"
      style="width: 100%; height: 600px"
      @ready="onMapReady"
    >
      <GMapMarker :position="center" @click="toggleInfoWindow" />
      <GMapInfoWindow
        :position="center"
        :opened="infoWindowOpened"
        @closeclick="infoWindowOpened = false"
      >
        <div class="p-2 w-60">
          <img
            src="../assets/images/storefront.jpg"
            alt="El Reno Nail Spa"
            class="w-full h-28 object-cover rounded-md mb-2"
          />
          <h3 class="text-lg font-bold text-red-600 mb-1">El Reno Nail Spa</h3>
          <p class="text-sm text-gray-700 mb-1">
            1605 Investors Ave<br />El Reno, OK 73036
          </p>
          <a
            href="https://www.google.com/maps/place/El+Reno+Nail+Spa/@35.5132677,-97.976761,17z/data=!4m10!1m2!2m1!1sel+reno+nail+spa!3m6!1s0x87ade50cb473037d:0xcc81d0f60c379674!8m2!3d35.5133954!4d-97.9731611!15sChBlbCByZW5vIG5haWwgc3BhkgEKbmFpbF9zYWxvbqoBQwoIL20vMHo0angQATIfEAEiG9u0eL24k-2D8CJ43aLu8w5YGTuu2Buz3C60bTIUEAIiEGVsIHJlbm8gbmFpbCBzcGHgAQA!16s%2Fg%2F11lw3nms5d?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            class="text-blue-500 underline text-sm"
          >
            View on Google Maps
          </a>
        </div>
      </GMapInfoWindow>
    </GMapMap>
  </div>
</template>

<script>
import { ref } from "vue";
import { GMapMap, GMapMarker, GMapInfoWindow } from "@fawmi/vue-google-maps";

export default {
  name: "MapComponent",
  components: {
    GMapMap,
    GMapMarker,
    GMapInfoWindow,
  },
  setup() {
    const center = { lat: 35.51309382301597, lng: -97.97322797601785 };
    const zoom = ref(18);
    const infoWindowOpened = ref(true);

    const onMapReady = () => {
      console.log("Map is ready");
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
