<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Lucide from "../../base-components/Lucide";
import Breadcrumb from "../../base-components/Breadcrumb";
import { FormInput } from "../../base-components/Form";
import { Menu, Popover } from "../../base-components/Headless";
import _ from "lodash";
import { TransitionRoot } from "@headlessui/vue";
import { useRouter } from "vue-router"
import { useUserSession } from "../../stores/userSession";
import { useRoute } from "vue-router";
import { useSideMenuStore } from "../../stores/side-menu";
import { ImageService } from "../../services/image";
import { toRefs } from "@vueuse/core";
const { breadcrumb } = toRefs(useSideMenuStore())
const route = useRoute()
const { logoutUser } = useUserSession()
const { user } = toRefs(useUserSession())
const router = useRouter()
const searchDropdown = ref(false);
const showSearchDropdown = () => {
  searchDropdown.value = true;
};
const hideSearchDropdown = () => {
  searchDropdown.value = false;
};

let imgBase64 = ref("");
onMounted(async () => {
  if (user.value?.avatar) {
    let res = await ImageService.getById(user.value?.avatar);
    imgBase64.value = res.data.imgBase64;
  }
});


async function logout() {
  logoutUser()
  await router.push("/auth/login");
}

</script>

<template>
  <!-- BEGIN: Top Bar -->
  <div class="h-[67px] z-[51] flex items-center relative border-b border-slate-200">
    <!-- BEGIN: Breadcrumb -->
    <n-breadcrumb class="hidden mr-auto -intro-x sm:flex">
      <n-breadcrumb-item @click="router.push('/')"> Bosh sahifa</n-breadcrumb-item>
      <n-breadcrumb-item v-for="item in breadcrumb" @click="router.push(item.url)"> {{ item.title }} </n-breadcrumb-item>
    </n-breadcrumb>
    <!-- END: Breadcrumb -->
    <Menu>
      <Menu.Button class="block p-3 overflow-hidden rounded-full shadow-lg image-fit zoom-in intro-x">
       <div class="flex items-center justify-center">
        <img style="width: 40px; border-radius: 50%;" v-if="imgBase64" :src="imgBase64" alt="">
        <Lucide v-else class="text-primary" icon="User"/> 
        
        {{ user?.lastname }} {{ user?.firstname }} {{ user?.username}}
       </div>
      </Menu.Button>
      <Menu.Items class="w-56 mt-px text-white bg-primary">
        <Menu.Header class="font-normal">
          <div class="font-medium">{{ user?.username }}</div>
          <div class="text-xs text-white/70 mt-0.5 dark:text-slate-500">
            {{ user?.organizationResponse.organizationType }}
          </div>
        </Menu.Header>
        <Menu.Divider class="bg-white/[0.08]" />
        <Menu.Item @click="$router.push('/profile')" class="hover:bg-white/5">
          <Lucide icon="User" class="w-4 h-4 mr-2" /> Tashkilot ma'lumotlari
        </Menu.Item>
        <Menu.Divider class="bg-white/[0.08]" />
        <Menu.Item class="hover:bg-white/5" @click="logout">
          <Lucide icon="ToggleRight" class="w-4 h-4 mr-2" /> Chiqish
        </Menu.Item>
      </Menu.Items>
    </Menu>
  </div>
  <!-- END: Top Bar -->
</template>
