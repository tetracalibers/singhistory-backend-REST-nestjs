import { Transform } from 'class-transformer';
import {
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateSingHistoryDto {
  @IsString()
  artistId: string;

  @IsString()
  artistName: string;

  @IsString()
  songName: string;

  @IsString()
  @IsOptional()
  jacketUrl?: string;

  @IsDate()
  @IsOptional()
  singDate?: Date = new Date();

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsOptional()
  @Min(-6)
  @Max(6)
  singKey?: number = 0;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(5)
  rating?: number = 0;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(100)
  score?: number | null = null;

  @IsString()
  @IsOptional()
  memo?: string = '';
}
