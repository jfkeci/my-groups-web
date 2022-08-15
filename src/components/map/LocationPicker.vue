<template>
  <div>
    <LMap
      style="height: 300px"
      :zoom="zoom"
      :center="center"
      @click="setMarker"
    >
      <LTileLayer :url="url" :attribution="attribution"> </LTileLayer>
      <LMarker :lat-lng="newMarkerPosition"> </LMarker>
      <LControl :position="'bottomleft'">
        <b-button-group>
          <b-button
            size="sm"
            id="button-set-position"
            v-if="!setterActive"
            @click="setterActive = true"
          >
            <b-icon icon="pin-map-fill" aria-hidden="true"></b-icon>
          </b-button>
          <b-button
            size="sm"
            id="button-lock-position"
            v-if="setterActive"
            @click="setterActive = false"
          >
            Done
          </b-button>
        </b-button-group>
        <b-tooltip target="button-set-position" triggers="hover">
          Set new position
        </b-tooltip>
        <b-tooltip target="button-lock-position" triggers="hover">
          Lock position
        </b-tooltip>
      </LControl>
    </LMap>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LControl } from "vue2-leaflet";

export default {
  name: "LocationPicker",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControl,
  },
  props: {
    markerPosition: null,
  },
  data() {
    return {
      zoom: 15,
      center: null,
      setterActive: false,
      newMarkerPosition: null,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    };
  },
  created() {
    this.center = this.markerPosition ?? [45.815399, 15.966568];
    this.newMarkerPosition = this.markerPosition ?? [45.815399, 15.966568];
  },
  computed: {
    isMarkerChanged() {
      return this.markerPosition != this.newMarkerPosition;
    },
  },
  methods: {
    setMarker(e) {
      if (this.setterActive) {
        this.newMarkerPosition = [e.latlng.lat, e.latlng.lng];
        this.emitNewPosition();
      }
    },
    emitNewPosition() {
      this.$emit("set-new-position", this.newMarkerPosition);
    },
  },
};
</script>
