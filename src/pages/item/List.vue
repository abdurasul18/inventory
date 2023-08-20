<script setup lang="ts">
import _ from "lodash";
import { ref, computed, watch, onMounted, toRefs } from "vue";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import Pagination from "../../base-components/Pagination";
import { FormCheck, FormInput, FormSelect } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import { Dialog, Menu } from "../../base-components/Headless";
import Table from "../../base-components/Table";
import { ItemService, IItem } from "../../services/item";
import { SchoolService, ISchool } from "../../services/school";
import { OrganizationService } from "../../services/organization";
import { useRoute } from "vue-router";
import Loading from "../../base-components/Loading/Loading.vue";
import AppNotFound from "../../base-components/AppNotFound.vue";
import { paginate } from "../../globals";
import { useUserSession } from "../../stores/userSession";
import { useSideMenuStore } from "../../stores/side-menu";
import { ImageService } from "../../services/image";
let { breadcrumb } = toRefs(useSideMenuStore());
const route = useRoute();

breadcrumb.value = [
  {
    title: "Jihozlar",
    url: route.fullPath,
  },
];
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
let list = ref<IItem[]>([]);
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
    const res = await ItemService.getList(params.value);
    list.value = res.data.content;
    total.value = res.data.totalElements;
    list.value.forEach(async (item) => {
      let imgRes = await Promise.all(
        item.images.map(async (img) => {
          let res = await ImageService.getById(img);
          return res.data;
        })
      );
      item.imageBase64 = imgRes.map((el) => {
        return {
          name: item.nameUz || "",
          url: el.imgBase64,
        };
      });
    });
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

let currentItem = ref<IItem>();

const deleteConfirmationModal = ref(false);

async function deleteItem() {
  try {
    deleteConfirmationModal.value = false;
    loading.value = true;
    await ItemService.delete(currentItem.value?.id);
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
        <Button variant="secondary" class="mr-5" @click="$router.back()"
          ><Lucide icon="ArrowLeft" /> Orqaga
        </Button>
        <Button
          @click="$router.push(`/school/${school?.id}/item-create`)"
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
              <Table.Th class="border-b-0 whitespace-nowrap"> Rasmlar </Table.Th>
              <Table.Th class="border-b-0 whitespace-nowrap"> Jihoz nomi </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap"> Turi </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
                Inventarizatsiya raqami
              </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
                Seriya raqami
              </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap"> Soni </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
                Loyiha turi
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
                class="first:rounded-l-md last:rounded-r-md w-10 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                <div v-if="item.imageBase64" class="flex">
                  <div
                    v-for="(img, index) in item.imageBase64"
                    :class="{ '-ml-5': index > 0 }"
                  >
                    <div class="w-10 h-10 image-fit zoom-in">
                      <n-image
                        class="cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                        :src="img.url"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.nameUz }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.itemTypeResponse.nameUz }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.invertNumber }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.serialNumber }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                <n-tag variant="info"> {{ item.count }} </n-tag>
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.projectResponse?.name || "" }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400"
              >
                <div class="flex items-center justify-center">
                  <RouterLink
                    :to="`/item/${item.id}/update`"
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
