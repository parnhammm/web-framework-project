import axios, { AxiosPromise, AxiosResponse } from "axios";
import { IRepositoryConnector } from "../Core/Repository/IRepositoryConnector";
import {IIdentifiable} from "../Core/Repository/IIdentifiable";

export class AxiosRepositoryConnector<T extends IIdentifiable>
  implements IRepositoryConnector<T> {
  
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
