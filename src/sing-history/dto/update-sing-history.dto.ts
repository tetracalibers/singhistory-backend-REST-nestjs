import { PartialType } from '@nestjs/mapped-types';
import { CreateSingHistoryDto } from './create-sing-history.dto';

export class UpdateSingHistoryDto extends PartialType(CreateSingHistoryDto) {}
