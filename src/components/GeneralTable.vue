<template>
  <ag-grid-vue
    style="width: 96vw; height: 50vh; margin:2vh 1vw;"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :defaultColDef="defaultColDef"
    rowSelection="multiple"
    @grid-ready="onGridReady"
  ></ag-grid-vue>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      columnDefs: null,
      rowData: null,
      defaultColDef: {
        width: 170,
        resizable: true,
      },
    };
  },
  components: {
    AgGridVue,
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    },
  },
  computed: {
    ...mapGetters(["gameDataGetters"]),
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: "Index",
        field: "index",
        checkboxSelection: true,
        sortable: true,
      },
      { headerName: "Name", field: "name", sortable: true },
      { headerName: "Platform", field: "platform", sortable: true },
      {
        headerName: "Year of Release",
        field: "year_of_release",
        sortable: true,
      },
      { headerName: "Genre", field: "genre", sortable: true },
      { headerName: "Publisher", field: "publisher", sortable: true },
      { headerName: "NA Players", field: "na_players", sortable: true },
      { headerName: "EU Players", field: "eu_players", sortable: true },
      { headerName: "JP Players", field: "jp_players", sortable: true },
      { headerName: "Other Players", field: "other_players", sortable: true },
      { headerName: "Global Players", field: "global_players", sortable: true },
      { headerName: "Critic Score", field: "critic_score", sortable: true },
      { headerName: "Critic Count", field: "critic_count", sortable: true },
      { headerName: "User Score", field: "user_score", sortable: true },
      { headerName: "User Count", field: "user_count", sortable: true },
      { headerName: "Developer", field: "developer", sortable: true },
      { headerName: "Rating", field: "rating", sortable: true },
    ];

    this.rowData = this.gameDataGetters;
  },
};
</script>