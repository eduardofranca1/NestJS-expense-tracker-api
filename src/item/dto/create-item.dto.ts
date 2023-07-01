import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  @IsNumber()
  value: number;
}
