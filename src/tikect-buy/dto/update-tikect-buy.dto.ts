import { PartialType } from '@nestjs/mapped-types';
import { CreateTikectBuyDto } from './create-tikect-buy.dto';

export class UpdateTikectBuyDto extends PartialType(CreateTikectBuyDto) {}
