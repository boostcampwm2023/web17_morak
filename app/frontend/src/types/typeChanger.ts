// bigint와 Date를 string으로 변환하는 타입
export type JsonTypeChanger<T> = {
  [P in keyof T]: T[P] extends bigint | Date
    ? string
    : T[P] extends Array<infer U>
    ? JsonTypeChanger<U>[]
    : T[P] extends object
    ? JsonTypeChanger<T[P]>
    : T[P];
};

// Interface, Class 등을 Type으로 변환하는 타입
export type TypeWrapper<T> = {
  [P in keyof T]: [T[P]];
};
