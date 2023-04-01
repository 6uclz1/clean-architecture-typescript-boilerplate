import { Item } from "../entities/Item";

export interface ItemRepository {
  create(item: Item): Promise<Item>;
  update(item: Item): Promise<Item>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Item>;
  findAll(): Promise<Item[]>;
}