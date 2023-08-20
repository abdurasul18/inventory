<script lang="ts" setup>
import { computed } from "vue";
import Lucide from "../Lucide";
type PropType = {
  value: File[];
  removable?: boolean;
};
let props = withDefaults(defineProps<PropType>(), {
  value: () => [],
  removable: true,
});
let emits = defineEmits(["update:value"]);
let files = computed({
  get() {
    return props.value;
  },
  set(val) {
    emits("update:value", val);
  },
});
function getExt(name: string) {
  let spArr = name.trim().split(".");
  return spArr[spArr.length - 1];
}
function removeFile(index: number) {
  files.value.splice(index, 1);
}
function getSize(size: number) {
  let sizeKb = size / 1024;
  if (sizeKb / 1024 >= 0.5) {
    return `${(sizeKb / 1024).toFixed(2)} MB`;
  } else {
    return sizeKb.toFixed(2) + " KB";
  }
}
</script>
<template>
  <n-list hoverable>
    <n-list-item v-for="(file, index) in files">
      <div  class="flex justify-between items-center" style="width: 100%;">
        <div class="flex  items-center" style="width: 80%;">
          <Lucide icon="File" class="w-[50px] text-primary" />
          <div>
            <strong> {{ file.name }}</strong>
            <div>{{ getSize(file.size) }}</div>
          </div>
        </div>
        <Lucide @click="files.splice(index, 1)" style="cursor: pointer;" icon="Trash" class="w-8 text-danger" />
      </div>
    </n-list-item>
  </n-list>
</template>
<style scoped></style>
