import ApiService from "./api";
import { AxiosResponse } from "axios";
import { ISoato } from "./soato";
import { ISchool } from "./school";
export type IUserType = "RESPUBLIKA" | "VILOYAT" | "TUMAN" | "MAKTAB";

export interface IUserData extends ISchool {
  avatar: string;
  email: string;
  firstname: string;
  id: string;
  lastname: string;
  schoolId: string;
  soatoId: string;
  soatoResponse: ISoato;
  username: string;
  userType: IUserType;
}

export const UserService = {
  getProfile(): Promise<AxiosResponse<IUserData>> {
    return ApiService.get(`user/user/profile`);
  },
  updatePassword(data: object) {
    return ApiService.post("/user/update-password", data);
  },
  getById(id: string) {
    return ApiService.get(`/user/${id}`);
  },
  update(id: any, data: object) {
    return ApiService.put(`/user/update?id=${id}`, data);
  }
};
