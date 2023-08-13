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
import SelectProject from "../../components/Form/SelectProject.vue";
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
const toast = useToast();
const router = useRouter();
let { user } = toRefs(useUserSession());

let userId = computed(() => {
    return user.value?.id;
})

let form = ref({
    address: "",
    aktLastname: "",
    aktName: "",
    aktPhone: "",
    aktPositionId: "",
    aktSecondName: "",
    avatar: "",
    email: "",
    headLastname: "",
    headName: "",
    headPositionId: "",
    headSecondName: "",
    inn: "",
    latitude: "",
    longitude: "",
    name: "",
    needPc: 0,
    password: "",
    phone: "",
    shortName: "",
    website: ""
})

const rules = {
    address: {

    },
    aktLastname: {

    },
    aktName: {

    },
    aktPhone: {

    },
    aktPositionId: {

    },
    aktSecondName: {

    },
    avatar: {

    },
    email: {

    },
    headLastname: {

    },
    headName: {

    },
    headPositionId: {

    },
    headSecondName: {

    },
    inn: {

    },
    latitude: {

    },
    longitude: {

    },
    name: {

    },
    needPc: {

    },
    password: {

    },
    phone: {

    },

    shortName: {

    },


    website: {

    }
};

const v$ = useVuelidate(rules, form.value);
let loading = ref(false);
async function getData() {
    try {
        loading.value = true;
        let res = await UserService.getProfile()
        let data = res.data as any;
        for (const key in data) {
            if (key in form.value) {
                (form.value as any)[key] = data[key]
            }
        }
    }
    finally {

    }
}

onMounted(() => {
    getData()
})



let updateLoading = ref(false);
async function validate() {
    let result = await v$.value.$validate();
    return result
}
async function onSubmit() {
    console.log((await validate()));
    if ((await validate())) {
        await UserService.update(userId.value, form.value)
        toast.success("Ma'lumotlar muvaffaqiyatli saqlandi");
        await router.push("/profile");
    } else {

    }
};


const select = ref("1");
</script>

<template>
    <div class="flex items-center mt-8 intro-y">
        <h2 class="mr-auto text-lg font-medium">Tashkilot ma'lumotlarini tahrirlash</h2>
    </div>
    <!-- END: Profile Menu -->
    <div>
        <!-- BEGIN: Personal Information -->
        <div class="mt-5 intro-y box">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 class="mr-auto text-base font-medium"> Tashkilot ma'lumotlari </h2>
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
                            <FormLabel htmlFor="inn">Inn</FormLabel>
                            <FormInput id="inn" type="text" v-model:modelValue="form.inn" />
                            <p class="mt-2 text-danger" v-if="v$.inn.$error">
                                Bu maydon bo'sh bo'lishi mumkin emas
                            </p>
                        </div>

                        <div class="mt-3">
                            <FormLabel htmlFor="password">Parol</FormLabel>
                            <FormInput id="password" type="text" v-model:modelValue="form.password" />
                            <p class="mt-2 text-danger" v-if="v$.password.$error">
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
                            <FormLabel htmlFor="needPc">Ehtiyoj</FormLabel>
                            <FormInput id="needPc" type="text" v-model:modelValue="form.needPc" />
                            <p class="mt-2 text-danger" v-if="v$.needPc.$error">
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
                            <FormLabel htmlFor="phone">Telefon raqami</FormLabel>
                            <FormInput id="phone" type="text" v-model:modelValue="form.phone" />
                            <p class="mt-2 text-danger" v-if="v$.phone.$error">
                                Bu maydon bo'sh bo'lishi mumkin emas
                            </p>
                        </div>
                        <div class="mt-3">
                            <FormLabel htmlFor="email">Elektrin pochta manzili</FormLabel>
                            <FormInput id="email" type="text" v-model:modelValue="form.email" />
                            <p class="mt-2 text-danger" v-if="v$.email.$error">
                                Bu maydon bo'sh bo'lishi mumkin emas
                            </p>
                        </div>
                       

                    </div>
                </div>

            </div>
        </div>
        <div class="grid grid-cols-12 gap-x-5">
            <div class="col-span-12 xl:col-span-6 mt-5 intro-y box">
                <div class="">
                    <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                        <h2 class="mr-auto text-base font-medium"> AKT bo'yicha mas'ul shaxs </h2>
                    </div>
                    <div class="p-5">
                        <div>
                            <div>
                                <FormLabel htmlFor="aktLastname">Familya</FormLabel>
                                <FormInput id="aktLastname" type="text" v-model:modelValue="form.aktLastname" />
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
                                <FormInput id="aktSecondName" type="text" v-model:modelValue="form.aktSecondName" />
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
                                <SelectProject v-model:value="form.aktPositionId" />
                                <p class="mt-2 text-danger" v-if="v$.aktPositionId.$error">
                                    Bu maydon bo'sh bo'lishi mumkin emas
                                </p>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <div class="col-span-12  xl:col-span-6 mt-5 intro-y box">
                <div class=" ">
                    <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                        <h2 class="mr-auto text-base font-medium"> Tashkilot Rahbari </h2>
                    </div>
                    <div class="p-5">
                        <div>
                            <div>
                                <FormLabel htmlFor="headLastname">Familya</FormLabel>
                                <FormInput id="headLastname" type="text" v-model:modelValue="form.headLastname" />
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
                                <FormInput id="headSecondName" type="text" v-model:modelValue="form.headSecondName" />
                                <p class="mt-2 text-danger" v-if="v$.headSecondName.$error">
                                    Bu maydon bo'sh bo'lishi mumkin emas
                                </p>
                            </div>
                            <div class="mt-3">
                                <FormLabel htmlFor="headPositionId">Lavozimi</FormLabel>
                                <SelectProject v-model:value="form.headPositionId" />
                                <p class="mt-2 text-danger" v-if="v$.headPositionId.$error">
                                    Bu maydon bo'sh bo'lishi mumkin emas
                                </p>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </div>
        <div class="flex  mt-4">
            <Button variant="primary" @click="onSubmit" style="min-width: 200px;" class="mr-auto">
                <Lucide icon="Save" class="w-4 h-4 mr-1" /> Saqlash
            </Button>
        </div>
        <!-- END: Personal Information -->
    </div>
</template>
