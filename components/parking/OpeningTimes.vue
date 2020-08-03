<template>
   <div>
      <div v-if="openingTimesView" v-for="(dateTime, i) in openingTimesView" :key="i">
         <div>{{dateTime.date}}</div>
         <div>{{dateTime.time}}</div>
      </div>
   </div>
</template>

<script>
   import DateTimeUtil from "../../util/DateTimeUtil"

   export default {
      name: "OpeningTimes",
      props: {
         openTwentyFourSeven: {
            type: Boolean,
            default: false
         },
         openingTimes: {
            type: Array
         }
      },
      computed: {
         openingTimesView() {
            if (this.openTwentyFourSeven) {
               return [
                  {
                     date: DateTimeUtil.dateString(1, 7),
                     time: DateTimeUtil.timeString("00:00", "00:00")
                  }
               ];
            }
            if(!this.openingTimes) return;
            return this.openingTimes.map(times => {
               return {
                  date: DateTimeUtil.dateString(times.startDay, times.endDay),
                  time: DateTimeUtil.timeString(times.startTime, times.endTime)
               }
            });
         }
      }
   }
</script>

<style lang="scss" scoped>

</style>
