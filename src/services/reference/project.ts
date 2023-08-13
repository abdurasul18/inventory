import ApiService, { createQuery } from "../api";

import { ResType, IParams } from "../types";

export interface IProject {
  createdBy: string;
  createdDate: string;
  id: string;
  modifiedBy: string;
  modifiedDate: string;
  name: string;
  shortName: string;
  year: string;
}

export const ProjectService = {
  getList(data: IParams): ResType<IProject> {
    return ApiService.get(`/project/all?${createQuery(data)}`);
  },
  create(data: any) {
    return ApiService.post("/project", data);
  },
  delete(id: any) {
    return ApiService.delete(`/project/${id}`);
  },
  update(id: any, data: any) {
    return ApiService.post(`/project/${id}`, data);
  },
};
