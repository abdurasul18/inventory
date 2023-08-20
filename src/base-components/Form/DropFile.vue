<script setup lang="ts">
import { ref, computed } from "vue";
import CFileView from "./CFileView.vue";
let props = defineProps<{
  value: any;
  inputId: string;
}>();
let emits = defineEmits(["update:value"]);
let file = ref();
function onAddFile(e: any) {
  files.value = [...files.value, ...Array.from(e.target.files)];
  file.value.value = null;
}

let files = computed({
  get() {
    return props.value;
  },
  set(val) {
    emits("update:value", val);
  },
});
function addMore() {
  file.value?.click();
}
</script>

<template>
  <div>
    <label :for="inputId" v-show="!files.length">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.8179 22.1697C13.7864 22.1697 12.926 21.3813 12.8359 20.3539C12.6476 18.2055 12.5999 16.0475 12.6931 13.8937C12.5807 13.8863 12.4682 13.8784 12.3558 13.8701L10.3698 13.7255C9.10037 13.6329 8.39076 12.2175 9.07608 11.145C10.5377 8.8576 13.2166 6.29752 15.4213 4.71388C16.0663 4.25048 16.9351 4.25048 17.5803 4.71388C19.7849 6.29752 22.4638 8.85759 23.9254 11.145C24.6107 12.2175 23.9011 13.6329 22.6318 13.7255L20.6457 13.8701C20.5333 13.8784 20.4209 13.8863 20.3085 13.8937C20.4015 16.0475 20.3539 18.2055 20.1655 20.3539C20.0755 21.3813 19.2151 22.1697 18.1837 22.1697H14.8179ZM14.7427 13.0167C14.5911 15.3997 14.6194 17.7908 14.8274 20.1697H18.1741C18.3821 17.7908 18.4105 15.3997 18.2589 13.0167C18.2418 12.7496 18.3326 12.4867 18.511 12.2871C18.6893 12.0874 18.9402 11.9676 19.2075 11.9544C19.6387 11.9332 20.0697 11.9069 20.5003 11.8755L21.9427 11.7703C20.6633 9.88594 19.0613 8.24027 17.2091 6.9098L16.5007 6.40095L15.7923 6.9098C13.9402 8.24027 12.3382 9.88595 11.0588 11.7703L12.5012 11.8755C12.9319 11.9069 13.3628 11.9332 13.7939 11.9544C14.0613 11.9676 14.3122 12.0874 14.4906 12.2871C14.6689 12.4867 14.7597 12.7496 14.7427 13.0167Z"
          fill="#A3B1BB"
        />
        <path
          d="M8.16504 22.6667C8.16504 22.1144 7.71732 21.6667 7.16504 21.6667C6.61276 21.6667 6.16504 22.1144 6.16504 22.6667V25.3333C6.16504 26.622 7.20971 27.6667 8.49837 27.6667H24.4984C25.787 27.6667 26.8317 26.622 26.8317 25.3333V22.6667C26.8317 22.1144 26.384 21.6667 25.8317 21.6667C25.2794 21.6667 24.8317 22.1144 24.8317 22.6667V25.3333C24.8317 25.5175 24.6825 25.6667 24.4984 25.6667H8.49837C8.31428 25.6667 8.16504 25.5175 8.16504 25.3333V22.6667Z"
          fill="#A3B1BB"
        />
      </svg>
      <div class="title is-6 my-1">Fayl yuklash</div>
      <div>Faylni ushbu maydonga tashlang yoki bu yerga bosib yuklang.</div>
      <input
      accept="image/*"
        @change="onAddFile"
        class="file"
        type="file"
        :id="inputId"
        multiple
        ref="file"
      />
    </label>
    <CFileView v-if="files.length" :value="files" />
    <button class="c-button" v-if="files.length" @click="addMore" style="width: 100%">
      Yana yuklash
    </button>
  </div>
</template>
<style scoped>
.c-button {
  border-radius: 12px;
  background: var(--input-color, #f4f9fb);
  color: #0098c7;
  font-family: var(--font-alt);
  padding: 14px 41px;
  cursor: pointer;
  border: 0;
}

label {
  height: 126px;
  padding: 16px;
  border-radius: 12px;
  border: 1px dashed #c7d4de;
  background: #f4f9fb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  box-sizing: content-box;
  margin-bottom: 15px;
  cursor: pointer;
}
label:hover::after {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: 12px;
  border: 1px dashed #c7d4de;
}
label:hover path {
  fill: #0098c7;
  transform: translateY(-2px);
}
input {
  position: absolute;
  opacity: 0;
  inset: 0;
  cursor: pointer;
}
path {
  transition: all ease 0.3s;
}
</style>
