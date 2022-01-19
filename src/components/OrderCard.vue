<template>
  <div class="card-wrapper">
    <h2 class="card-title">
      {{ title }}
    </h2>
    <div class="card-content-wrapper">
      <div v-for="(item, index) in items" :key="index" class="card-content">
        <span class="status">
          {{ item[0].toUpperCase() }}
        </span>
        <span class="count">
          {{ item[1] }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderCard",
  props: {
    title: String,
    resultSet: Object,
  },
  data() {
    return {
      items: this.resultSet
        .rawData()
        .map((item) => Object.values(item).map((element) => element)),
    };
  },
};
</script>

<style scoped>
.card-content-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.status {
  font-weight: bold;
  font-size: 1rem;
  color: darkseagreen;
}
</style>