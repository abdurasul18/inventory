<template>
    <n-drawer v-model:show="modelShow" :width="1100">
        <n-drawer-content closable>
            <div style="height: 80vh; width: 100%">
                <l-map v-model="zoom" v-model:zoom="zoom" :center="markerLatLng">
                    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
                    <l-control-layers />
                    <l-marker :lat-lng="markerLatLng" draggable @dragend="addMarker">
                    </l-marker>
                </l-map>
                <div class="is-flex is-justify-content-center my-4">
                    <n-button @click="$emit('save'); modelShow = false" type="primary" style="width:350px">
                        Bekor qilish
                    </n-button>
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
} from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'

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
        location: {
            default: () => {
                return []
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
        }
    },
    watch: {},
    computed: {
        modelShow: {
            get() {
                return this.show
            },
            set(val) {
                this.$emit('update:show', val)
            },
        },
        markerLatLng: {
            get() {
                return this.location
            },
            set(val) {
                this.$emit('update:location', val)
            },
        },
    },
    methods: {
        getLocation(res) {
            this.center = [res.coords?.latitude, res.coords?.longitude]
            this.markerLatLng = [res.coords?.latitude, res.coords?.longitude]
        },
        addMarker(e) {
            this.$emit('update:location', [e.target?._latlng.lat, e.target?._latlng.lng])
        },
        notAllowed() {
            this.center = [41.311206675258866, 69.27973151206972]
            this.markerLatLng = [41.311206675258866, 69.27973151206972]
        }
    },
    mounted() {
        if (!this.location?.[0] || !this.location?.[1]) {
            navigator.geolocation.getCurrentPosition(this.getLocation, this.notAllowed)
        }
    },
}
</script>
  