import { Item } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/ItemRepository";

export interface CreateItemUseCaseInput {
  name: string;
  description: string;
  price: number;
}

export interface CreateItemUseCaseOutput {
  item: Item;
}

export class CreateItemUseCase {
  constructor(private itemRepository: ItemRepository) {}

  async execute(input: CreateItemUseCaseInput): Promise<CreateItemUseCaseOutput> {
    const props = input;

    // TODO: `new ID()`, `getId` などで新規IDを作成する必要あり
    const item = await this.itemRepository.create(new Item({ id: '1', ...props }));

    return { item };
  }
}
