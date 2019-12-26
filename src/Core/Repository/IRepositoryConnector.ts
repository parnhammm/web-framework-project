import { AxiosPromise } from "axios";

// export interface IRepositoryConnector<D, G, P extends Promise<G>> {
//   fetch(id: number): P;

//   save(data: D): P;
// }

export interface IRepositoryConnector<T> {
  fetch(id: number): AxiosPromise;

  save(data: T): AxiosPromise;
}
