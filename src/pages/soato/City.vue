<script setup lang="ts">
import { ref, onMounted, toRefs } from "vue";
import { useUserSession } from "../../stores/userSession";
import Lucide from "../../base-components/Lucide";
import Loading from "../../base-components/Loading/Loading.vue";
import Button from "../../base-components/Button";
import { useSideMenuStore } from "../../stores/side-menu";
import { OrganizationService } from "../../services/organization";
import { ISchool } from "../../services/school";
let { breadcrumb } = toRefs(useSideMenuStore());
breadcrumb.value = [
  {
    title: "Viloyatlar",
    url: "/soato",
  },
];
let { user } = toRefs(useUserSession());

let list = ref<ISchool[]>([]);
let loading = ref(false);

async function getList() {
  loading.value = true;
  try {
    let res = await OrganizationService.getOrganizations({
      page: 0,
      size: 100,
      organizationType: "VILOYAT",
      soatoId: "17",
    });
    list.value = res.data.content?.sort((a, b) => +a.soatoId - +b.soatoId);
  } finally {
    loading.value = false;
  }
}
onMounted(getList);
</script>
<template>
  <Loading :active="loading" icon="bars" style="min-height: 500px">
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y" v-for="item in list">
        <div
          @click="$router.push(`/soato/${item.soatoId}/region`)"
          :class="[
            'relative zoom-in',
            'before:content-[\'\'] before:w-[90%] before:shadow-[0px_3px_5px_#0000000b] before:bg-white/60 before:h-full before:mt-2.5 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70',
          ]"
        >
          <div class="p-5 box">
            <div class="flex">
              <Lucide
                style="flex-shrink: 0"
                icon="Building2"
                class="w-[32px] h-[32px] text-primary"
              />
              <div class="ml-5 text-xl font-medium leading-8" style="line-height: 1.2">
                {{ item.name }}
              </div>
            </div>
            <div class="mt-1 text-base text-slate-500">&nbsp;</div>
            <div class="mt-4 flex justify-end">
              <n-tooltip trigger="hover">
                <template #trigger>
                  <Button
                    class="p-1"
                    variant="primary"
                    @click.stop="$router.push(`/soato/${item.soatoId}/school`)"
                  >
                    <Lucide icon="Building" class="w-5 h-5" />
                  </Button>
                </template>
                Maktablar
              </n-tooltip>
              <n-tooltip trigger="hover">
                <template #trigger>
                  <Button
                    class="p-1 ml-2"
                    variant="linkedin"
                    @click.stop="$router.push(`/soato/${item.id}/user`)"
                  >
                    <Lucide icon="Users" class="w-5 h-5" />
                  </Button>
                </template>
                Foydalanuvchilar
              </n-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Loading>
</template>
