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
import { UserService, IUserData } from "../../services/user";
import { SoatoService, ISoato } from "../../services/soato";
import Loading from "../../base-components/Loading/Loading.vue";
import AppNotFound from "../../base-components/AppNotFound.vue";
import { paginate } from "../../globals";
import { useSideMenuStore } from "../../stores/side-menu";
import { useRoute } from "vue-router";
import AddUpdateUser from "../../components/pages/AddUpdateUser.vue";
import { useToast } from "vue-toast-notification";
import { OrganizationService } from "../../services/organization";
import { ISchool } from "../../services/school";
const toast = useToast();

let { breadcrumb } = toRefs(useSideMenuStore());
const route = useRoute();

breadcrumb.value = [
  {
    title: "Foydalanuvchilar",
    url: route.fullPath,
  },
];
let routeId = computed(() => String(route.params.id || ""));

let loading = ref(false);
let list = ref<IUserData[]>([]);
let organization = ref<ISchool>();
async function getOrgById() {
  if (routeId.value) {
    let res = await OrganizationService.getById(routeId.value);
    organization.value = res.data;
  }
}
onMounted(async () => {
  await getOrgById();
});
let page = ref(1);
let limit = ref(20);
let total = ref(0);
let params = computed(() => {
  return {
    page: page.value - 1,
    size: limit.value,
    soatoId: organization.value?.soatoId || "",
  };
});

async function getList() {
  try {
    loading.value = true;
    if (!organization.value?.soatoId) return;
    const res = await UserService.getList({
      ...params.value,
      organizationType: organization.value?.soatoResponse.type || "RESPUBLIKA",
    });
    list.value = res.data.content;
    total.value = res.data.totalElements;
  } catch (error) {
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

let currentItem = ref<IUserData>();

let addShow = ref(false);
let mode = ref<"create" | "update">("create");
async function addUser(e: any) {
  addShow.value = false;
  loading.value = true;
  try {
    if (mode.value == "create") {
      await UserService.register({
        ...e,
        organizationId: routeId.value,
      });
    } else {
      await UserService.update(currentItem.value?.id, {
        ...e,
        organizationId: routeId.value,
      });
    }
    toast.success("Foydalanuvchi muvaffaqiyatli qo'shildi");
    getList();
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <h2 class="mt-10 text-lg font-medium intro-y">
    <Button variant="secondary" class="mr-5 text-sm" @click="$router.back()"
      ><Lucide icon="ArrowLeft" /> Orqaga
    </Button>
    {{ organization?.name }}
  </h2>

  <Loading :active="loading" style="min-height: 500px">
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="flex flex-wrap items-center justify-end col-span-12 mt-2 intro-y xl:flex-nowrap"
      >
        <Button
          @click="(mode = 'create'), (addShow = true)"
          variant="primary"
          class="ml-auto"
        >
          Qo'shish
        </Button>
      </div>
      <!-- BEGIN: Data List -->
      <div class="col-span-12 overflow-auto intro-y 2xl:overflow-visible">
        <Table class="border-spacing-y-[10px] border-separate -mt-2">
          <Table.Thead>
            <Table.Tr>
              <Table.Th class="border-b-0 whitespace-nowrap"> # </Table.Th>
              <Table.Th class="border-b-0 whitespace-nowrap"> username </Table.Th>
              <Table.Th class="border-b-0 whitespace-nowrap"> FIO </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
                Hudud
              </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
                Tashkilot
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
                {{ item.username }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.fio }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.organizationResponse.soatoResponse.nameUz }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] text-center"
              >
                <n-tag type="info">
                  {{ item.organizationResponse.name }}
                </n-tag>
              </Table.Td>

              <Table.Td
                class="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400"
              >
                <div class="flex items-center justify-center">
                  <button
                    @click="(currentItem = item), (mode = 'update'), (addShow = true)"
                    class="flex items-center mr-3"
                  >
                    <Lucide icon="Edit" class="w-4 h-4 mr-1" />
                  </button>
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

    <Dialog staticBackdrop :open="addShow" @close="addShow = false">
      <Dialog.Panel class="px-5 py-10">
        <Loading :active="loading">
          <AddUpdateUser
            :mode="mode"
            :item="currentItem"
            @close="addShow = false"
            @success="addUser"
          />
        </Loading>
      </Dialog.Panel>
    </Dialog>
  </Loading>
</template>
