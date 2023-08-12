<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";
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

let emits = defineEmits(["close", "success"]);

let form = ref({
    shortName: "",
    name: "",
    year: "",
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

const onSubmit = () => {
    v$.value.$touch();
    if (v$.value.$invalid) {
        emits("success", form.value)
    } else {

    }
};


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

        </div>
        <div class="flex justify-end  mt-4">
            <Button @click="emits('close')">
                <Lucide icon="Save" class="w-4 h-4 mr-1" /> Yopish
            </Button>
            <Button @click="onSubmit" variant="primary" class="ml-5">
                <Lucide icon="Save" class="w-4 h-4 mr-1" /> Saqlash
            </Button>
        </div>
        <!-- END: Personal Information -->
    </div>
</template>
