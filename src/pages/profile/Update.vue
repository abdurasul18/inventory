<script setup lang="ts">
import _ from "lodash";
import { ref, toRefs, computed, onMounted } from "vue";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import {
  FormInput,
  FormLabel,
  FormSelect,
  FormTextarea,
} from "../../base-components/Form";
import CMapView from "../../components/Map/CMapView.vue";
import CMap from "../../components/Map/CMap.vue";
import SelectPosition from "../../components/Form/SelectPosition.vue";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import TomSelect from "../../base-components/TomSelect";
import { Menu } from "../../base-components/Headless";
import {
  required,
  minLength,
  maxLength,
  email,
  url,
  integer,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useToast } from "vue-toast-notification";
import { UserService } from "../../services/user";
import { useUserSession } from "../../stores/userSession";
import { useRouter } from "vue-router";
import LeafletMap from "../../components/Map/LeafletMap.vue";
import { useRoute } from "vue-router";
import { OrganizationService } from "../../services/organization";
import { useSideMenuStore } from "../../stores/side-menu";
import { ISchool } from "../../services/school";

let { breadcrumb } = toRefs(useSideMenuStore());
const route = useRoute();

breadcrumb.value = [
  {
    title: "Tashkilot ma'lumotlari",
    url: "/profile",
  },
  {
    title: "Tashkilot ma'lumotlarini tahrirlash",
    url: route.fullPath,
  },
];
const toast = useToast();
const router = useRouter();
let { user } = toRefs(useUserSession());
let userId = computed(() => {
  return String(route.params.id || "") || user.value?.organizationId;
});

let form = ref({
  address: "",
  aktLastname: "",
  aktName: "",
  aktPhone: "",
  aktPositionId: "",
  aktSecondName: "",
  capacity: 0,
  email: "",
  govermental: "",
  hallWifiCount: "",
  haveInternet: true,
  head: "",
  headLastname: "",
  headName: "",
  headPositionId: "",
  headSecondName: "",
  inn: "",
  internetSpeed: "",
  latitude: "",
  longitude: "",
  maktabErpId: "",
  name: "",
  needPc: 0,
  number: "",
  phone: "",
  shortName: "",
  studentCount: "",
  teacherRoomWifiCount: "",
  website: "",
});

const rules = {
  address: {
    // required,
  },
  aktLastname: {
    // required,
  },
  aktName: {
    // required,
  },
  aktPhone: {
    // required,
  },
  aktPositionId: {
    // required,
  },
  aktSecondName: {
    // required,
  },
  capacity: {
    // required,
  },
  email: {},
  hallWifiCount: {},
  head: {},
  headLastname: {
    // required,
  },
  headName: {
    // required,
  },
  headPositionId: {
    // required,
  },
  headSecondName: {
    // required,
  },
  inn: {
    // required,
  },
  internetSpeed: {},
  latitude: {},
  longitude: {},
  name: {
    // required,
  },
  needPc: {},
  number: {
    // required,
  },
  phone: {
    // required,
  },
  shortName: {},
  studentCount: {
    // required,
  },
  teacherRoomWifiCount: {},
  website: {},
};

const v$ = useVuelidate(rules, form.value);
let loading = ref(false);
let data = ref<ISchool>();
async function getData() {
  try {
    loading.value = true;
    let res = await OrganizationService.getById(userId.value);
    data.value = res.data;
    let dataAny = data.value as any;
    for (const key in dataAny) {
      if (key in form.value && dataAny[key] !== null && dataAny[key] !== undefined) {
        (form.value as any)[key] = dataAny[key];
        if (data.value?.latitude) {
          location.value = [data.value?.latitude, data.value?.longitude];
        }
        else {
          noLocation.value = true;
        }
      }
    }
  } finally {
  }
}

onMounted(() => {
  getData();
});

