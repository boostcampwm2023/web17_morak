import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { MogacoStatus } from './mogaco-status.enum';

export class CreateMogacoDto {
  @IsNotEmpty()
  @IsInt()
  group_id: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  contents: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  max_human_count: number;

  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsEnum(MogacoStatus, { message: 'Invalid status' })
  status?: string;
}
