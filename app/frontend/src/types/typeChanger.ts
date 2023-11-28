// Interface, Class 등을 Type으로 변환하는 타입
export type TypeWrapper<T> = {
  [P in keyof T]: [T[P]];
};
