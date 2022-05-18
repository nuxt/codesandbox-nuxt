<template>
  <div class="flex-container-main">
    <div v-for="value in loan_data" :key="value.id">
      <div>Laenu id: {{ value.id }}</div>
      <div>Summa: {{ parseFloat(value.amount).toLocaleString("et") }}</div>
      <div>Esimene makse: {{ value.graafik.payment1.total }}</div>
      <div>---</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loan_data: [
        {
          id: "00001",
          amount: "100000",
          graafik: {
            payment1: {
              total: "100",
              interest: "10",
              principal: "90",
              residual: "900",
            },
          },
        },
        {
          id: "00002",
          amount: "200000",
          graafik: {
            payment1: {
              total: "200",
              interest: "30",
              principal: "750",
              residual: "800",
            },
          },
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.flex-container-main {
  background-color: #f1f1f1;
}
.flex-container-main > div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: lightgray;
  margin: 10px;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
}
</style>
