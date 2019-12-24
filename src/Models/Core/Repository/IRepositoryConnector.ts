import { UserDefinition } from "../../User";

export interface IRepositoryConnector<D, G, P extends Promise<G>> {
  rootUrl: string;

  fetch(id: number): P;

  save(data: D): P;
}
