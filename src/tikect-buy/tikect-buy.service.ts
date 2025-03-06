import { Injectable } from '@nestjs/common';
import { CreateTikectBuyDto } from './dto/create-tikect-buy.dto';
import { UpdateTikectBuyDto } from './dto/update-tikect-buy.dto';

@Injectable()
export class TikectBuyService {
  create(createTikectBuyDto: CreateTikectBuyDto) {
    return 'This action adds a new tikectBuy';
  }

  findAll() {
    return `This action returns all tikectBuy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tikectBuy`;
  }

  update(id: number, updateTikectBuyDto: UpdateTikectBuyDto) {
    return `This action updates a #${id} tikectBuy`;
  }

  remove(id: number) {
    return `This action removes a #${id} tikectBuy`;
  }
}
