import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { SingHistoryService } from './sing-history.service';
import { CreateSingHistoryDto } from './dto/create-sing-history.dto';
import { UpdateSingHistoryDto } from './dto/update-sing-history.dto';
import { AuthGuard } from '@nestjs/passport';
import { PasswordOmitUser } from 'src/users/types/user.type';

@Controller('sing-history')
@UseGuards(AuthGuard('jwt')) // passport-jwt戦略を付与する
export class SingHistoryController {
  constructor(private readonly singHistoryService: SingHistoryService) {}

  @Post()
  create(
    @Body() createSingHistoryDto: CreateSingHistoryDto,
    @Request() req: { user: PasswordOmitUser },
  ) {
    return this.singHistoryService.create(req.user.id, createSingHistoryDto);
  }

  @Get()
  findAll(@Request() req: { user: PasswordOmitUser }) {
    return this.singHistoryService.findAll(req.user.id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.singHistoryService.findOne(+id);
  // }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSingHistoryDto: UpdateSingHistoryDto,
    @Request() req: { user: PasswordOmitUser },
  ) {
    return this.singHistoryService.update(
      +id,
      req.user.id,
      updateSingHistoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: { user: PasswordOmitUser }) {
    return this.singHistoryService.remove(+id, req.user.id);
  }
}
