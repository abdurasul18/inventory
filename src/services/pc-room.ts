import ApiService, { createQuery } from "./api";
import { ResType, IParams } from "./types";
import { AxiosResponse } from "axios";
import { ISchool } from "./school";
export interface IPCRoom extends ISchool {}
export const PCService = {
  getList(data: {
    page: number;
    size: number;
    organizationId?: string;
  }): ResType<IPCRoom> {
    return ApiService.get(`/pc/room/all?${createQuery(data)}`);
  },
  create(data: any) {
    return ApiService.post(`/pc/room`, data);
  },
  update(id: any, data: any) {
    return ApiService.put(`/pc/room/${id}`, data);
  },
  delete(id: any) {
    return ApiService.delete(`/pc/room/${id}`);
  },
  getById(id: any): Promise<AxiosResponse<IPCRoom>> {
    return ApiService.get(`/pc/room/id/${id}`);
  },
};
