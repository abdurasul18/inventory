<script setup lang="ts">
import _ from "lodash";
import { ref, computed, toRefs, onMounted, watch } from "vue";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import Pagination from "../../base-components/Pagination";
import { FormCheck, FormInput, FormSelect } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import { Dialog, Menu } from "../../base-components/Headless";
import Table from "../../base-components/Table";
import { SchoolService, ISchool } from "../../services/school";
import { SoatoService, ISoato } from "../../services/soato";
import Loading from "../../base-components/Loading/Loading.vue";
import AppNotFound from "../../base-components/AppNotFound.vue";
import { paginate } from "../../globals";
import { useSideMenuStore } from "../../stores/side-menu";
import { OrganizationService } from "../../services/organization";
import { useRoute } from "vue-router";
let { breadcrumb } = toRefs(useSideMenuStore());
const route = useRoute();

breadcrumb.value = [
  {
    title: "Maktablar",
    url: route.fullPath,
  },
];
let routeId = computed(() => String(route.params.id));

let loading = ref(false);
let list = ref<ISchool[]>([]);
let soato = ref<ISoato>();
function getSoato() {
  SoatoService.getById(routeId.value).then((res) => {
    soato.value = res.data;
  });
}
onMounted(() => {
  getList();
  getSoato();
});
let page = ref(1);
let limit = ref(20);
let total = ref(0);
let params = computed(() => {
  return {
    page: page.value - 1,
    size: limit.value,
    soatoId: routeId.value,
    organizationType: "MAKTAB",
  };
});

async function getList() {
  try {
    loading.value = true;
    const res = await OrganizationService.getOrganizations(params.value);
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

let currentItem = ref<ISchool>();

const deleteConfirmationModal = ref(false);

async function deleteItem() {
  try {
    deleteConfirmationModal.value = false;
    loading.value = true;
    await SchoolService.delete(currentItem.value?.id);
    getList();
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <h2 class="mt-10 text-lg font-medium intro-y">
    <Button style="font-size: 14px;" variant="secondary" class="mr-5" @click="$router.back()"
      ><Lucide icon="ArrowLeft" /> Orqaga
    </Button>

    {{ soato?.nameUz }}
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
      <!-- BEGIN: Data List -->
      <div class="col-span-12 overflow-auto intro-y 2xl:overflow-visible">
        <Table class="border-spacing-y-[10px] border-separate -mt-2">
          <Table.Thead>
            <Table.Tr>
              <Table.Th class="border-b-0 whitespace-nowrap"> # </Table.Th>
              <Table.Th class="border-b-0 whitespace-nowrap"> Maktab nomi </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
                Hudud
              </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
                Manzil
              </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap"> INN </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
                Telefon raqami
              </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
                Maktab turi
              </Table.Th>
             
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
              Maktab sig'imi
              </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
                Talabalari soni
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
                class="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.soatoResponse.nameUz }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md text-center capitalize bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.address }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.inn }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.phone }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                <n-tag type="info">
                  {{ item.govermental == 0 ? "Davlat maktabi" : "Xususiy maktab" }}
                </n-tag>
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                <n-tag type="info"> {{ item.capacity || '-' }} </n-tag>
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                <n-tag type="primary"> {{ item.studentCount }} </n-tag>
              </Table.Td>
            
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400"
              >
                <div class="flex items-center justify-center">
                  <RouterLink
                    :to="`/school/${item.id}`"
                    class="flex items-center mr-3"
                    href="#"
                  >
                    <Lucide icon="Eye" class="w-4 h-4 mr-1" />
                  </RouterLink>
                  <RouterLink
                    :to="`/profile/${item.id}/update`"
                    class="flex items-center text-info mr-3"
                    href="#"
                  >
                    <Lucide icon="Edit" class="w-4 h-4 mr-1" />
                  </RouterLink>
                  <a
                    class="flex items-center text-danger"
                    href="#"
                    @click="(currentItem = item), (deleteConfirmationModal = true)"
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
  <!-- BEGIN: Delete Confirmation Modal -->
  <Dialog :open="deleteConfirmationModal" @close="deleteConfirmationModal = false">
    <Dialog.Panel>
      <div class="p-5 text-center">
        <Lucide icon="XCircle" class="w-16 h-16 mx-auto mt-3 text-danger" />
        <div class="mt-5 text-3xl">Tasdqilang</div>
        <div class="mt-2 text-slate-500">Rostan ham o'chirmoqchimisiz?</div>
      </div>
      <div class="px-5 pb-8 text-center">
        <Button
          variant="outline-secondary"
          type="button"
          @click="deleteConfirmationModal = false"
          class="mr-4"
        >
          Bekor qilish
        </Button>
        <Button variant="danger" type="button" @click="deleteItem"> O'chirish </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
  <!-- END: Delete Confirmation Modal -->
</template>
