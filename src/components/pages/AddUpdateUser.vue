<script setup lang="ts">
import _ from "lodash";
import { ref, onMounted } from "vue";
import Button from "../../base-components/Button";
import { FormInput, FormLabel } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { fileToBase64 } from "../../utils/fileToBase64";
import { ImageService } from "../../services/image";
import Loading from "../../base-components/Loading/Loading.vue";
let emits = defineEmits(["close", "success"]);
let props = defineProps<{
  item: any;
  mode: "create" | "update";
}>();
onMounted(() => {
  if (props.mode === "update") {
    //  form.value.avatar = props.item.avatar;
    form.value.fio = props.item.fio;
    form.value.password = props.item.password;
    form.value.username = props.item.username;
  }
});
let form = ref({
  avatar: null as any,
  fio: "",
  password: "",
  username: "",
});

const rules = {
  avatar: {},
  fio: { required },
  password: { required },
  username: { required },
};

const v$ = useVuelidate(rules, form.value);
let loading = ref(false);
let file = ref();
async function validate() {
  let result = await v$.value.$validate();
  if (result) {
    if (file.value) {
      try {
        loading.value = true;
        let res = (await fileToBase64(file.value)) as any;
        let imgId = await ImageService.create(res);
        form.value.avatar = imgId.data.id;
      } finally {
        loading.value = false;
      }
    }
    emits("success", form.value);
  }
}
function addFile(e: any) {
  file.value = e.target.files[0];
}
</script>

<template>
  <div>
    <Loading :active="loading">
      <div class="">
        <div>
          <FormLabel htmlFor="name">Avatar</FormLabel>
          <FormInput id="name" type="file" accept="image/*" @change="addFile" />
        </div>
        <div class="mt-5">
          <FormLabel htmlFor="fio">FIO</FormLabel>
          <FormInput id="fio" type="text" v-model:modelValue="form.fio" />
          <p class="mt-2 text-danger" v-if="v$.fio.$error">
            Bu maydon bo'sh bo'lishi mumkin emas
          </p>
        </div>
        <div class="mt-5">
          <FormLabel htmlFor="username">username</FormLabel>
          <FormInput id="username" type="text" v-model:modelValue="form.username" />
          <p class="mt-2 text-danger" v-if="v$.username.$error">
            Bu maydon bo'sh bo'lishi mumkin emas
          </p>
        </div>
        <div class="mt-5">
          <FormLabel htmlFor="password">Parol</FormLabel>
          <FormInput id="password" type="text" v-model:modelValue="form.password" />
          <p class="mt-2 text-danger" v-if="v$.password.$error">
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
    </Loading>
    <!-- END: Personal Information -->
  </div>
</template>
