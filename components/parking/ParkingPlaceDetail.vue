<template>
   <div class="parking-detail-container">
      <Header :name="data.name" :capacity="data.capacity" :parkingTime="data.parkingTime"></Header>
   </div>
</template>

<script>
   import Header from "./Header"

   export default {
      name: "ParkingPlaceDetail",
      components: {
         Header
      },
      props: {
         data: {
            required: true,
            type: Object
         }
      }
   }
</script>

<style lang="scss" scoped>
   /* Hide scrollbar for Chrome, Safari and Opera */
   .parking-detail-container::-webkit-scrollbar {
      display: none;
   }

   .parking-detail-container {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      overflow-y: scroll;
      height: 20%;
      z-index: 2;
      position: fixed !important;
      bottom: 15px;
      left: 20%;
      width: 60%;
      background: white;
      padding: 10px;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
   }
   @media only screen and (max-width: 430px) {
      .parking-detail-container {
         left: 10%;
         width: 80%;
      }
   }
   @media only screen and (max-width: 320px) {
      .parking-detail-container {
         left: 5%;
         width: 90%;
      }
   }
   @media only screen and (max-width: 300px) {
      .parking-detail-container {
         left: 0;
         width: 100%;
      }
   }
   @media only screen and (max-width: 270px) {
      .parking-detail-container {
         .parking-header {
            .parking-flex {
               div {
                  padding-top: 5px;
               }
            }
         }
      }
   }
</style>
