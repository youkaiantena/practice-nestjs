import { Injectable } from '@nestjs/common';
import { Item } from './item.model';
import { ItemStatus } from './item-status.enum';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item | undefined {
    return this.items.find((item) => item.id === id);
  }

  // voidにすべき
  create(item: Item): Item {
    this.items.push(item);

    return item;
  }

  // voidにすべき
  updateStatus(id: string): Item | undefined {
    const item = this.findById(id);
    if (item) {
      item.status = ItemStatus.SOLD_OUT;
    }

    return item;
  }
}
