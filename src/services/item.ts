import ApiService, { createQuery } from "./api";
import { IItemType } from "./reference/item-type";
import { IProject } from "./reference/project";
import { ISchool } from "./school";
import { ResType, IParams } from "./types";
import { AxiosResponse } from "axios";
export interface IItem {
  count: 1;
  createdBy: string;
  createdDate: string;
  id: string;
  images: string[];
  invertNumber: string;
  itemTypeId: string;
  itemTypeResponse: IItemType;
  model: 0;
  modifiedBy: string;
  modifiedDate: string;
  nameEng: string;
  nameRu: string;
  nameUz: string;
  pcRoomId: string;
  pcRoomResponse: string;
  projectId: string;
  projectResponse: IProject;
  schoolId: string;
  schoolResponse: ISchool;
  serialNumber: string;
  state: string;
}
export const ItemService = {
  getList(data: {
    page: number;
    size: number;
    organizationId?: string;
  }): ResType<IItem> {
    return ApiService.get(`/items/all?${createQuery(data)}`);
  },
  create(data: any) {
    return ApiService.post(`/items`, data);
  },
  update(id: any, data: any) {
    return ApiService.put(`/items/${id}`, data);
  },
  delete(id: any) {
    return ApiService.delete(`/items/${id}`);
  },
  getById(id: any): Promise<AxiosResponse<IItem>> {
    return ApiService.get(`/items/id/${id}`);
  },
};
