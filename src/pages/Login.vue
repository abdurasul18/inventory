<script setup lang="ts">
import DarkModeSwitcher from "../components/DarkModeSwitcher";
import MainColorSwitcher from "../components/MainColorSwitcher";
import logoUrl from "../assets/images/logo2.svg";
import { FormInput, FormCheck } from "../base-components/Form";
import Button from "../base-components/Button";
import { ref } from "vue";
import ApiService from "../services/api";
import { AuthService, ILoginData } from "../services/auth";
import { useUserSession } from "../stores/userSession";
import { useRouter } from "vue-router";
import Loading from "../base-components/Loading/Loading.vue";
import { useToast } from "vue-toast-notification";

const toast = useToast()
const { login } = useUserSession()
const router = useRouter()
let form = ref({
  username: "",
  password: ""
})
let loading = ref(false)
async function loginUser() {
  if (loading.value) return
  try {
    loading.value = true
    let res = await AuthService.login(form.value)
    login(res)
    await router.push("/")
  }
  catch (err: any) {
    toast.error('Login yoki parol xato kiritilgan', {
      position: "top-right",
    })
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div :class="[
    '-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600',
    'before:hidden before:xl:block before:content-[\'\'] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400',
    'after:hidden after:xl:block after:content-[\'\'] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700',
  ]">
    <DarkModeSwitcher />
    <MainColorSwitcher />
    <div class="container relative z-10 sm:px-10">
      <div class="block grid-cols-2 gap-4 xl:grid">
        <!-- BEGIN: Login Info -->
        <div class="flex-col hidden min-h-screen xl:flex">
          <div class="my-auto w-1/2 ">
            <img alt="Midone Tailwind HTML Admin Template" class="-mt-16 mx-auto -intro-x" :src="logoUrl" />
            <div class="mt-5  text-center text-lg text-white -intro-x text-opacity-70 dark:text-slate-400">
              Inverntarizatsiya tizimi
            </div>
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
          <form @submit.prevent="loginUser"
            class="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
            <h2 class="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
              Tizimga kirish
            </h2>

            <div class="mt-8 intro-x">
              <FormInput v-model:modelValue="form.username" required type="text"
                class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="Foydalanuvchi nomi" />
              <FormInput v-model:modelValue="form.password" required type="password"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]" placeholder="Parol" />
            </div>
            <div class="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
              <div class="flex items-center mr-auto">

              </div>
            </div>
            <div class="mt-5 text-center intro-x xl:mt-8 xl:text-left">
              <Button :loading="loading" type="submit" variant="primary" class="w-full px-4 py-3 align-top">
                Kirish
              </Button>

            </div>
          </form>
        </div>
        <!-- END: Login Form -->
      </div>
    </div>
  </div>
</template>
