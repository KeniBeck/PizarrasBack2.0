import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TikectBuyService } from './tikect-buy.service';
import { CreateTikectBuyDto } from './dto/create-tikect-buy.dto';
import { UpdateTikectBuyDto } from './dto/update-tikect-buy.dto';

@Controller('tikect-buy')
export class TikectBuyController {
  constructor(private readonly tikectBuyService: TikectBuyService) {}

  @Post()
  create(@Body() createTikectBuyDto: CreateTikectBuyDto) {
    return this.tikectBuyService.create(createTikectBuyDto);
  }

  @Get()
  findAll() {
    return this.tikectBuyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tikectBuyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTikectBuyDto: UpdateTikectBuyDto) {
    return this.tikectBuyService.update(+id, updateTikectBuyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tikectBuyService.remove(+id);
  }
}
