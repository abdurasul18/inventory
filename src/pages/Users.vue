<script setup lang="ts">
import _ from "lodash";
import { ref, computed, toRefs, onMounted, watch } from "vue";
import fakerData from "../utils/faker";
import Button from "../base-components/Button";
import Pagination from "../base-components/Pagination";
import { FormCheck, FormInput, FormSelect } from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import Tippy from "../base-components/Tippy";
import { Dialog, Menu } from "../base-components/Headless";
import Table from "../base-components/Table";
import { UserService, IUserData } from "../services/user";
import { SoatoService, ISoato } from "../services/soato";
import { RouterLink, useRoute } from "vue-router";
import Loading from "../base-components/Loading/Loading.vue";
import AppNotFound from "../base-components/AppNotFound.vue";
import { useToast } from "vue-toast-notification";
import AddUpdatePassword from "../components/pages/AddUpdatePassword.vue";
import { paginate } from "../globals";
import AddUpdateUser from "../components/pages/AddUpdateUser.vue";
import { useUserSession } from "../stores/userSession";
const { user } = toRefs(useUserSession());
const toast = useToast();
const route = useRoute();
let routeId = computed(
  () => String(route.params.id || "") 
);

let loading = ref(false);
let list = ref<IUserData[]>([]);
let soato = ref<ISoato>();
onMounted(async () => {
  getList();
});
let page = ref(1);
let limit = ref(20);
let total = ref(0);
let params = computed(() => {
  return {
    page: page.value - 1,
    size: limit.value,
    soatoId: routeId.value || "17",
    organizationType: "RESPUBLIKA",
  };
});

async function getList() {
  try {
    loading.value = true;
    const res = await UserService.getList(params.value);

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

let currentItem = ref<IUserData>();
let updateShow = ref(false);
async function updatePass(e: any) {
  updateShow.value = false;
  loading.value = true;
  try {
    await UserService.updatePassword({
      newPassword: e.password,
      username: currentItem.value?.username,
    });
    toast.success("Parol o'zgartirildi");
  } finally {
    loading.value = false;
  }
}

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
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <h2 class="mt-10 text-lg font-medium intro-y">{{ soato?.nameUz }}</h2>

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
              <Table.Th class="text-center border-b-0 whitespace-nowrap"> FIO </Table.Th>
              <Table.Th class="text-center border-b-0 whitespace-nowrap">
                Tashkilot
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
                {{ item.username }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.fio }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md text-center capitalize bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {{ item.organizationResponse?.name }}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] text-center"
              >
                <n-tag type="info">
                  {{ item.organizationResponse?.soatoResponse?.nameUz }}
                </n-tag>
              </Table.Td>

              <Table.Td
                class="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400"
              >
                <div class="flex items-center justify-center">
                  <span
                    style="cursor: pointer"
                    @click="(mode = 'update'), (currentItem = item), (updateShow = true)"
                    class="flex items-center text-success mr-3"
                  >
                    <Lucide icon="Lock" class="w-4 h-4 mr-1" />
                  </span>
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
  </Loading>
  <Dialog staticBackdrop :open="updateShow" @close="updateShow = false">
    <Dialog.Panel class="px-5 py-10">
      <Loading :active="loading">
        <AddUpdatePassword @close="updateShow = false" @success="updatePass" />
      </Loading>
    </Dialog.Panel>
  </Dialog>

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
</template>
