<template>
  <h1>Vue Cube.js Echarts</h1>
  <div class="dashboard">
    <div class="cards-container">
      <query-builder :cubejs-api="cubejsApi" :query="totalPaintingsQuery">
        <template v-slot="{ loading, resultSet }">
          <div v-if="loading" class="loading">Loading...</div>
          <div v-if="!loading && resultSet !== undefined">
            <Card :resultSet="resultSet" title="Total Paintings" />
          </div>
        </template>
      </query-builder>

      <query-builder :cubejs-api="cubejsApi" :query="orderStatusQuery">
        <template v-slot="{ loading, resultSet }">
          <div v-if="loading" class="loading">Loading...</div>
          <div v-if="!loading && resultSet !== undefined">
            <OrderCard :resultSet="resultSet" title="Order Status" />
          </div>
        </template>
      </query-builder>
    </div>
    <div class="table-container">
      <query-builder :cubejs-api="cubejsApi" :query="artistQuery">
        <template v-slot="{ loading, resultSet }">
          <div v-if="loading" class="loading">Loading...</div>
          <div v-if="!loading && resultSet !== undefined">
            <Table v-if="!loading" title="" :resultSet="resultSet" />
          </div>
        </template>
      </query-builder>
    </div>
  </div>
  <div class="charts-section">
    <query-builder
      :cubejs-api="cubejsApi"
      :query="paintingsByClassificationQuery"
    >
      <template v-slot="{ loading, resultSet }">
        <div v-if="loading" class="loading">Loading...</div>
        <div v-if="!loading && resultSet !== undefined">
          <PieChart
            v-if="!loading"
            title="Classification of Paintings"
            :resultSet="resultSet"
          />
        </div>
      </template>
    </query-builder>

    <query-builder :cubejs-api="cubejsApi" :query="paintingsByNationalityQuery">
      <template v-slot="{ loading, resultSet }">
        <div v-if="loading" class="loading">Loading...</div>
        <div v-if="!loading && resultSet !== undefined">
          <BarChart
            v-if="!loading"
            title="Paintings by Nationality"
            :resultSet="resultSet"
          />
        </div>
      </template>
    </query-builder>
  </div>
</template>

<script>
import cubejs from "@cubejs-client/core";
import { QueryBuilder } from "@cubejs-client/vue3";
import Table from "./components/Table";
import Card from "./components/Card";
import OrderCard from "./components/OrderCard";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";

const cubejsApi = cubejs(
  "1bea38a48b6e92af20a7026bdb29893ce6fadb1d76edad085121f326acb7ccf0c5077ff7242af7cf8f7afc0ba5420bcb464e384c4721aeb94d54e05ed1975f30",
  {
    apiUrl: "http://localhost:4000/cubejs-api/v1",
  }
);

export default {
  name: "App",
  components: {
    QueryBuilder,
    Card,
    OrderCard,
    Table,
    PieChart,
    BarChart,
  },
  data() {
    return {
      cubejsApi,
      totalPaintingsQuery: {
        measures: ["Artworks.count"],
      },
      orderStatusQuery: {
        measures: ["Orders.count"],
        timeDimensions: [],
        order: {
          "Orders.count": "desc",
        },
        filters: [],
        dimensions: ["Orders.status"],
      },
      artistQuery: {
        measures: ["Artworks.count"],
        timeDimensions: [],
        order: {
          "Artworks.count": "desc",
        },
        dimensions: ["Artworks.artist"],
        filters: [
          {
            member: "Artworks.count",
            operator: "gte",
            values: ["1000"],
          },
          {
            member: "Artworks.artist",
            operator: "set",
          },
          {
            member: "Artworks.artist",
            operator: "notContains",
            values: ["Unknown"],
          },
        ],
      },
      paintingsByNationalityQuery: {
        measures: ["Artworks.count"],
        dimensions: ["Artworks.nationality"],
        timeDimensions: [],
        order: {
          "Artworks.dateacquired": "asc",
        },
        filters: [
          {
            member: "Artworks.count",
            operator: "gte",
            values: ["1000"],
          },
        ],
      },
      paintingsByClassificationQuery: {
        measures: ["Artworks.count"],
        timeDimensions: [],
        order: {
          "Artworks.count": "desc",
        },
        dimensions: ["Artworks.classification"],
        filters: [
          {
            member: "Artworks.count",
            operator: "gte",
            values: ["1000"],
          },
        ],
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 3rem;
  margin-top: 30px;
}
.dashboard{
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
.charts-section{
  margin-top: 20px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
}
.cards-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
.table-container {
  height: 100%;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 250px;
  min-height: 100px;
  padding: 2rem;
  border-radius: 5px;
  background-color: #fafafa;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}
.card-content {
  font-size: 2.5rem;
  font-weight: bold;
  color: #42b983;
  padding-top: 6px;
}
</style>
