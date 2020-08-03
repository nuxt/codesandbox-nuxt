<template>
   <div>
      <GmapMap
         :center="center"
         :zoom="15"
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
               clickableIcons: false
            },
            center: {
               lat: 50.928804,
               lng: 11.589303
            },
            parkingPlaces: [],
            selectedParkingPlace: undefined
         }
      },
      async asyncData() {
         try {
            const parkingPlaces = await axios.get(
               `${process.env.PARKING_SERVER}/api/v1/parking`
            );
            return parkingPlaces.data;
         } catch (e) {
            return {parkingPlaces: []};
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
