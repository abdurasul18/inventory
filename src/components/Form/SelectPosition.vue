<script lang="ts" setup>
import Multiselect from '@vueform/multiselect'
import { PositionService } from '../../services/reference/position'
import { ref, onMounted, computed } from "vue";
let props = defineProps<{
  value: any
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
    let res = await PositionService.getList({
      page: 0,
      size: 50,
      search: search || ''
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
    <Multiselect  searchable :filterResults="false" v-model="modelValue" :options="options" label="name" valueProp="id" @search-change="loadOptions" />
  </div>
</template>