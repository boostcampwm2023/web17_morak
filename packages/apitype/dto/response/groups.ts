import { Bigint } from "../type";

export interface ResponseGroupsDto {
  id: Bigint;
  title: string;
  groupOwnerId: Bigint;
  groupTypeId: number;
}

export interface ResponseGroupsWithMemberCountDto {
  id: Bigint;
  title: string;
  memberCount: number;
}
