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
            <img src="@/assets/images/badge_TDSoftware.svg">
         </div>
         <button class="gps-button" @click="gpsButtonClicked">
            <img src="@/assets/images/my_location-24px.svg"/>
         </button>
      </div>
      <Footer :items="footerItems"></Footer>
   </div>
</template>

<script>
   import axios from "axios";
   import GmapCluster from "vue2-google-maps/dist/components/cluster"; // replace src with dist if you have Babel issues
   import ParkingPlaceDetail from "../components/parking/ParkingPlaceDetail";
   import {getMarkerIcon} from "../util/MapIconUtil";
   import Footer from "@/components/parking/Footer";
   import {gmapApi} from 'vue2-google-maps'

   export default {
      name: "parking",
      components: {GmapCluster, ParkingPlaceDetail, Footer},
      computed: {
         google: gmapApi
      },
      data() {
         return {
            userMarker: undefined,
            options: {
               zoomControl: true,
               mapTypeControl: false,
               scaleControl: false,
               streetViewControl: false,
               rotateControl: false,
               fullscreenControl: false,
               disableDefaultUi: true,
               clickableIcons: false,
               styles: [
                  {
                     featureType: "transit",
                     elementType: "labels.icon",
                     stylers: [{visibility: "off"}]
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
                  url: "/legal?id=Parken-Nutzungsbedingungen"
               }
            ]
         };
      },
      async asyncData({query}) {
         let zoom = 15,
            coordinates = {
               lat: 50.928804,
               lng: 11.589303
            },
            marker,
            name,
            isCustomer = false;
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
                     url: `${process.env.PARKING_SERVER ||
                     "http://localhost:8080"}/marker/${customer.marker}`,
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
               parkingPlaces: [],
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
         }
      },
      methods: {
         onMarkerClicked(coordinates, context) {
            this.$refs.mapRef.$mapPromise.then(map => {
               if (context.zoom) {
                  map.setZoom(context.zoom);
               } else {
                  this.selectedParkingPlace = context;
               }
               map.panTo(coordinates);
            });
         },

         reset() {
            this.selectedParkingPlace = undefined;
            return false;
         },

         getMarker(parkingPlace) {
            return getMarkerIcon(
               this.selectedParkingPlace === parkingPlace,
               parkingPlace.status.isDynamic,
               parkingPlace.objectType === "Parkhaus",
               true,
               parkingPlace.capacity.free
            );
         },

         gpsButtonClicked() {
            if (navigator.geolocation) {
               if (this.userMarker) {
                  this.userMarker.setMap(null);
               }
               navigator.geolocation.getCurrentPosition((pos) => {
                  this.$refs.mapRef.$mapPromise.then(map => {
                     const userPos = {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                     };
                     const icon = {
                        path: "M12,2C8.14,2,5,5.14,5,9c0,5.25,7,13,7,13s7-7.75,7-13C19,5.14,15.86,2,12,2z M12,4c1.1,0,2,0.9,2,2c0,1.11-0.9,2-2,2 s-2-0.89-2-2C10,4.9,10.9,4,12,4z M12,14c-1.67,0-3.14-0.85-4-2.15c0.02-1.32,2.67-2.05,4-2.05s3.98,0.73,4,2.05 C15.14,13.15,13.67,14,12,14z",
                        fillColor: '#000000',
                        fillOpacity: .6,
                        anchor: new google.maps.Point(0, 0),
                        strokeWeight: 0,
                        scale: 1.5
                     };
                     this.userMarker = new google.maps.Marker({
                        position: userPos,
                        map: map,
                        animation: google.maps.Animation.DROP,
                        icon: icon
                     });
                     map.panTo(userPos);
                  });
               });
            } else {
               if (this.userMarker) {
                  this.userMarker.setMap(null);
                  this.userMarker = undefined;
               }
               this.error = "Geolocation is not supported by this browser.";
            }
         }
      }
   };
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

      .fade-enter-active,
      .fade-leave-active {
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

      .gps-button {
         background-color: rgba(255, 255, 255, 1);
         border-radius: 20px;
         border: solid 1px rgba(255, 255, 255, 1);
         position: absolute;
         top: 40px;
         right: 10px;
         text-align: center;
         z-index: 10;
         height: 40px;
         width: 40px;
         box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.5);
      }
   }
</style>
