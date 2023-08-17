<script setup lang="ts">
import _ from "lodash";
import { ref, toRefs, onMounted, computed, watch } from "vue";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { Tab } from "../../base-components/Headless";
import Loading from "../../base-components/Loading/Loading.vue";
import { useUserSession } from "../../stores/userSession";
import { useRoute } from "vue-router";
import { ISchool, SchoolService } from "../../services/school";
import { OrganizationService } from "../../services/organization";
import { useSideMenuStore } from "../../stores/side-menu";

let { breadcrumb } = toRefs(useSideMenuStore());
breadcrumb.value = [
  {
    title: "Tashkilot ma'lumotlari",
    url: "/profile",
  },
];
const route = useRoute();

let { user } = toRefs(useUserSession());
let routeId = computed(() => {
  return String(route.params.id || "") || user.value?.organizationId;
});
watch(()=>routeId.value, (val)=>{
  getSchool()
})
let schoolData = ref<ISchool>();
let loading = ref(false);
async function getSchool() {
  try {
    loading.value = true;
    let res = await OrganizationService.getById(routeId.value);
    schoolData.value = res.data;
  } finally {
    loading.value = false;
  }
}
onMounted(() => {
  getSchool();
});
</script>

<template>
  <Loading>
    <div class="flex items-center mt-8 intro-y">
        <Button variant="secondary"  class="mr-5" @click="$router.back()"><Lucide icon="ArrowLeft"/>  Orqaga </Button>
      <h2 class="mr-auto text-lg font-medium">Tashkilot to'g'risida umumiy ma'lumot</h2>
      <Button
        class="mr-2"
        @click="$router.push(`/school/${schoolData?.id}/computer-room`)"
        variant="soft-success"
      >
        <Lucide icon="List" class="w-4 h-4 mr-2" /> Kompyuter sinflari
      </Button>
      <Button
        class="mr-2"
        @click="$router.push(`/school/${schoolData?.id}/item`)"
        variant="outline-primary"
      >
        <Lucide icon="List" class="w-4 h-4 mr-2" /> Jihozlar ro'yhati
      </Button>
      <Button
        class="mr-2"
        @click="$router.push(`/school/${schoolData?.id}/user`)"
        variant="soft-dark"
      >
        <Lucide icon="Users" class="w-4 h-4 mr-2" /> Foydalanuvchilar
      </Button>
      <Button
        @click="$router.push(`/profile/${schoolData?.id}/update`)"
        variant="primary"
      >
        <Lucide icon="Edit" class="w-4 h-4 mr-2" /> Tahrirlash
      </Button>
    </div>
    <Tab.Group>
      <!-- BEGIN: Profile Info -->
      <div class="px-5 pt-5 mt-5 intro-y box">
        <div
          class="flex flex-col pb-5 -mx-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <div class="flex items-center justify-center flex-1 px-5 lg:justify-start">
            <div class="">
              <div class=" text-lg  font-medium ">
                {{ schoolData?.soatoResponse?.nameUz }} {{ schoolData?.name }}
              </div>
              <div class="text-slate-500">{{ schoolData?.shortName }}</div>
              <div class="text-slate">{{ schoolData?.schoolTypeResponse?.name }}</div>
            </div>
          </div>
          <div
            class="flex-1 px-5 pt-5 mt-6 border-t border-l border-r lg:mt-0 border-slate-200/60 dark:border-darkmode-400 lg:border-t-0 lg:pt-0"
          >
            <div class="font-medium text-center lg:text-left lg:mt-3">
              Tashkilot bilan aloqa
            </div>
            <div class="flex flex-col items-center justify-center mt-4 lg:items-start">
              <div class="flex items-center truncate sm:whitespace-normal">
                <Lucide icon="Mail" class="w-4 h-4 mr-2" />
                <a :href="`mailto:${schoolData?.email}`"> {{ schoolData?.email }} </a>
              </div>
              <div class="flex items-center mt-3 truncate sm:whitespace-normal">
                <Lucide icon="PhoneCall" class="w-4 h-4 mr-2" />
                <a :href="`tel:${schoolData?.phone}`"> {{ schoolData?.phone }} </a>
              </div>
              <div class="flex items-center mt-3 truncate sm:whitespace-normal">
                <Lucide icon="Globe2" class="w-4 h-4 mr-2" />
                <a :href="schoolData?.email"> {{ schoolData?.email }} </a>
              </div>
              <div class="flex items-center mt-3 truncate sm:whitespace-normal">
                <Lucide icon="Locate" class="w-4 h-4 mr-2" />
                {{ schoolData?.address }}
              </div>
            </div>
          </div>
          <div
            class="flex items-center justify-center flex-1 px-5 pt-5 mt-6 border-t lg:mt-0 lg:border-0 border-slate-200/60 dark:border-darkmode-400 lg:pt-0"
          >
            <div class="w-20 py-3 text-center rounded-md">
              <div class="text-xl font-medium text-primary">
                {{ schoolData?.studentCount }}
              </div>
              <div class="text-slate-500">O'quvchilar soni</div>
            </div>
            <div class="w-20 py-3 text-center rounded-md">
              <div class="text-xl font-medium text-primary">
                {{ schoolData?.capacity || 0 }}
              </div>
              <div class="text-slate-500">Maktab sig'imi</div>
            </div>
            <div class="w-20 py-3 text-center rounded-md">
              <div class="text-xl font-medium text-danger">
                {{ schoolData?.needPc || 0 }}
              </div>
              <div class="text-slate-500">Ehtiyoj</div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 mb-4 gap-4">
        <div class="px-5 pt-5 mt-3 pb-4 intro-y box">
          <div>
            <n-list hoverable class="">
              <n-list-item>
                <strong class="mx-auto">{{ schoolData?.name || "-" }}</strong>
              </n-list-item>
              <n-list-item>
                <span> Maktab raqami </span>
                <span> {{ schoolData?.number || "-" }} </span>
              </n-list-item>
              <n-list-item>
                <span> Maktab turi </span>
                <span> {{ schoolData?.schoolTypeResponse?.name || "-" }} </span>
              </n-list-item>
              <n-list-item>
                <span> Maktab qisqa nomi</span>
                <span> {{ schoolData?.shortName || "-" }} </span>
              </n-list-item>
              <n-list-item>
                <span> Davlat maktabi/ Xususiy maktab </span>
                <span>
                  {{ schoolData?.govermental == 0 ? "Davlat maktabi" : "Xususiy maktab" }}
                </span>
              </n-list-item>
              <n-list-item>
                <span> INN </span>
                <span> {{ schoolData?.inn }} </span>
              </n-list-item>
              <n-list-item>
                <span> Manzil </span>
                <span>
                  {{ schoolData?.soatoResponse?.nameUz || "-" }} {{ schoolData?.address }}
                </span>
              </n-list-item>
            </n-list>
          </div>
        </div>

        <div class="px-5 pt-5 mt-3 intro-y box">
          <div class="">
            <n-list hoverable>
              <n-list-item>
                <strong class="mx-auto"> Rahbar </strong>
              </n-list-item>
              <n-list-item>
                <span> FIO </span>
                <span>
                  {{ schoolData?.headLastname }} {{ schoolData?.headName }}
                  {{ schoolData?.headSecondName }}
                </span>
              </n-list-item>
              <n-list-item>
                <span> Lavozimi </span>
                <span> {{ schoolData?.headPositionResponse }} </span>
              </n-list-item>
              <n-list-item>
                <strong class="mx-auto"> AKT mas'ul shaxs </strong>
              </n-list-item>
              <n-list-item>
                <span> FIO </span>
                <span>
                  {{ schoolData?.aktLastname }} {{ schoolData?.aktName }}
                  {{ schoolData?.aktSecondName }}
                </span>
              </n-list-item>
              <n-list-item>
                <span> Lavozimi </span>
                <span> {{ schoolData?.aktPositionResponse }} </span>
              </n-list-item>
              <n-list-item>
                <span> Telefon raqami </span>
                <span> {{ schoolData?.aktPhone }} </span>
              </n-list-item>
            </n-list>
          </div>
        </div>
      </div>
    </Tab.Group>
  </Loading>
</template>
<style>
.n-list-item__main {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.n-list-item__main span {
  max-width: 70%;
  margin-left: 5px;
  text-align: right;
}
</style>
