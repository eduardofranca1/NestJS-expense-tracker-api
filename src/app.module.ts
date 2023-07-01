import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, ItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
