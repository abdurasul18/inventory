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
import { useToast } from "vue-toast-notification";
const toast = useToast();
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

let addLoading = ref(false)
let mode = ref<'create' | 'update'>('create')
let currentItem = ref<IProject>()
async function addItem(item: any) {
  addLoading.value = true
  try {
    if (mode.value == 'create') {
      let res = await ProjectService.create(item)

    }
    else {
      let res = await ProjectService.update(currentItem.value?.id, item)
    }
    addShow.value = false
    toast.info('Project muvaffaqiyatli saqlandi')
    getList()
  }
  finally {
    addLoading.value = false
  }
}
let deleteShow = ref(false)

async function deleteItem() {
  deleteShow.value = false
  loading.value = true
  try {
    await ProjectService.delete(currentItem.value?.id)
    getList()
    toast.info('Muvaffaqiyatli o`chirildi')
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="intro-y box">
    <div class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60">
      <h2 class="mr-auto text-base font-medium">Loyiha</h2>
      <Button @click="mode = 'create', addShow = true" variant="primary">
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
              <Table.Th class="whitespace-nowrap">Nomi </Table.Th>
              <Table.Th class="whitespace-nowrap"> Qisqacha nomi</Table.Th>
              <Table.Th class="whitespace-nowrap"> Yil </Table.Th>
              <Table.Th class="text-right"> Amallar </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr v-for="(item, index) in list">
              <Table.Td>{{ index + 1 }}</Table.Td>
              <Table.Td>{{ item.name }}</Table.Td>
              <Table.Td>{{ item.shortName }}</Table.Td>
              <Table.Td>{{ item.year }}</Table.Td>
              <Table.Td class="text-right">
                <Button @click="currentItem = item, mode = 'update', addShow = true">
                  <Lucide class="w-4" icon="Edit" />
                </Button>
                <Button @click="currentItem = item, deleteShow = true" class="ml-1">
                  <Lucide class="w-4 text-danger" icon="Trash" />
                </Button>
              </Table.Td>
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
        <Loading :active="loading">
          <AddUpdateProject @close="addShow = false" @success="addItem" :item="currentItem" :mode="mode" />
        </Loading>
      </Dialog.Panel>
    </Dialog>
    <!-- END: Modal Content -->
    <Dialog :open="deleteShow" @close="deleteShow = false">
      <Dialog.Panel>

        <div class="p-5 text-center">
          <Lucide icon="FileQuestion" class="w-16 h-16 mx-auto mt-3 text-success" />
          <div class="mt-5 text-3xl">Tasdiqlang</div>
          <div class="mt-2 text-slate-500">
            Rostan ham o'chirmoqchimisiz?
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <Button type="button" variant="primary" @click="deleteItem" class="w-24">
            Tasdiqlash
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  </div>
</template>
