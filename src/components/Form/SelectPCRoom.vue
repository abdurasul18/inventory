<script lang="ts" setup>
import Multiselect from '@vueform/multiselect'
import { PCService } from '../../services/pc-room'
import { ref, onMounted, computed } from "vue";
import {useRoute} from "vue-router"
let props = defineProps<{
  value: any,
  organizationId: any
}>()
let emits = defineEmits(["update:value"])
let options = ref<any[]>([])
let value = ref([])
let loading = ref(false)

let modelValue = computed({
  get() {
    return props.value
  },
  set(val) {
    emits('update:value', val)
  }
})

async function loadOptions(search = '') {
  loading.value = true
  try {
    let res = await PCService.getList({
      page: 0,
      size: 50,
      organizationId: props.organizationId,
    })
    options.value = res.data.content
  }
  finally {
    loading.value = false

  }
}
onMounted(loadOptions)

</script>
<template>
  <div>
    <Multiselect  searchable  v-model="modelValue" :options="options" label="name" valueProp="id"  />
  </div>
</template>