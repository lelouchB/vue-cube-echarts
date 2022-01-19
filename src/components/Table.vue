<template>
  <div v-if="!loading" class="wrapper">
    <div class="table-header">
      <div class="col-1">Artist</div>
      <div class="col-2">Number of Paintings</div>
    </div>
    <div class="table-body" v-for="(item, index) in items.data" :key="index">
      <span class="col-1">
        {{ item[0] }}
      </span>
      <span class="col-2">
        {{ item[1] }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    resultSet: Object,
    loading: Boolean,
  },
  computed: {
    items: function () {
      if (this.loading) return [];
      if (this.resultSet !== undefined) {
        return {
          data: this.resultSet
            .rawData()
            .map((item) => Object.values(item).map((value) => `${value}`)),
        };
      } else {
        return [];
      }
    },
  },
};
</script>

<style scoped>
.table-header,
.table-body {
  display: flex;
  width: 800px;
}
.col-1 {
  flex: 1;
}
.col-2 {
  flex: 0 0 43%;
}
.table-header {
  background-color: #f5f5f5;
  font-size: 1.4rem;
  font-weight: bold;
}
.table-body {
  background-color: #fff;
  font-size: 1.2rem;
  padding-bottom: 5px;
  border-bottom: 1px solid #ddd;
}
.table-body > .col-2 {
  color: #42b983;
}
</style>
