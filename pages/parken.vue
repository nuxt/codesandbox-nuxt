<template>
   <div>
      <GmapMap
         ref="mapRef"
         :center="center"
         :zoom="zoom"
         :options="options"
         id="map"
         @click="reset"
      >
         <GmapCluster :zoomOnClick="true">
            <GmapMarker
               :key="index"
               v-for="(parkingPlace, index) in parkingPlaces"
               :position="parkingPlace.coordinates"
               :clickable="true"
               :draggable="false"
               :title="parkingPlace.name"
               :icon="getMarker(parkingPlace)"
               @click="onMarkerClicked(parkingPlace.coordinates, parkingPlace)"
            />
         </GmapCluster>
         <GmapMarker
            class="small-marker"
            v-if="customerMarker"
            :position="customerMarker.coordinates"
            :clickable="true"
            :draggable="false"
            :icon="getCustomerMarker(customerMarker.marker)"
            @click="onMarkerClicked(customerMarker.coordinates, customerMarker)"
         />
      </GmapMap>
      <transition name="fade">
         <ParkingPlaceDetail :data="selectedParkingPlace" v-if="selectedParkingPlace"></ParkingPlaceDetail>
      </transition>
      <div class="tds-badge">
         <img src="@/assets/images/badge_TDSoftware.svg" />
      </div>
   </div>
</template>

<script>
   import axios from "axios"
   import GmapCluster from 'vue2-google-maps/dist/components/cluster' // replace src with dist if you have Babel issues
   import ParkingPlaceDetail from "../components/parking/ParkingPlaceDetail"
   import {getMarkerIcon} from "../util/MapIconUtil"

   export default {
      name: "parking",
      components: {GmapCluster, ParkingPlaceDetail},
      data() {
         return {
            options: {
               zoomControl: false,
               mapTypeControl: false,
               scaleControl: false,
               streetViewControl: false,
               rotateControl: false,
               fullscreenControl: false,
               disableDefaultUi: true,
               clickableIcons: false,
               styles: [
                  {
                     featureType: 'transit',
                     elementType: 'labels.icon',
                     stylers: [{visibility: 'off'}]
                  }
               ]
            },
            center: undefined,
            parkingPlaces: [],
            selectedParkingPlace: undefined,
            customerMarker: undefined
         }
      },
      async asyncData({query}) {
         try {
            const {parkingPlaces, customer} = (await axios.get(
               `${process.env.PARKING_SERVER || "http://localhost:8080"}/api/v1/map`,
               {
                  params: {
                     apiKey: query["api-key"],
                     filter: query["filter"]
                  }
               }
            )).data;

            let zoom = 15, coordinates = {
               lat: 50.928804,
               lng: 11.589303
            }, marker, name;
            if(customer) {
               zoom = customer.zoom || zoom;
               coordinates = customer.coordinates || coordinates;
               marker = customer.marker;
               name = customer.name;
            }
            return {
               parkingPlaces: parkingPlaces,
               center: coordinates,
               customerMarker: {
                  coordinates: coordinates,
                  marker: marker,
                  name: name,
                  zoom: zoom
               },
               zoom: zoom
            };
         } catch (e) {
            return {parkingPlaces: [], center: {
                  lat: 50.928804,
                  lng: 11.589303
               }
            };
         }
      },
      methods: {
         onMarkerClicked(coordinates, context) {
            this.$refs.mapRef.$mapPromise.then((map) => {
               map.setCenter(coordinates);
               if (context.zoom) {
                  map.setZoom(context.zoom);
               } else {
                  this.selectedParkingPlace = context;
               }
            });
         },

         reset() {
            this.selectedParkingPlace = undefined;
            return false;
         },

         getMarker(parkingPlace) {
            return getMarkerIcon(this.selectedParkingPlace === parkingPlace, parkingPlace.status.isDynamic, parkingPlace.objectType === "Parkhaus", true, parkingPlace.capacity.free);
         },

         getCustomerMarker(marker) {
            if(!marker) return;
            return `${process.env.PARKING_SERVER || "http://localhost:8080"}/marker/${marker}`;
         }
      }
   }
</script>

<style lang="scss" scoped>
   #map {
      width: 100%;
      height: 100%;
      z-index: 1;
      position: fixed !important;
      top: 0;
      left: 0;
   }

   .fade-enter-active, .fade-leave-active {
      transition: opacity 1.5s;
   }

   .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
   {
      opacity: 0;
   }

   .tds-badge {
      position: absolute;
      top: 4px;
      right: 4px;
      z-index: 2;
      img {
          box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.5);
       }
   }

   .small-marker {
      max-height: 30px;
   }
</style>
