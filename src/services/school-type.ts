import ApiService from "./api";
import { ResType } from "./types";
export interface ISchoolType {
  createdBy: string;
  createdDate: string;
  modifiedDate: string;
  modifiedBy: string;
  id: string;
  name: string;
}
export const SchoolTypeService = {
  getList():ResType<ISchoolType> {
    return ApiService.get("/school-type/all");
  },
};
