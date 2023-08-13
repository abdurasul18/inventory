import ApiService, { createQuery } from "./api";
import { ResType, IParams } from "./types";

export interface IItem {
  id: number;
}
export const ItemService = {
  getList(params: IParams): ResType<IItem> {
    return ApiService.get(`/items?${createQuery(params)}`);
  },
  create(data: any) {
    return ApiService.post(`/items`, data);
  },
};
