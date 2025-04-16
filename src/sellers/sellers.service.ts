import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SellersService {
    constructor(private prisma: PrismaService) {}
    async findOne(Idvendedor: number): Promise<any> {
        try {
          const user = await this.prisma.vendedores.findUnique({
            where:{
              Idvendedor:Idvendedor
            }
            
          })
          return user;
        } catch (error) {
          
        }
      }
}
