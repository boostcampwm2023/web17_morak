import { Bigint } from "../type";

export interface ResponseGroupsDto {
  id: Bigint;
  title: string;
}

export interface ResponseGroupsWithMemberCountDto {
  id: Bigint;
  title: string;
  memberCount: number;
}