import axios from "axios";
import { useToast } from "vue-toast-notification";
import { useUserSession } from "../stores/userSession";
import { useStorage } from "@vueuse/core";
import router from "../router";
const $toast = useToast({
  position: "top-right",
});

export function createQuery(data: any) {
  if (!data || typeof data != "object") return "";
  let query = "";
  for (const key in data) {
    query += `&${key}=${data[key]}`;
  }
  if (query.startsWith("&")) query = query.substring(1);
  return query;
}
const ApiService = {
  _401interceptor: null,
  i: 0,
  init() {
    axios.defaults.baseURL = "https://api-inventory.olympics.uz/api/v1/";
  },
  getFile(resource: string) {
    return axios.get(resource, {
      responseType: "blob",
    });
  },
  setHeader() {
    const userSession = useUserSession();
    axios.defaults.headers.common = {
      Authorization: `Bearer ${userSession.token}`,
    };
  },
  formData(resource: string, data: FormData) {
    return axios.post(resource, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  removeHeader() {
    axios.defaults.headers.common = {};
  },
  get(resource: string) {
    return axios.get(resource);
  },
  post(resource: string, data: object) {
    return axios.post(resource, data);
  },
  customPost(resource: string, data: object) {
    return axios.post(resource, data, {
      headers: { "Content-Type": "application/xml" },
    });
  },
  put(resource: string, data: object) {
    return axios.put(resource, data);
  },
  delete(resource: string) {
    return axios.delete(resource);
  },

  customRequest(data: object) {
    return axios(data);
  },
  mount401Interceptor() {
    this._401interceptor = axios.interceptors.response.use(
      (response) => {
        if (response.data?.result?.code == 400) {
          // $toast.error(response.data?.result?.message);
          throw new Error(response.data?.result);
        }
        return response;
      },
      async (error) => {
        this.i++;

        if (this.i == 1) {
          // || error.response.status === 0) && !window.location.pathname.startsWith('/auth')
          if (
            error.response.status === 401 &&
            !window.location.pathname.startsWith("/auth")
          ) {
            this.removeHeader();
            const userSession = useUserSession();
            userSession.logoutUser();
            await router.push(
              `/auth/login?redirect=${window.location.pathname}`
            );
            // window.location.reload();
            throw error;
          } else {
            if (
              error.response.statusCode != 200 &&
              error.response.statusCode != 417
            ) {
              $toast.clear();
              $toast.error(
                error.response?.data?.detail ||
                  error.response?.data?.message ||
                  error.response?.data?.error ||
                  error.response.data ||
                  "Tizimda xatolik!"
              );
              throw error;
            }
          }
        }
        this.i = 0;
        // If error was not 401 just reject as is
        throw error;
      }
    ) as any;
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._401interceptor as any);
  },
};

export default ApiService;
