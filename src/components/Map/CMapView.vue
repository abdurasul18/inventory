<template>
  <div
    style="height: 250px; width: 100%"
    v-if="position && position.length && position.length == 2"
  >
    <l-map v-model="zoom" v-model:zoom="zoom" :center="position">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-layers />
      <l-marker :lat-lng="position">
        <l-icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="31.063"
            viewBox="0 0 20 31.063"
          >
            <g id="Group_16" data-name="Group 16" transform="translate(-408 -150.001)">
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
  </div>
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
  },
  props: {
    position: {
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      zoom: 13,
      iconWidth: 25,
      iconHeight: 40,
    };
  },
};
</script>
