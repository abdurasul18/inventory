import ApiService from "./api";
import { IParams, ResType } from "./types";
import {ISchool } from "./school"
import { AxiosResponse } from "axios";
export type IOrganizationType =  "RESPUBLIKA" | "VILOYAT" | "TUMAN" | "MAKTAB"
export const OrganizationService = {
  getOrganizations({
    page,
    size,
    organizationType,
    soatoId,
  }: {
    page: number;
    size: number;
    organizationType?: string;
    soatoId?: string;
  }) : ResType<ISchool> {
    return ApiService.get(
      "/organization/all?page=" +
        page +
        "&size=" +
        size +
        "&organizationType=" +
        organizationType +
        "&soatoId=" +
        soatoId
    );
  },
  getById(id:any) : Promise<AxiosResponse<ISchool>> {
    return  ApiService.get("/organization/id/"+id);
  },
  update(id:any, data:any) : Promise<AxiosResponse<ISchool>> {
    let notNullData = {} as any;
    for (const key in data) {
      if (data[key] !== null) {
        notNullData[key] = data[key];
      }
    }
    return  ApiService.put("/organization/"+id, notNullData);
  },
};
