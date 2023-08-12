import ApiService from "./api";
import { AxiosResponse } from "axios";
import { ISoato } from "./soato";
export type IUserType = "RESPUBLIKA" | "VILOYAT" | "TUMAN" | "MAKTAB";
export interface IUserData {
  avatar: string;
  email: string;
  firstname: string;
  id: string;
  lastname: string;
  schoolId: string;
  schoolResponse: string;
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
};
