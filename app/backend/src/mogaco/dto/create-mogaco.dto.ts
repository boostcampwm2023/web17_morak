import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateMogacoDto {
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

  status: string;
}
