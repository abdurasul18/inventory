import ApiService, { createQuery } from "../api";

import { ResType, IParams } from "../types";

export interface IItemType {
  createdBy: string;
  createdDate: string;
  id: string;
  modifiedBy: string;
  modifiedDate: string;
  nameUz:string
}

export const ItemTypeService = {
  getList(data: IParams): ResType<IItemType> {
    return ApiService.get(`/item/type/all?${createQuery(data)}`);
  },
  create(data: any) {
    return ApiService.post("/item/type", data);
  },
  delete(id: any) {
    return ApiService.delete(`/item/type/${id}`);
  },
  update(id: any, data: any) {
    return ApiService.post(`/items/${id}`, data);
  },
};
