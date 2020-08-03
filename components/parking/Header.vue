<template>
   <div class="parking-header">
      <div class="parking-flex">
         <div :style="{ 'flex-grow': 3 }">
            <div class="header">{{name}}</div>
         </div>
         <div>
            Offen
         </div>
      </div>
      <div class="parking-flex">
         <OpeningTimes :open-twenty-four-seven="parkingTime.openTwentyFourSeven" :opening-times="parkingTime.openingTimes" :style="{ 'flex-grow': 3 }"></OpeningTimes>
         <Capacity :free="capacity.free" :total="capacity.total"></Capacity>
      </div>
   </div>
</template>

<script>
   import Capacity from "./Capacity"
   import OpeningTimes from "./OpeningTimes"

   export default {
      name: "Header",
      components: {
         Capacity,
         OpeningTimes
      },
      props: {
         name: {
            type: String,
            required: true
         },
         capacity: {
            type: Object,
            required: true
         },
         parkingTime: {
            type: Object,
            required: true
         }
      }
   }
</script>

<style lang="scss" scoped>
   .parking-flex {
      .header {
         font-size: 19px;
         font-weight: 600;
      }
      display: flex;
      flex-wrap: wrap;
      padding: 5px 0;
      font-size: 16px;
   }
   #parking-opening-times {
      display: flex;
   }
   #openingTimes {
      flex-grow: 3;
   }
   #status {
      flex-grow: 2;
   }
</style>
