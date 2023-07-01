import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './item.entity';

@Injectable()
export class ItemService {
  constructor(
    @Inject('ITEM_REPOSITORY')
    private repository: Repository<Item>,
  ) {}

  public async create(item: CreateItemDto) {
    const newItem = this.repository.create(item);
    return await this.repository.save(newItem);
  }

  public async findAll() {
    return await this.repository.find();
  }

  public async update(id: string, item: UpdateItemDto) {
    return await this.repository.update({ id: id }, item);
  }

  public async delete(id: string) {
    return await this.repository.delete(id);
  }
}