let updateLoading = ref(false);
async function validate() {
  let result = await v$.value.$validate();
  return result;
}
async function onSubmit() {
  if (await validate()) {
    let payload = {
      ...form.value,
      latitude: noLocation.value ? 0 : location.value[0],
      longitude: noLocation.value ? 0 : location.value[1],
      soatoId: data.value?.soatoId,
      organizationType: data.value?.organizationType,
    };
    await OrganizationService.update(userId.value, payload);
    toast.success("Ma'lumotlar muvaffaqiyatli saqlandi");
    await router.push("/profile");
  } else {
  }
}

let locationShow = ref(false);
let location = ref<Number[] | null[]>([]);
let noLocation = ref(false);
let show = ref(true);
</script>

<template>
  <div class="flex items-center mt-8 intro-y">
    <h2 class="mr-auto text-lg font-medium">Tashkilot ma'lumotlarini tahrirlash</h2>
  </div>
  <!-- END: Profile Menu -->
  <div>
    <!-- BEGIN: Personal Information -->
    <div class="mt-5 intro-y box">
      <div
        class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
      >
        <h2 class="mr-auto text-base font-medium">Tashkilot ma'lumotlari</h2>
      </div>

      <div class="p-5">
        <div class="grid grid-cols-12 gap-x-5">
          <div class="col-span-12 xl:col-span-6">
            <div>
              <FormLabel htmlFor="name">Nomi</FormLabel>
              <FormInput id="name" type="text" v-model:modelValue="form.name" />
              <p class="mt-2 text-danger" v-if="v$.name.$error">
                Bu maydon bo'sh bo'lishi mumkin emas
              </p>
            </div>
            <div class="mt-3">
              <FormLabel htmlFor="shortname">Qisqacha nomi</FormLabel>
              <FormInput id="shortname" type="text" v-model:modelValue="form.shortName" />
              <p class="mt-2 text-danger" v-if="v$.shortName.$error">
                Bu maydon bo'sh bo'lishi mumkin emas
              </p>
            </div>
            <div class="mt-3">
              <FormLabel htmlFor="number">Raqami</FormLabel>
              <FormInput id="number" type="text" v-model:modelValue="form.number" />
              <p class="mt-2 text-danger" v-if="v$.number.$error">
                Bu maydon bo'sh bo'lishi mumkin emas
              </p>
            </div>
            <div class="mt-3">
              <FormLabel htmlFor="inn">Inn</FormLabel>
              <FormInput id="inn" type="text" v-model:modelValue="form.inn" />
              <p class="mt-2 text-danger" v-if="v$.inn.$error">
                Bu maydon bo'sh bo'lishi mumkin emas
              </p>
            </div>
            <div class="mt-3">
              <FormLabel htmlFor="phone">Telefon raqami</FormLabel>
              <FormInput id="phone" type="text" v-model:modelValue="form.phone" />
              <p class="mt-2 text-danger" v-if="v$.phone.$error">
                Bu maydon bo'sh bo'lishi mumkin emas
              </p>
            </div>
            <div class="mt-3">
              <FormLabel htmlFor="email">Elektron pochta manzili</FormLabel>
              <FormInput id="email" type="text" v-model:modelValue="form.email" />
              <p class="mt-2 text-danger" v-if="v$.email.$error">
                Bu maydon bo'sh bo'lishi mumkin emas
              </p>
            </div>
            <div class="mt-3">
              <FormLabel htmlFor="website">Veb sayt</FormLabel>
              <FormInput id="website" type="text" v-model:modelValue="form.website" />
              <p class="mt-2 text-danger" v-if="v$.website.$error">
                Bu maydon bo'sh bo'lishi mumkin emas
              </p>
            </div>
            <div class="mt-3">
              <FormLabel htmlFor="address">Manzili</FormLabel>
              <FormTextarea id="address" type="text" v-model:modelValue="form.address" />
              <p class="mt-2 text-danger" v-if="v$.address.$error">
                Bu maydon bo'sh bo'lishi mumkin emas
              </p>
            </div>
          </div>
          <div class="col-span-12 xl:col-span-6">
            <div>
              <FormLabel htmlFor="capacity">Sig'imi</FormLabel>
              <FormInput id="capacity" type="text" v-model:modelValue="form.capacity" />
              <p class="mt-2 text-danger" v-if="v$.capacity.$error">
                Bu maydon bo'sh bo'lishi mumkin emas
              </p>
            </div>
            <div class="mt-3">
              <FormLabel htmlFor="studentCount">Talabar soni</FormLabel>
              <FormInput
                id="studentCount"
                type="text"
                v-model:modelValue="form.studentCount"
              />
              <p class="mt-2 text-danger" v-if="v$.studentCount.$error">
                Bu maydon bo'sh bo'lishi mumkin emas
              </p>
            </div>
            <div class="mt-3">
              <FormLabel htmlFor="needPc">Ehtiyoj</FormLabel>
              <FormInput id="needPc" type="text" v-model:modelValue="form.needPc" />
              <p class="mt-2 text-danger" v-if="v$.needPc.$error">
                Bu maydon bo'sh bo'lishi mumkin emas
              </p>
            </div>
            <div class="mt-3">
              <FormLabel htmlFor="hallWifiCount"> Wifi soni </FormLabel>
              <FormInput
                id="hallWifiCount"
                type="text"
                v-model:modelValue="form.hallWifiCount"
              />
              <p class="mt-2 text-danger" v-if="v$.hallWifiCount.$error">
                Bu maydon bo'sh bo'lishi mumkin emas
              </p>
            </div>
            <div class="mt-3">
              <FormLabel htmlFor="teacherRoomWifiCount">
                Oq'ituvchilar xonasidagi wifi soni
              </FormLabel>
              <FormInput
                id="teacherRoomWifiCount"
                type="text"
                v-model:modelValue="form.teacherRoomWifiCount"
              />
              <p class="mt-2 text-danger" v-if="v$.teacherRoomWifiCount.$error">
                Bu maydon bo'sh bo'lishi mumkin emas
              </p>
            </div>
            <div class="mt-3">
              <FormLabel htmlFor="internetSpeed"> Internet tezligi </FormLabel>
              <FormInput
                id="internetSpeed"
                type="text"
                v-model:modelValue="form.internetSpeed"
              />
              <p class="mt-2 text-danger" v-if="v$.internetSpeed.$error">
                Bu maydon bo'sh bo'lishi mumkin emas
              </p>
            </div>

            <div class="mt-3">
              <div>
                <FormLabel htmlFor="internetSpeed">Internet bormi</FormLabel>
              </div>
              <n-radio-group
                v-model:value="form.haveInternet"
                size="medium"
                name="radiobuttong"
              >
                <n-radio-button :value="true" checked> Ha </n-radio-button>
                <n-radio-button :value="false"> Yo'q </n-radio-button>
              </n-radio-group>
            </div>
            <div class="mt-3">
              <div>
                <FormLabel htmlFor="internetSpeed">Maktab turi</FormLabel>
              </div>
              <n-radio-group
                v-model:value="form.govermental"
                name="radiobuttongroup2"
                size="medium"
              >
                <n-radio-button :value="0"> Davlat maktabi </n-radio-button>
                <n-radio-button :value="1"> Xususiy maktab </n-radio-button>
              </n-radio-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-x-5">
      <div class="col-span-12 xl:col-span-6 mt-5 intro-y box">
        <div class=" ">
          <div
            class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <h2 class="mr-auto text-base font-medium">Tashkilot Rahbari</h2>
          </div>
          <div class="p-5">
            <div>
              <div>
                <FormLabel htmlFor="headLastname">Familya</FormLabel>
                <FormInput
                  id="headLastname"
                  type="text"
                  v-model:modelValue="form.headLastname"
                />
                <p class="mt-2 text-danger" v-if="v$.headLastname.$error">
                  Bu maydon bo'sh bo'lishi mumkin emas
                </p>
              </div>
              <div class="mt-3">
                <FormLabel htmlFor="headName">Ismi</FormLabel>
                <FormInput id="headName" type="text" v-model:modelValue="form.headName" />
                <p class="mt-2 text-danger" v-if="v$.headName.$error">
                  Bu maydon bo'sh bo'lishi mumkin emas
                </p>
              </div>
              <div class="mt-3">
                <FormLabel htmlFor="headSecondName">Otasining ismi</FormLabel>
                <FormInput
                  id="headSecondName"
                  type="text"
                  v-model:modelValue="form.headSecondName"
                />
                <p class="mt-2 text-danger" v-if="v$.headSecondName.$error">
                  Bu maydon bo'sh bo'lishi mumkin emas
                </p>
              </div>
              <div class="mt-3">
                <FormLabel htmlFor="headPositionId">Lavozimi</FormLabel>
                <SelectPosition v-model:value="form.headPositionId" />
                <p class="mt-2 text-danger" v-if="v$.headPositionId.$error">
                  Bu maydon bo'sh bo'lishi mumkin emas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 xl:col-span-6 mt-5 intro-y box">
        <div class="">
          <div
            class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <h2 class="mr-auto text-base font-medium">AKT bo'yicha mas'ul shaxs</h2>
          </div>
          <div class="p-5">
            <div>
              <div>
                <FormLabel htmlFor="aktLastname">Familya</FormLabel>
                <FormInput
                  id="aktLastname"
                  type="text"
                  v-model:modelValue="form.aktLastname"
                />
                <p class="mt-2 text-danger" v-if="v$.aktLastname.$error">
                  Bu maydon bo'sh bo'lishi mumkin emas
                </p>
              </div>
              <div class="mt-3">
                <FormLabel htmlFor="aktName">Ismi</FormLabel>
                <FormInput id="aktName" type="text" v-model:modelValue="form.aktName" />
                <p class="mt-2 text-danger" v-if="v$.aktName.$error">
                  Bu maydon bo'sh bo'lishi mumkin emas
                </p>
              </div>
              <div class="mt-3">
                <FormLabel htmlFor="aktSecondName">Otasining ismi</FormLabel>
                <FormInput
                  id="aktSecondName"
                  type="text"
                  v-model:modelValue="form.aktSecondName"
                />
                <p class="mt-2 text-danger" v-if="v$.aktSecondName.$error">
                  Bu maydon bo'sh bo'lishi mumkin emas
                </p>
              </div>
              <div class="mt-3">
                <FormLabel htmlFor="aktPhone">Telefon raqami</FormLabel>
                <FormInput id="aktPhone" type="text" v-model:modelValue="form.aktPhone" />
                <p class="mt-2 text-danger" v-if="v$.aktPhone.$error">
                  Bu maydon bo'sh bo'lishi mumkin emas
                </p>
              </div>
              <div class="mt-3">
                <FormLabel htmlFor="aktPositionId">Lavozimi</FormLabel>
                <SelectPosition v-model:value="form.aktPositionId" />
                <p class="mt-2 text-danger" v-if="v$.aktPositionId.$error">
                  Bu maydon bo'sh bo'lishi mumkin emas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box p-4">
      <CMap v-model:show="locationShow" v-model:location="location" />
      <CMapView v-if="location?.[0] && !noLocation" :position="location" />
      <Button
        @click="
          locationShow = true;
          noLocation = false;
        "
        variant="outline-primary"
        class="mt-2 mr-2"
      >
        <Lucide icon="Navigation" class="w-4 h-4 mr-1" />Xaritada belgilash
      </Button>
      <Button
        @click="noLocation = true"
        variant="danger"
        class="ml-auto mr-2 mt-2"
        style="min-width: 200px"
      >
        <Lucide icon="X" class="w-4 h-4 mr-1" /> Joylashuvni o'chirish
      </Button>
    </div>
    <div class="flex justify-end mt-4">
      <Button
        @click="$router.back()"
        variant="outline-primary"
        class="ml-auto"
        style="min-width: 200px"
      >
        <Lucide icon="X" class="w-4 h-4 mr-1" /> Bekor qilish
      </Button>
      <Button variant="primary" @click="onSubmit" style="min-width: 200px" class="ml-5">
        <Lucide icon="Save" class="w-4 h-4 mr-1" /> Saqlash
      </Button>
    </div>
    <!-- END: Personal Information -->
  </div>
</template>
