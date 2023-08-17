import { acceptHMRUpdate, defineStore } from "pinia";
import { ref, computed, Ref } from "vue";
import { useStorage } from "@vueuse/core";
import { ILoginData } from "../services/auth";
import { UserService, IUserData, IUserType } from "../services/user";
import ApiService from "../services/api";

let userTypes : IUserType[] = [ "RESPUBLIKA", "VILOYAT", "TUMAN" , "MAKTAB",];
export const useUserSession = defineStore("userSession", () => {
  const loginData = useStorage("login_data", {}) as Ref<ILoginData | undefined>;
  const token = useStorage("access_token", "");
  const refresh_token = useStorage("refresh_token", "");
  const user = useStorage("user_data", {}) as Ref<IUserData | undefined>;
  const loading = ref(true);
  const isLoggedIn = computed(() => !!token.value);
  function setUser(newUser: IUserData) {
    user.value = newUser;
  }
  function getNextUserType(userType : IUserType) :IUserType{
    let index = userTypes.indexOf(userType);
    if (index === -1) {
      return "MAKTAB";
    }
    return userTypes[index + 1] ? userTypes[index + 1] : "MAKTAB";
  }
  function login(data: ILoginData) {
    loginData.value = data;
    token.value = data.accessToken;
    refresh_token.value = data.refreshToken;
    ApiService.setHeader();
  }
  function setToken(newToken: string) {
    token.value = newToken;
  }
  async function getProfile() {
    try {
      let res = await UserService.getProfile();
      setUser(res.data);
    } finally {
    }
  }
  async function logoutUser() {
    token.value = undefined;
    user.value = undefined;
    loginData.value = undefined;
  }

  return {
    user,
    token,
    isLoggedIn,
    loading,
    logoutUser,
    setUser,
    setToken,
    login,
    getProfile,
    // 
    getNextUserType
  };
});

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useUserSession as any, import.meta.hot)
  );
}
