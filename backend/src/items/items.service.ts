import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateItemDto } from './dto/create-item';
import { ItemStatus } from './item-status.enum';
import { Item } from './items.model';

@Injectable()
export class ItemsService {
  private todoItems: Item[] = [];

  findAll(): Item[] {
    return this.todoItems;
  }

  findById(id: string): Item {
    return this.todoItems.find((item) => item.id === id);
  }

  create(createItem: CreateItemDto): Item {
    const item = {
      id: uuid(),
      ...createItem,
      status: ItemStatus.TODO,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.todoItems.push(item);
    return item;
  }

  updateToDoStatus(id: string, status: ItemStatus): Item {
    const targetItem = this.findById(id);
    targetItem.status = status;
    return targetItem;
  }

  delete(id: string): string {
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
    return `item_id: ${id} delete success`;
  }
}
