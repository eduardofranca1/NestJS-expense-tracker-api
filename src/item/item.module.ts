import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { DatabaseModule } from '../database/database.module';
import { itemProviders } from './item.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...itemProviders, ItemService],
  controllers: [ItemController],
})
export class ItemModule {}
