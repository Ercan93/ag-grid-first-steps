<template>
  <ag-grid-vue
    style="width: 96vw; height: 50vh; margin:2vh 1vw;"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :defaultColDef="defaultColDef"
    :rowSelection="rowSelection"
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
      rowSelection: null,
      defaultColDef: {
        width: 170,
        resizable: true,
        sortable: true,
        filter: true,
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
      },
      { headerName: "Name", field: "name" },
      { headerName: "Platform", field: "platform" },
      {
        headerName: "Year of Release",
        field: "year_of_release",
      },
      { headerName: "Genre", field: "genre" },
      { headerName: "Publisher", field: "publisher" },
      { headerName: "NA Players", field: "na_players" },
      { headerName: "EU Players", field: "eu_players" },
      { headerName: "JP Players", field: "jp_players" },
      { headerName: "Other Players", field: "other_players" },
      { headerName: "Global Players", field: "global_players" },
      { headerName: "Critic Score", field: "critic_score" },
      { headerName: "Critic Count", field: "critic_count" },
      { headerName: "User Score", field: "user_score" },
      { headerName: "User Count", field: "user_count" },
      { headerName: "Developer", field: "developer" },
      { headerName: "Rating", field: "rating" },
    ];

    this.rowSelection = "multiple";
    this.rowData = this.gameDataGetters;
  },
};
</script>