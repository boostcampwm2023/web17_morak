// export * from "";
export type User = {
  username: string;
  profileSrc: string;
};

export type Talk = {
  id: string;
  user: User;
  datetime: Date;
  content: string;
};
