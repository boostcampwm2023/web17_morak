export type TypeFromInterface<T> = {
  [P in keyof T]: T[P];
};
