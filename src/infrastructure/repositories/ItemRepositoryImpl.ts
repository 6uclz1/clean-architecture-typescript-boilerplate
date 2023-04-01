import { Item } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/ItemRepository";

export class ItemRepositoryImpl implements ItemRepository {
  async create(item: Item): Promise<Item> {
    // データベースにアイテムを保存する処理
    return item;
  }

  async update(item: Item): Promise<Item> {
    // データベースに保存されたアイテムを更新する処理
    return item;
  }

  async delete(id: string): Promise<void> {
    // データベースに保存されたアイテムを更新する処理
  }

  async findById(id: string): Promise<Item> {
    // データベースからIDに対応するアイテムを取得する処理
    // TODO: 仮置き
    const item: Item = new Item({id: '', name: '', description: '', price: 100});
    return item;
  }

  async findAll(): Promise<Item[]> {
    // データベースからすべてのアイテムを取得する処理
    return [];
  }

}