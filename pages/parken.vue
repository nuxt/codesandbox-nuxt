<template>
   <div class="parking-container">
      <div class="map-container">
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
               v-if="customerMarker.isCustomer"
               :position="customerMarker.coordinates"
               :clickable="true"
               :draggable="false"
               :icon="customerMarker.marker"
               @click="onMarkerClicked(customerMarker.coordinates, customerMarker)"
            />
         </GmapMap>
         <transition name="fade">
            <ParkingPlaceDetail :data="selectedParkingPlace" v-if="selectedParkingPlace"></ParkingPlaceDetail>
         </transition>
         <div class="tds-badge" v-if="!customerMarker.isCustomer">
            <img src="@/assets/images/badge_TDSoftware.svg"/>
         </div>
      </div>
      <Footer :items="footerItems"></Footer>
   </div>
</template>

<script>
   import axios from "axios"
   import GmapCluster from 'vue2-google-maps/dist/components/cluster' // replace src with dist if you have Babel issues
   import ParkingPlaceDetail from "../components/parking/ParkingPlaceDetail"
   import {getMarkerIcon} from "../util/MapIconUtil"
   import Footer from "@/components/parking/Footer"

   export default {
      name: "parking",
      components: {GmapCluster, ParkingPlaceDetail, Footer},
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
            customerMarker: undefined,
            footerItems: [
               {
                  name: "Nutzungsbedingungen",
                  url: "/nutzungsbedingungen?type=parken"
               }
            ]
         }
      },
      async asyncData({query}) {

         let zoom = 15, coordinates = {
            lat: 50.928804,
            lng: 11.589303
         }, marker, name, isCustomer = false;
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
            if (customer) {
               isCustomer = true;
               zoom = customer.zoom || zoom;
               coordinates = customer.coordinates || coordinates;
               if (customer.marker) {
                  marker = {
                     url: `${process.env.PARKING_SERVER || "http://localhost:8080"}/marker/${customer.marker}`,
                     scaledSize: {width: 100, height: 100, f: "px", b: "px"}
                  };
               } else {
                  isCustomer = false;
               }

               name = customer.name;
            }
            return {
               parkingPlaces: parkingPlaces,
               center: coordinates,
               customerMarker: {
                  coordinates: coordinates,
                  marker: marker,
                  name: name,
                  zoom: zoom,
                  isCustomer: isCustomer
               },
               zoom: zoom
            };
         } catch (e) {
            return {
               parkingPlaces: [], center: coordinates,
               customerMarker: {
                  coordinates: coordinates,
                  marker: marker,
                  name: name,
                  zoom: zoom,
                  isCustomer: isCustomer
               },
               zoom: zoom
            };
         }
      },
      methods: {
         onMarkerClicked(coordinates, context) {
            this.$refs.mapRef.$mapPromise.then((map) => {
               if (context.zoom) {
                  map.setCenter(coordinates);
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
         }
      }
   }
</script>

<style lang="scss" scoped>
   .map-container {
      position: fixed !important;
      top: 0;
      left: 0;
      bottom: 10px;
      width: 100%;
      height: 94vh;
      #map {
         width: 100%;
         height: 100%;
         z-index: 1;
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
   }
</style>
