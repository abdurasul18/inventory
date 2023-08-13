import ApiService from "./api";
import { AxiosResponse } from "axios";

export type SoatoType = "RESPUBLIKA" | "VILOYAT" | "TUMAN";
export interface ISoato {
  code: string;
  createdBy: string;
  createdDate: string;
  id: string;
  modifiedBy: string;
  modifiedDate: string;
  nameEng: string;
  nameRu: string;
  nameUz: string;
  type: SoatoType;
}

export const SoatoService = {
  listAll({
    soatoType,
    parentId,
  }: {
    soatoType?: string;
    parentId?: string;
  }): Promise<AxiosResponse<ISoato[]>> {
    return ApiService.get(
      `soato/all?soatoType=${soatoType || ""}&parentId=${parentId || ""}`
    );
  },
  getById(id: any): Promise<AxiosResponse<ISoato>> {
    return ApiService.get(`soato/id/${id}`);
  },
};
