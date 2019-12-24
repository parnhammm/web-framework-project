import axios, { AxiosPromise, AxiosResponse } from "axios";
import { IRepositoryConnector } from "./Core/Repository/IRepositoryConnector";

export interface Identifiable {
  id?: number;
}

export class AxiosRepositoryConnector<T extends Identifiable>
  implements IRepositoryConnector<T, AxiosResponse, AxiosPromise> {
  
  constructor(public rootUrl: string) { }

  public fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  public save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
