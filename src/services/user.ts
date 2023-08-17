import ApiService, { createQuery } from "./api";
import { IParams } from "./types";
import { AxiosResponse } from "axios";
import { ISoato } from "./soato";
import { ISchool } from "./school";
export type IUserType = "RESPUBLIKA" | "VILOYAT" | "TUMAN" | "MAKTAB";

export interface IUserData {
  avatar: string;
  fio: string;
  id: string;
  organizationId: string;
  organizationResponse: ISchool;
  username: string;
}

export const UserService = {
  getProfile(): Promise<AxiosResponse<IUserData>> {
    return ApiService.get(`user/user/profile`);
  },
  updatePassword(data: object) {
    return ApiService.post("/user/password/reset", data);
  },
  getById(id: string) {
    return ApiService.get(`/user/${id}`);
  },
  update(id: any, data: object) {
    return ApiService.put(`/user/update?id=${id}`, data);
  },
  getList(data: IParams) {
    return ApiService.get(`/user/user/filter?${createQuery(data)}`);
  },
  passResetAdmin(data:any){
    return ApiService.post(`/user/password/reset/admin`, data);
  },
  register(data: any) {
    return ApiService.post(`/user/register`, data);
  }
};
