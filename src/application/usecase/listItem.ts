import { Item } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/ItemRepository";

export interface ListItemsUseCaseOutput {
  items: Item[];
}

export class ListItemsUseCase {
  constructor(private itemRepository: ItemRepository) {}

  async execute(): Promise<ListItemsUseCaseOutput> {
    const items = await this.itemRepository.getAll();

    return { items };
  }
}
