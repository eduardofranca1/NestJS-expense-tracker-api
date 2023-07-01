import {
  Controller,
  Get,
  Body,
  Query,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private service: ItemService) {}

  @Post()
  public async create(@Body() item: CreateItemDto) {
    console.log(item);
    return await this.service.create(item);
  }

  @Get()
  public async findAll() {
    return await this.service.findAll();
  }

  @Put()
  public async update(@Body() id: string, @Body() item: UpdateItemDto) {
    return await this.service.update(id, item);
  }

  @Delete()
  public async delete(@Query() id: string) {
    return await this.service.delete(id);
  }
}
