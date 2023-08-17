<script setup lang="ts">
import _ from "lodash";
import { ref, toRefs, computed, onMounted } from "vue";
import Button from "../../base-components/Button";
import {
    FormInput,
    FormLabel,
} from "../../base-components/Form";
import SelectProject from "../../components/Form/SelectProject.vue";
import Lucide from "../../base-components/Lucide";
import { useVuelidate } from "@vuelidate/core";
import { useToast } from "vue-toast-notification";
import { UserService } from "../../services/user";
import { useUserSession } from "../../stores/userSession";
import { useRoute, useRouter } from "vue-router";
import SelectItemType from "../../components/Form/SelectItemType.vue";
import { IItem, ItemService } from "../../services/item";
import Loading from "../../base-components/Loading/Loading.vue";
import { useSideMenuStore } from "../../stores/side-menu";
let { breadcrumb } = toRefs(useSideMenuStore())
const route = useRoute()

breadcrumb.value = [
  {
    title: "Jihoz Tahrirlash",
    url: route.fullPath
  }
]
const toast = useToast();
const router = useRouter();
let { user } = toRefs(useUserSession());
let schoolId = computed(() => {
    return String(route.params?.id || '') || user.value?.organizationId;
})


let form = ref({
    count: 0,
    images: [],
    invertNumber: "",
    itemTypeId: "",
    model: "",
    nameEng: "",
    nameRu: "",
    nameUz: "",
    pcRoomId: "",
    projectId: "",
    schoolId: "",
    serialNumber: "",
    state: ""
})

const rules = {
    count: {

    },
    images: {

    },
    invertNumber: {

    },
    itemTypeId: {

    },
    model: {

    },
    nameEng: {

    },
    nameRu: {

    },
    nameUz: {

    },
    pcRoomId: {

    },
    projectId: {

    },
    schoolId: {

    },
    serialNumber: {

    },
    state: {

    }
};

const v$ = useVuelidate(rules, form.value);
let loading = ref(false);
let data = ref<IItem>();
onMounted(async () => {
    try {
        loading.value = true;
        let res = await ItemService.getById(route.params.id);
        data.value = res.data;
        form.value = {
            count: data.value.count,
            invertNumber: data.value.invertNumber,
            itemTypeId: data.value.itemTypeId,
            nameEng: data.value.nameEng,
            nameRu: data.value.nameRu,
            nameUz: data.value.nameUz,
            pcRoomId: data.value.pcRoomId,
            projectId: data.value.projectId,
            schoolId: data.value.schoolId,
            serialNumber: data.value.serialNumber,
            state: data.value.state
        } as any
    }
    finally {
        loading.value = false;
    }
})
let addLoading = ref(false);
async function validate() {
    let result = await v$.value.$validate();
    return result
}
async function onSubmit() {
    if ((await validate())) {
        try {
            addLoading.value = true;
            let payload = {
                ...form.value,
            }
            await ItemService.update(data.value?.id, payload)
            toast.success("Ma'lumotlar muvaffaqiyatli saqlandi");
            await router.push(`/school/${data.value?.schoolId}/item`);
        }
        finally {
            addLoading.value = false;
        }
    } else {

    }
};

let locationShow = ref(false);
let location = ref<Number[] | null[]>([20, 20]);
let show = ref(true);
</script>

<template>
    <div class="flex items-center mt-8 intro-y">
        <h2 class="mr-auto text-lg font-medium"> Jihoz qo'shish </h2>
    </div>
    <!-- END: Profile Menu -->
    <Loading :active="loading">
        <!-- BEGIN: Personal Information -->
        <div class="mt-5 intro-y box">
            <div class="p-5">
                <div class="grid grid-cols-2 gap-x-4">
                    <div class="mb-3">
                        <FormLabel htmlFor="name">Nomi</FormLabel>
                        <FormInput id="name" type="text" v-model:modelValue="form.nameUz" />
                        <p class="mt-2 text-danger" v-if="v$.nameUz.$error">
                            Bu maydon bo'sh bo'lishi mumkin emas
                        </p>
                    </div>
                    <div class="mb-3">
                        <FormLabel htmlFor="invertNumber">Inventarizatsiya raqami</FormLabel>
                        <FormInput id="invertNumber" type="text" v-model:modelValue="form.invertNumber" />
                        <p class="mt-2 text-danger" v-if="v$.invertNumber.$error">
                            Bu maydon bo'sh bo'lishi mumkin emas
                        </p>
                    </div>
                    <div class="mb-3">
                        <FormLabel htmlFor="serialNumber">Seriya raqami</FormLabel>
                        <FormInput id="serialNumber" type="text" v-model:modelValue="form.serialNumber" />
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
                        <FormLabel htmlFor="model">Model</FormLabel>
                        <FormInput id="model" type="text" v-model:modelValue="form.model" />
                        <p class="mt-2 text-danger" v-if="v$.model.$error">
                            Bu maydon bo'sh bo'lishi mumkin emas
                        </p>
                    </div>
                    <div class="mb-3">
                        <FormLabel htmlFor="state">state</FormLabel>
                        <FormInput id="state" type="text" v-model:modelValue="form.state" />
                        <p class="mt-2 text-danger" v-if="v$.state.$error">
                            Bu maydon bo'sh bo'lishi mumkin emas
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </Loading>

    <div class="flex justify-end mt-4">
        <Button @click="$router.back()" variant="outline-primary" class="ml-auto " style="min-width: 200px;">
            <Lucide icon="X" class="w-4 h-4 mr-1" /> Bekor qilish
        </Button>
        <Button :loading="addLoading" variant="primary" @click="onSubmit" style="min-width: 200px;" class="ml-5">
            <Lucide icon="Save" class="w-4 h-4 mr-1" /> Saqlash
        </Button>
    </div>
    <!-- END: Personal Information -->
</template>
