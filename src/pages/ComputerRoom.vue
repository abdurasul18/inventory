<script setup lang="ts">
import _ from "lodash";
import { ref, computed, watch, onMounted, toRefs } from "vue";
import Button from "../base-components/Button";
import Pagination from "../base-components/Pagination";
import { FormCheck, FormInput, FormSelect } from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import Tippy from "../base-components/Tippy";
import { Dialog, Menu } from "../base-components/Headless";
import Table from "../base-components/Table";
import { PCService, IPCRoom } from "../services/pc-room";
import { ISchool } from "../services/school";
import { useRoute } from "vue-router";
import Loading from "../base-components/Loading/Loading.vue";
import AppNotFound from "../base-components/AppNotFound.vue";
import AddUpdatePCRoom from "../components/pages/AddUpdatePCRoom.vue";
import { paginate } from "../globals";
import { useUserSession } from "../stores/userSession";
import { OrganizationService } from "../services/organization";
import { useToast } from "vue-toast-notification";
const toast = useToast();

const route = useRoute();
const { user } = toRefs(useUserSession());
let routeId = computed(() => String(route.params.id || "") || user.value?.organizationId);
watch(
  () => routeId.value,
  async () => {
    getSchool();
    getList();
  }
);
let loading = ref(false);
let list = ref<IPCRoom[]>([]);
let school = ref<ISchool>();
function getSchool() {
  OrganizationService.getById(routeId.value).then((res) => {
    school.value = res.data;
  });
}
onMounted(() => {
  getList();
  getSchool();
});
let page = ref(1);
let limit = ref(20);
let total = ref(0);
let params = computed(() => {
  return {
    page: page.value - 1,
    size: limit.value,
    organizationId: routeId.value,
  };
});

async function getList() {
  try {
    loading.value = true;
    const res = await PCService.getList(params.value);
    list.value = res.data.content;
    total.value = res.data.totalElements;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}

watch(
  () => params.value,
  () => {
    getList();
  }
);

let addLoading = ref(false);
let addShow = ref(false);
let mode = ref<"create" | "update">("create");
let currentItem = ref<IPCRoom>();
async function addItem(item: any) {
  addLoading.value = true;
  let payload = {
    ...item,
    schoolId: routeId.value,
  };
  try {
    if (mode.value == "create") {
      let res = await PCService.create(payload);
    } else {
      let res = await PCService.update(currentItem.value?.id, payload);
    }
    addShow.value = false;
    toast.info("Muvaffaqiyatli saqlandi");
    getList();
  } finally {
    addLoading.value = false;
  }
}
let deleteShow = ref(false);

async function deleteItem() {
  deleteShow.value = false;
  loading.value = true;
  try {
    await PCService.delete(currentItem.value?.id);
    getList();
    toast.info("Muvaffaqiyatli o`chirildi");
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <h2 class="mt-10 text-lg font-medium intro-y">
    {{ school?.soatoResponse.nameUz }} {{ school?.name }}
  </h2>

  <Loading :active="loading" style="min-height: 500px">
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="flex flex-wrap items-center col-span-12 mt-2 intro-y xl:flex-nowrap">
        <div class="flex items-center w-full mt-3 xl:w-auto xl:mt-0">
          <!-- <div class="relative w-56 text-slate-500">
                        <FormInput type="text" class="w-56 pr-10 !box" placeholder="Search..." />
                        <Lucide icon="Search" class="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3" />
                    </div> -->
        </div>
      </div>
      <div class="flex justify-between col-span-12">
        <Button variant="secondary"  class="mr-5" @click="$router.back()"><Lucide icon="ArrowLeft"/>  Orqaga </Button>
        <Button
          @click="(addShow = true), (mode = 'create')"
          class="ml-auto"
          variant="primary"
        >
          Qo'shish
        </Button>
      </div>
      <!-- BEGIN: Data List -->
      <div class="col-span-12 overflow-auto intro-y 2xl:overflow-visible">
        <Table class="border-spacing-y-[10px] border-separate -mt-2 text-center">
          <Table.Thead>
            <Table.Tr>
              <Table.Th class="border-b-0 whitespace-nowrap"> # </Table.Th>
              <Table.Th class="border-b-0 whitespace-nowrap"> Xona nomi </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap"> Raqami </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
               Maktab
              </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
                Hudud
              </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
                Amallar
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody v-if="list.length">
            <Table.Tr v-for="(item, index) in list" :key="index" class="intro-x">
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md w-10 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ paginate(index, page, limit) }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.name }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.number }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.organizationResponse?.name }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.organizationResponse?.soatoResponse.nameUz }}
              </Table.Td>

              <Table.Td
                class="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400"
              >
                <div class="flex items-center justify-center">
                  <button
                    @click="(currentItem = item), (mode = 'update'), (addShow = true)"
                    class="flex items-center text-info mr-3"
                  >
                    <Lucide icon="Edit" class="w-4 h-4 mr-1" />
                  </button>
                  <a
                    class="flex items-center text-danger"
                    href="#"
                    @click="(currentItem = item), (deleteShow = true)"
                  >
                    <Lucide icon="Trash2" class="w-4 h-4 mr-1" />
                  </a>
                </div>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
          <AppNotFound v-else />
        </Table>
        <div class="flex justify-end">
          <n-pagination
            class="mt-4"
            v-model:page="page"
            :item-count="total"
            :page-sizes="[10, 20, 30, 40]"
            v-model:page-size="limit"
            show-size-picker
          />
        </div>
      </div>
      <!-- END: Data List -->
      <!-- BEGIN: Pagination -->
      <div
        class="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap"
      ></div>
      <!-- END: Pagination -->
    </div>
  </Loading>

  <Dialog staticBackdrop :open="addShow" @close="addShow = false">
    <Dialog.Panel class="px-5 py-10">
      <Loading :active="loading">
        <AddUpdatePCRoom
          @close="addShow = false"
          @success="addItem"
          :item="currentItem"
          :mode="mode"
        />
      </Loading>
    </Dialog.Panel>
  </Dialog>
  <!-- END: Modal Content -->
  <Dialog :open="deleteShow" @close="deleteShow = false">
    <Dialog.Panel>
      <div class="p-5 text-center">
        <Lucide icon="FileQuestion" class="w-16 h-16 mx-auto mt-3 text-success" />
        <div class="mt-5 text-3xl">Tasdiqlang</div>
        <div class="mt-2 text-slate-500">Rostan ham o'chirmoqchimisiz?</div>
      </div>
      <div class="px-5 pb-8 text-center">
        <Button type="button" variant="primary" @click="deleteItem" class="w-24">
          Tasdiqlash
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
  <!-- END: Delete Confirmation Modal -->
</template>
