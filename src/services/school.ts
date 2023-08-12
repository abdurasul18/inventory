import ApiService from "./api";
import { ISchoolType } from "./school-type";
import { ISoato } from "./soato";

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
};
