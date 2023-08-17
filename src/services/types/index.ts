import { AxiosResponse } from "axios";

export type ResType<T> = Promise<
  AxiosResponse<{
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    numberOfElements: number;
  }>
>;
export interface IName {
  id: number;
  name: string;
}

export interface IParams {
  page: number;
  size: number;
  search?: string;
  organizationType ?: string;
}
