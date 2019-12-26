export interface IModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];

  set(value: T): void;

  all(): T;
}
