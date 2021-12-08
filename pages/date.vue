<template>
  <div>
    <table>
      <thead>
        <th v-for="head in table.heads" :key="head">{{ head }}</th>
      </thead>
      <tbody>
        <tr v-for="(row, i) in table.rows" :key="i">
          <td v-for="(col, j) in row" :key="j">
            <code v-if="j === 0">{{ col }}</code>
            <span v-else>
              {{ col }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  startOfToday,
  formatISO,
  addDays,
  subDays,
  differenceInDays,
} from "date-fns";

export default {
  data() {
    return {
      checkin: "2021-01-22",
      checkout: "2021-01-27",
    };
  },
  computed: {
    table() {
      const checkin = this.checkin;
      const checkout = this.checkout;
      return {
        heads: [
          "function (name taken from date-fns function)",
          "vanilla",
          "date-fns",
          "dayjs",
        ],
        rows: [
          ["new Date()", new Date(), "-", this.$dayjs().toDate()],
          [
            "startOfToday() => new Date set at 00:00:00",
            this.jsStartOfToday(),
            startOfToday(),
            this.$dayjs().startOf("day").toDate(),
          ],
          [
            "formatISO(date, { representation: 'date' }): ",
            this.jsFormatISO(new Date()),
            formatISO(new Date(), { representation: "date" }),
            this.$dayjs().format("YYYY-MM-DD"),
          ],
          [
            "addDays(date, amount)",
            this.jsAddDays(new Date(), 2),
            addDays(new Date(), 2),
            this.$dayjs().add(2, "day").toDate(),
          ],
          [
            "subDays(date, amount): return subtracted days",
            this.jsSubDays(new Date(checkin), 2),
            subDays(new Date(checkin), 2),
            this.$dayjs().subtract(2, "day").toDate(),
          ],
          [
            "differenceInDays(dateLeft, dateRight)",
            this.jsDifferenceInDays(new Date(), new Date(checkout)) +
              " (vanilla use Math.ceil)",
            differenceInDays(new Date(), new Date(checkout)) +
              " (date-fns use Math.floor)",
            this.$dayjs(new Date()).diff(new Date(checkout), "days") +
              " (dayjs use Math.floor)",
          ],
        ],
      };
    },
  },
  methods: {
    jsStartOfToday() {
      return new Date(new Date().setHours(0, 0, 0, 0));
    },
    jsFormatISO(date) {
      return new Date().toISOString().split("T")[0];
    },
    jsAddDays(date, amount) {
      const d = new Date(date);
      d.setDate(d.getDate() + amount);
      return d;
    },
    jsSubDays(date, amount) {
      // use different implementation from jsAddDays for testing
      return new Date(date.getTime() - 3600 * 1000 * 24 * amount);
    },
    jsDifferenceInDays(dateLeft, dateRight) {
      let difference_in_time = dateLeft.getTime() - dateRight.getTime();
      let difference_in_day = difference_in_time / (1000 * 3600 * 24);
      return Math.ceil(difference_in_day);
    },
  },
};
</script>