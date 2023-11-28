import { Bigint } from "../type";

export interface RequestCreateMogacoDto {
  groupId: Bigint;
  title: string;
  contents: string;
  date: string;
  maxHumanCount: number;
  address: string;
  status: string;
}

export interface RequestStatusDto {
  status: string;
}
