<script setup lang="ts">
import _ from "lodash";
import { ref, onMounted } from "vue";
import Button from "../../base-components/Button";
import {
    FormInput,
    FormLabel,
} from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import {
    required,

} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

let props = defineProps<{
    item: any,
    mode: 'create' | 'update'
}>()
onMounted(() => {
    if (props.mode == 'update') {
        form.value.name = props.item.name
        form.value.shortName = props.item.shortName
        form.value.year = new Date(props.item.year).getFullYear()

    }
})
let emits = defineEmits(["close", "success"]);

let form = ref({
    shortName: "",
    name: "",
    year: null as any,
})

const rules = {
    shortName: {
        required
    },
    name: {
        required
    },
    year: {
        required
    },
};

const v$ = useVuelidate(rules, form.value);
async function validate() {
    let result = await v$.value.$validate();
    if (result) {
        emits("success", form.value);
    }
}


const select = ref("1");
</script>

<template>
    <div>
        <div class="6">
            <div>
                <FormLabel htmlFor="name">Nomi</FormLabel>
                <FormInput id="name" type="text" v-model:modelValue="form.name" />
                <p class="mt-2 text-danger" v-if="v$.name.$error">
                    Bu maydon bo'sh bo'lishi mumkin emas
                </p>
            </div>
            <div class="mt-3">
                <FormLabel htmlFor="shortName">Qisqacha nomi</FormLabel>
                <FormInput id="shortName" type="text" v-model:modelValue="form.shortName" />
                <p class="mt-2 text-danger" v-if="v$.shortName.$error">
                    Bu maydon bo'sh bo'lishi mumkin emas
                </p>
            </div>
            <div class="mt-3">
                <FormLabel htmlFor="year">Yil</FormLabel>
                <n-date-picker v-model:formatted-value="form.year" value-format="yyyy" type="year" clearable placeholder="" />
                <p class="mt-2 text-danger" v-if="v$.year.$error">
                    Bu maydon bo'sh bo'lishi mumkin emas
                </p>
            </div>

        </div>
        <div class="flex justify-end  mt-4">
            <Button @click="emits('close')">
                <Lucide icon="Save" class="w-4 h-4 mr-1" /> Yopish
            </Button>
            <Button @click="validate" variant="primary" class="ml-5">
                <Lucide icon="Save" class="w-4 h-4 mr-1" /> Saqlash
            </Button>
        </div>
        <!-- END: Personal Information -->
    </div>
</template>
