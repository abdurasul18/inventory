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
        form.value.nameEng = props.item.nameEng
        form.value.nameRu = props.item.nameRu
        form.value.nameUz = props.item.nameUz
    }
})
let emits = defineEmits(["close", "success"]);

let form = ref({
    nameUz: "",
    nameRu: "",
    nameEng: ""
})

const rules = {
    nameUz: {
        required
    },
    nameRu: {
        required
    },
    nameEng: {
        required
    }


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
                <FormLabel htmlFor="nameUz">Nomi</FormLabel>
                <FormInput id="nameUz" type="text" v-model:modelValue="form.nameUz" />
                <p class="mt-2 text-danger" v-if="v$.nameUz.$error">
                    Bu maydon bo'sh bo'lishi mumkin emas
                </p>
            </div>
            <div>
                <FormLabel htmlFor="nameEng">Nomi</FormLabel>
                <FormInput id="nameEng" type="text" v-model:modelValue="form.nameEng" />
                <p class="mt-2 text-danger" v-if="v$.nameEng.$error">
                    Bu maydon bo'sh bo'lishi mumkin emas
                </p>
            </div>
            <div>
                <FormLabel htmlFor="nameRu">Nomi</FormLabel>
                <FormInput id="nameRu" type="text" v-model:modelValue="form.nameRu" />
                <p class="mt-2 text-danger" v-if="v$.nameRu.$error">
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
