import ApiService, { createQuery } from "../api";

import { ResType, IParams } from "../types";

export interface IPosition {
  id: string;
  name: string;
}

export const PositionService = {
  getList(data: IParams): ResType<IPosition> {
    return ApiService.get(`/position/all}?${createQuery(data)}`);
  },
  create(data: any) {
    return ApiService.post("/position", data);
  },
  delete(id: any) {
    return ApiService.delete(`/position/id/${id}`);
  },
  update(id: any, data: any) {
    return ApiService.post(`/position/id/${id}`, data);
  },
};
