import { Item } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/ItemRepository";

export interface GetItemUseCaseInput {
  id: string;
}

export interface GetItemUseCaseOutput {
  item: Item;
}

export class GetItemUseCase {
  constructor(private itemRepository: ItemRepository) {}

  async execute(input: GetItemUseCaseInput): Promise<GetItemUseCaseOutput> {
    const { id } = input;

    const item = await this.itemRepository.findById(id);

    return { item };
  }
}
