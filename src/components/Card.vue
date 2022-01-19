<template>
  <div class="card-wrapper">
    <h2 class="card-title">
      {{ title }}
    </h2>
    <span class="card-content">
      {{ count }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    resultSet: Object,
  },
  data() {
    return {
      count: this.resultSet
        .rawData()
        .map((item) => Object.values(item).map((value) => value))
        .join(" "),
    };
  },
};
</script>