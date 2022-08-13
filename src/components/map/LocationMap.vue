<template>
  <div>
    <LMap
      style="height: 300px"
      :zoom="zoom"
      :center="center ?? [45.815399, 15.966568]"
    >
      <LTileLayer :url="url" :attribution="attribution"> </LTileLayer>
      <LMarker :lat-lng="markerPosition ?? [45.815399, 15.966568]"> </LMarker>
    </LMap>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "LocationMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  props: {
    center: null,
    markerPosition: null,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
    };
  },
};
</script>
