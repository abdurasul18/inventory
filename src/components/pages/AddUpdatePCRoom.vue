<script setup lang="ts">
import _ from "lodash";
import { ref, onMounted } from "vue";
import Button from "../../base-components/Button";
import { FormInput, FormLabel } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

let props = defineProps<{
  item: any;
  mode: "create" | "update";
}>();
onMounted(() => {
  if (props.mode == "update") {
    form.value.name = props.item.name;
    form.value.number = props.item.number;
  }
});
let emits = defineEmits(["close", "success"]);

let form = ref({
  name: "",
  number: "",
});

const rules = {
  name: {
    required,
  },
  number: {
    required,
  },
};

const v$ = useVuelidate(rules, form.value);
async function validate() {
  let result = await v$.value.$validate();
  if (result) {
    emits("success", form.value);
  }
}

</script>

<template>
  <div>
    <div class="">
      <div>
        <FormLabel htmlFor="name">Nomi</FormLabel>
        <FormInput id="name" type="text" v-model:modelValue="form.name" />
        <p class="mt-2 text-danger" v-if="v$.name.$error">
          Bu maydon bo'sh bo'lishi mumkin emas
        </p>
      </div>
      <div class="mt-5">
        <FormLabel htmlFor="number">Komyuter sig'imi</FormLabel>
        <FormInput id="number" type="text" v-model:modelValue="form.number" />
        <p class="mt-2 text-danger" v-if="v$.number.$error">
          Bu maydon bo'sh bo'lishi mumkin emas
        </p>
      </div>
    </div>
    <div class="flex justify-end mt-4">
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
