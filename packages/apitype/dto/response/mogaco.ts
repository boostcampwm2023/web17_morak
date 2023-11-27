import { ResponseMemberDto } from "./member";

export interface ResponseMogacoDto {
  id: bigint;
  groupId: bigint;
  title: string;
  contents: string;
  date: Date;
  maxHumanCount: number;
  address: string;
  status: string;
}

export interface ResponseMogacoWithMemberDto {
  id: bigint;
  groupId: bigint;
  title: string;
  contents: string;
  date: Date;
  maxHumanCount: number;
  address: string;
  status: string;
}

export interface ResponseMogacoWithMemberDto extends ResponseMogacoDto {
  member: ResponseMemberDto;
}