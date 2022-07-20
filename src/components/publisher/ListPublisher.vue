<script>
import { mapState, mapStores, mapActions } from "pinia";
import { usePublisherStore } from "@/stores/publisher";
import DataTable from "../template/DataTable.vue";
export default {
  components: { DataTable },
  data() {
    return {
      columns: [
        { label: "ID", field: "id" },
        { label: "Descrição", field: "description" },
      ],
    };
  },
  computed: {
    ...mapStores(usePublisherStore),
    ...mapState(usePublisherStore, ["publishers"]),
  },
  methods: {
    ...mapActions(usePublisherStore, ["getAllPublishers", "deletePublisher"]),
    async deleteItem(publisher) {
      try {
        await this.deletePublisher(publisher.id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
  },
  async mounted() {
    try {
      await this.getAllPublishers();
    } catch (e) {
      alert(e);
    }
  },
};
</script>
<template>
  <div class="publisher-list">
    <data-table
      :columns="columns"
      :items="publishers"
      @edit="$emit('edit', $event)"
      @delete="deleteItem"
    />
  </div>
</template>

<style scoped>
.publisher-list {
  margin: 3% auto;
  width: 70%;
}
</style>