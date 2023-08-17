import ApiService, { createQuery } from "./api";
import { ISchoolType } from "./school-type";
import { ISoato } from "./soato";
import { ResType } from "./types";

export interface ISchool {
  address: string;
  aktLastname: string;
  aktName: string;
  aktPhone: string;
  aktPositionId: string;
  aktPositionResponse: string;
  aktSecondName: string;
  capacity: string;
  createdBy: string;
  createdDate: string;
  email: string;
  govermental: 1 | 0;
  headLastname: string;
  headName: string;
  headPositionId: string;
  headPositionResponse: string;
  headSecondName: string;
  id: string;
  inn: string;
  latitude: string;
  longitude: string;
  maktabErpId: string;
  modifiedBy: string;
  modifiedDate: string;
  name: string;
  needPc: string;
  number: string;
  phone: string;
  schoolTypeId: string;
  schoolTypeResponse: ISchoolType;
  shortName: string;
  soatoId: string;
  soatoResponse: ISoato;
  studentCount: string;
  website: string;
}

export const SchoolService = {
  getById(id: any) {
    return ApiService.get(`/school/id/${id}`);
  },
  getList(data: { page: number; size: number; soatoId: string }): ResType<ISchool> {
    return ApiService.get(`/school/all?${createQuery(data)}`);
  },
  delete(id: any) {
    return ApiService.delete(`/school/${id}`);
  },
  update(id: any, data: object) {
    return ApiService.put(`/school/update?id=${id}`, data);
  }
};
