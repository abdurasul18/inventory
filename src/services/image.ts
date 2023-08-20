import APiService from "./api";
import { AxiosResponse } from "axios";
export const ImageService = {
  create(imgBase64: string): Promise<AxiosResponse<{ id: string }>> {
    return APiService.post("/image", { imgBase64 });
  },
  getById(id: string): Promise<AxiosResponse<{ imgBase64: string }>> {
    return APiService.get(`/image/id/${id}`);
  },
};
