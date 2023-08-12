<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import {
    FormInput,
    FormLabel,
    FormSelect,
    FormTextarea,
} from "../../base-components/Form";
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
let form = ref({
    address: "",
    aktLastname: "",
    aktName: "",
    aktPhone: "",
    aktPositionId: "",
    aktSecondName: "",
    capacity: 0,
    email: "",
    govermental: 0,
    head: "",
    headLastname: "",
    headName: "",
    headPositionId: "",
    headSecondName: "",
    inn: "",
    latitude: 0,
    longitude: 0,
    maktabErpId: 0,
    name: "",
    needPc: 0,
    number: "",
    phone: "",
    schoolTypeId: 0,
    shortName: "",
    soatoId: "",
    studentCount: 0,
    website: ""
})

const rules = {
    address: {
        required
    },
    aktLastname: {
        required
    },
    aktName: {
        required
    },
    aktPhone: {
        required
    },
    aktPositionId: {
        required
    },
    aktSecondName: {
        required
    },
    capacity: {

    },
    email: {
        required
    },
    govermental: {

    },
    head: {
        required
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
        required
    },
    needPc: {

    },
    number: {
        required
    },
    phone: {
        required
    },
    schoolTypeId: {

    },
    shortName: {
        required
    },
    soatoId: {

    },
    studentCount: {

    },
    website: {

    }
};

const v$ = useVuelidate(rules, form.value);

const onSubmit = () => {
    v$.value.$touch();
    if (v$.value.$invalid) {


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
                            <FormLabel htmlFor="shortname">Raqami</FormLabel>
                            <FormInput id="shortname" type="text" v-model:modelValue="form.number" />
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
                            <FormLabel htmlFor="email">Elektrin pochta manzili</FormLabel>
                            <FormInput id="email" type="text" v-model:modelValue="form.email" />
                            <p class="mt-2 text-danger" v-if="v$.email.$error">
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
                            <FormLabel htmlFor="studentCount">Talabalar soni</FormLabel>
                            <FormInput id="studentCount" type="text" v-model:modelValue="form.studentCount" />
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
                            <FormLabel htmlFor="website">Veb sayt</FormLabel>
                            <FormInput id="website" type="text" v-model:modelValue="form.website" />
                            <p class="mt-2 text-danger" v-if="v$.website.$error">
                                Bu maydon bo'sh bo'lishi mumkin emas
                            </p>
                        </div>
                        <div class="mt-3">
                            <FormLabel htmlFor="website">Maktab turi</FormLabel>
                            <FormInput id="website" type="text" v-model:modelValue="form.schoolTypeId" />
                            <p class="mt-2 text-danger" v-if="v$.schoolTypeId.$error">
                                Bu maydon bo'sh bo'lishi mumkin emas
                            </p>
                        </div>
                        <div class="mt-3">
                            <FormLabel htmlFor="website">Davlat maktabi/ Xususiy maktab</FormLabel>
                            <div class="mt-2">
                                <n-radio-group v-model:value="form.govermental" name="radiogroup">
                                    <n-radio-button :value="1">Xususiy maktab</n-radio-button>
                                    <n-radio-button :value="0"> Davlat maktabi </n-radio-button>
                                </n-radio-group>
                            </div>
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
                                <TomSelect v-model="form.aktPositionId" class="w-full" :options="{
                                    placeholder: 'Tanlang',
                                }">
                                    <option value="8">Leonardo DiCaprio</option>
                                    <option value="2">Johnny Deep</option>
                                    <option value="3">Robert Downey, Jr</option>
                                    <option value="4">Samuel L. Jackson</option>
                                    <option value="5">Morgan Freeman</option>
                                </TomSelect>
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
                                <FormInput id="headPositionId" type="text" v-model:modelValue="form.headPositionId" />
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
