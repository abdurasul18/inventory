<script setup lang="ts">
import _ from "lodash";
import { ref, toRefs, computed, onMounted } from "vue";
import Button from "../../base-components/Button";
import { FormInput, FormLabel } from "../../base-components/Form";
import SelectProject from "../../components/Form/SelectProject.vue";
import Lucide from "../../base-components/Lucide";
import { useVuelidate } from "@vuelidate/core";
import { useToast } from "vue-toast-notification";
import { UserService } from "../../services/user";
import { useUserSession } from "../../stores/userSession";
import { useRoute, useRouter } from "vue-router";
import SelectItemType from "../../components/Form/SelectItemType.vue";
import { ItemService } from "../../services/item";
import Loading from "../../base-components/Loading/Loading.vue";
import { useSideMenuStore } from "../../stores/side-menu";
import SelectPCRoom from "../../components/Form/SelectPCRoom.vue";
import DropFile from "../../base-components/Form/DropFile.vue";
import { ImageService } from "../../services/image";
import { fileToBase64 } from "../../utils/fileToBase64";

let { breadcrumb } = toRefs(useSideMenuStore());
const route = useRoute();

breadcrumb.value = [
  {
    title: "Jihoz Qo'shish",
    url: route.fullPath,
  },
];
const toast = useToast();
const router = useRouter();
let { user } = toRefs(useUserSession());
let organizationId = computed(() => {
  return String(route.params?.id || "") || user.value?.organizationId;
});

let form = ref({
  count: 0,
  images: [],
  invertNumber: "",
  itemTypeId: "",
  model: "",
  name: "",
  pcRoomId: "",
  serialNumber: "",
  projectId: "",
  state: 1,
});

const rules = {
  count: {},
  images: {},
  invertNumber: {},
  itemTypeId: {},
  model: {},
  name: {},
  pcRoomId: {},
  projectId: {},
  serialNumber: {},
  state: {},
};

const v$ = useVuelidate(rules, form.value);
let loading = ref(false);

let addLoading = ref(false);
async function validate() {
  let result = await v$.value.$validate();
  return result;
}
let images = ref<File[]>([]);
async function onSubmit() {
  if (await validate()) {
    try {
      addLoading.value = true;
      let payload = {
        ...form.value,
        organizationId: organizationId.value,
      };
      if (images.value) {
        let imgBase64 = await Promise.all(images.value.map((img) => fileToBase64(img)));
        let resImg = await Promise.all(
          imgBase64.map((img) => ImageService.create(img as any))
        );
        payload.images = resImg.map((img) => img.data.id) as any;
      }
      await ItemService.create(payload);
      toast.success("Ma'lumotlar muvaffaqiyatli saqlandi");
      await router.back();
    } finally {
      addLoading.value = false;
    }
  } else {
  }
}
</script>

<template>
  <div class="flex items-center mt-8 intro-y">
    <h2 class="mr-auto text-lg font-medium">Jihoz qo'shish</h2>
  </div>
  <!-- END: Profile Menu -->
  <Loading :active="loading">
    <!-- BEGIN: Personal Information -->
    <div class="mt-5 intro-y box">
      <div class="p-5">
        <div class="grid grid-cols-2 gap-x-4">
          <div class="mb-3">
            <FormLabel htmlFor="name">Nomi</FormLabel>
            <FormInput id="name" type="text" v-model:modelValue="form.name" />
            <p class="mt-2 text-danger" v-if="v$.name.$error">
              Bu maydon bo'sh bo'lishi mumkin emas
            </p>
          </div>
          <div class="mb-3">
            <FormLabel htmlFor="invertNumber">Inventarizatsiya raqami</FormLabel>
            <FormInput
              id="invertNumber"
              type="text"
              v-model:modelValue="form.invertNumber"
            />
            <p class="mt-2 text-danger" v-if="v$.invertNumber.$error">
              Bu maydon bo'sh bo'lishi mumkin emas
            </p>
          </div>
          <div class="mb-3">
            <FormLabel htmlFor="serialNumber">Seriya raqami</FormLabel>
            <FormInput
              id="serialNumber"
              type="text"
              v-model:modelValue="form.serialNumber"
            />
            <p class="mt-2 text-danger" v-if="v$.serialNumber.$error">
              Bu maydon bo'sh bo'lishi mumkin emas
            </p>
          </div>
          <div class="mb-3">
            <FormLabel htmlFor="projectId">Loyiha turi</FormLabel>
            <SelectProject id="projectId" v-model:value="form.projectId" />
            <p class="mt-2 text-danger" v-if="v$.projectId.$error">
              Bu maydon bo'sh bo'lishi mumkin emas
            </p>
          </div>

          <div class="mb-3">
            <FormLabel htmlFor="itemTypeId">Jihoz turi</FormLabel>
            <SelectItemType id="itemTypeId" v-model:value="form.itemTypeId" />
            <p class="mt-2 text-danger" v-if="v$.itemTypeId.$error">
              Bu maydon bo'sh bo'lishi mumkin emas
            </p>
          </div>
          <div class="mb-3">
            <FormLabel htmlFor="pcRoomId">Kompyuter xonasi</FormLabel>
            <SelectPCRoom
              :organization-id="organizationId"
              id="pcRoomId"
              v-model:value="form.pcRoomId"
            />
            <p class="mt-2 text-danger" v-if="v$.pcRoomId.$error">
              Bu maydon bo'sh bo'lishi mumkin emas
            </p>
          </div>
          <div class="mb-3">
            <FormLabel htmlFor="count">Soni</FormLabel>
            <FormInput id="count" type="text" v-model:modelValue="form.count" />
            <p class="mt-2 text-danger" v-if="v$.count.$error">
              Bu maydon bo'sh bo'lishi mumkin emas
            </p>
          </div>
          <div class="mb-3">
            <FormLabel htmlFor="model">Model</FormLabel>
            <FormInput id="model" type="text" v-model:modelValue="form.model" />
            <p class="mt-2 text-danger" v-if="v$.model.$error">
              Bu maydon bo'sh bo'lishi mumkin emas
            </p>
          </div>
          <div class="mt-3">
            <div>
              <FormLabel htmlFor="internetSpeed">Holati</FormLabel>
            </div>
            <n-radio-group
              v-model:value="form.state"
              name="radiobuttongroup2"
              size="medium"
            >
              <n-radio-button :value="0"> Yaroqsiz </n-radio-button>
              <n-radio-button :value="1"> Yaroqli </n-radio-button>
            </n-radio-group>
          </div>
        </div>
        <div class="mt-4">
          <DropFile style="max-width: 500px" v-model:value="images" input-id="idInput" />
        </div>
      </div>
    </div>
  </Loading>

  <div class="flex justify-end mt-4">
    <Button
      @click="$router.back()"
      variant="outline-primary"
      class="ml-auto"
      style="min-width: 200px"
    >
      <Lucide icon="X" class="w-4 h-4 mr-1" /> Bekor qilish
    </Button>
    <Button
      :loading="addLoading"
      variant="primary"
      @click="onSubmit"
      style="min-width: 200px"
      class="ml-5"
    >
      <Lucide icon="Save" class="w-4 h-4 mr-1" /> Saqlash
    </Button>
  </div>
  <!-- END: Personal Information -->
</template>
