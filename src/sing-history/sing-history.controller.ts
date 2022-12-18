import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SingHistoryService } from './sing-history.service';
import { CreateSingHistoryDto } from './dto/create-sing-history.dto';
import { UpdateSingHistoryDto } from './dto/update-sing-history.dto';

@Controller('sing-history')
export class SingHistoryController {
  constructor(private readonly singHistoryService: SingHistoryService) {}

  @Post()
  create(@Body() createSingHistoryDto: CreateSingHistoryDto) {
    return this.singHistoryService.create(createSingHistoryDto);
  }

  @Get()
  findAll() {
    return this.singHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.singHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSingHistoryDto: UpdateSingHistoryDto,
  ) {
    return this.singHistoryService.update(+id, updateSingHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.singHistoryService.remove(+id);
  }
}
