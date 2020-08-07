<template>
   <div>
      <GmapMap
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
               @click="onMarkerClicked(parkingPlace)"
            />
         </GmapCluster>
      </GmapMap>
      <transition name="fade">
         <ParkingPlaceDetail :data="selectedParkingPlace" v-if="selectedParkingPlace"></ParkingPlaceDetail>
      </transition>
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
            selectedParkingPlace: undefined
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
            };
            if(customer) {
               zoom = customer.zoom || zoom;
               coordinates = customer.coordinates || coordinates;
            }
            return {
               parkingPlaces: parkingPlaces,
               center: coordinates,
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
         onMarkerClicked(parkingPlace) {
            this.center = parkingPlace.coordinates;
            this.selectedParkingPlace = parkingPlace;
         },

         reset() {
            this.selectedParkingPlace = undefined;
            return false;
         },

         getMarker(parkingPlace) {
            return getMarkerIcon(this.selectedParkingPlace === parkingPlace, parkingPlace.status.isDynamic, parkingPlace.objectType === "Parkhaus", true, parkingPlace.capacity.free);
         }
      }
   }
</script>

<style scoped>
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
</style>
