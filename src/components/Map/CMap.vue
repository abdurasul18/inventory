<template>
  <n-drawer v-model:show="modelShow" display-directive="show" :width="1100">
    <n-drawer-content closable>
      <div style="height: 80vh; width: 100%">
        <l-map v-model="zoom" v-model:zoom="zoom" :center="markerLatLng">
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-control-layers />
          <l-marker :lat-lng="markerLatLng" draggable @dragend="addMarker">
            <l-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="31.063"
                viewBox="0 0 20 31.063"
              >
                <g
                  id="Group_16"
                  data-name="Group 16"
                  transform="translate(-408 -150.001)"
                >
                  <path
                    id="Subtraction_21"
                    data-name="Subtraction 21"
                    d="M10,31.064h0L1.462,15.208A10,10,0,1,1,20,10a9.9,9.9,0,0,1-1.078,4.522l-.056.108c-.037.071-.077.146-.121.223L10,31.062ZM10,2a8,8,0,1,0,8,8,8,8,0,0,0-8-8Z"
                    transform="translate(408 150)"
                    fill="${color}"
                  />
                  <circle
                    id="Ellipse_26"
                    data-name="Ellipse 26"
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(412 154)"
                    fill="${color}"
                  />
                </g>
              </svg>
            </l-icon>
          </l-marker>
        </l-map>
        <div class="flex justify-center my-4">
          <Button
            @click="
              $emit('save');
              modelShow = false;
            "
            color="primary"
            class="text-white bg-indigo-800 p-4 "
            style="width: 350px"
          >
            Saqlash
          </Button>
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>
<script>
/* eslint-disable */
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import Button from "../../base-components/Button";

export default {
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
    Button
  },
  props: {
    location: {
      default: () => {
        return [];
      },
    },
    show: {
      default: false,
    },
  },
  data() {
    return {
      zoom: 13,
      iconWidth: 25,
      iconHeight: 40,
      center: [41.311206675258866, 69.27973151206972],
    };
  },
  watch: {},
  computed: {
    modelShow: {
      get() {
        return this.show;
      },
      set(val) {
        this.$emit("update:show", val);
      },
    },
    markerLatLng: {
      get() {
        return this.location;
      },
      set(val) {
        this.$emit("update:location", val);
      },
    },
  },
  methods: {
    getLocation(res) {
      this.center = [res.coords?.latitude, res.coords?.longitude];
      this.markerLatLng = [res.coords?.latitude, res.coords?.longitude];
    },
    addMarker(e) {
      this.$emit("update:location", [e.target?._latlng.lat, e.target?._latlng.lng]);
    },
    notAllowed() {
      this.center = [41.311206675258866, 69.27973151206972];
      this.markerLatLng = [41.311206675258866, 69.27973151206972];
    },
  },
  mounted() {
    if (!this.location?.[0] || !this.location?.[1]) {
      navigator.geolocation.getCurrentPosition(this.getLocation, this.notAllowed);
    }
  },
};
</script>
