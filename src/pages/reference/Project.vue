<script setup lang="ts">
import _ from "lodash";
import Table from "../../base-components/Table";
import Preview from "../../base-components/Preview";
import { FormSwitch, FormInput, FormSelect } from "../../base-components/Form";
import { Dialog } from "../../base-components/Headless";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import AppNotFound from "../../base-components/AppNotFound.vue";
import { ref, onMounted, computed, watch } from "vue";
import { ProjectService, IProject } from "../../services/reference/project";
import Loading from "../../base-components/Loading/Loading.vue";
import AddUpdateProject from "../../components/pages/AddUpdateProject.vue";
let loading = ref(false);
let list = ref<IProject[]>([]);
let addShow = ref(false);
let total = ref(20)
let page = ref(1)
let search = ref("")
let limit = ref(10)
let limits = ref([10, 20, 50, 100])
let payload = computed(() => {
  return {
    page: page.value - 1,
    size: limit.value,
    search: search.value,
  };
});
async function getList() {
  loading.value = true;
  try {
    const { data } = await ProjectService.getList(payload.value);
    list.value = data.content;
    total.value = data.totalElements;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
onMounted(() => {
  getList();
});
watch(() => payload.value, () => {
  getList();
});
</script>

<template>
  <div class="intro-y box">
    <div class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60">
      <h2 class="mr-auto text-base font-medium">Loyiha</h2>
      <Button @click="addShow = true" variant="primary">
        <Lucide icon="Plus" class="mr-2" /> Qo'shish
      </Button>
    </div>
    <div class="flex items-center px-4">
      <FormInput id="tabulator-html-filter-value" v-model="search" type="text" class="mt-2 w-40 mr-2"
        placeholder="Search..." />
      <FormSelect id="tabulator-html-filter-field" v-model="limit" class="mt-2 w-40">
        <option v-for="item in limits" :value="item">{{ item }}</option>
      </FormSelect>

    </div>
    <Loading :active="loading" class="p-5">
      <div class="overflow-x-auto">
        <Table class="mt-5">
          <Table.Thead variant="light">
            <Table.Tr>
              <Table.Th class="whitespace-nowrap">#</Table.Th>
              <Table.Th class="whitespace-nowrap"> First Name </Table.Th>
              <Table.Th class="whitespace-nowrap"> Last Name </Table.Th>
              <Table.Th class="whitespace-nowrap"> Username </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>1</Table.Td>
              <Table.Td>Angelina</Table.Td>
              <Table.Td>Jolie</Table.Td>
              <Table.Td>@angelinajolie</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>2</Table.Td>
              <Table.Td>Brad</Table.Td>
              <Table.Td>Pitt</Table.Td>
              <Table.Td>@bradpitt</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>3</Table.Td>
              <Table.Td>Charlie</Table.Td>
              <Table.Td>Hunnam</Table.Td>
              <Table.Td>@charliehunnam</Table.Td>
            </Table.Tr>
          </Table.Tbody>
          <AppNotFound v-if="!list.length" />
        </Table>
      </div>
    </Loading>
    <!-- BEGIN: Modal Toggle -->
    <!-- END: Modal Toggle -->
    <!-- BEGIN: Modal Content -->
    <Dialog staticBackdrop :open="addShow" @close="addShow = false">
      <Dialog.Panel class="px-5 py-10">
        <AddUpdateProject @close="addShow = false" />
      </Dialog.Panel>
    </Dialog>
    <!-- END: Modal Content -->
  </div>
</template>
