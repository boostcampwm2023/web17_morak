import { ResponseMemberDto } from "./member";
import { ResponseParticipant } from "./participant";
import { Bigint } from "../type";
import { ResponseGroupsDto } from "..";

export interface ResponseMogacoDto {
  id: Bigint;
  groupId: Bigint;
  title: string;
  contents: string;
  date: Date;
  maxHumanCount: number;
  address: string;
  latitude: number;
  longitude: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  group: ResponseGroupsDto;
}

export interface ResponseMogacoWithMemberDto {
  id: Bigint;
  groupId: Bigint;
  groupTitle: string;
  title: string;
  contents: string;
  date: Date;
  maxHumanCount: number;
  address: string;
  latitude: number;
  longitude: number;
  status: string;
  member: ResponseMemberDto;
  participants: ResponseParticipant[];
}
