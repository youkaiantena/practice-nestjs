import { Injectable } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  // voidにすべき
  create(item: Item): Item {
    this.items.push(item);

    return item;
  }
}
