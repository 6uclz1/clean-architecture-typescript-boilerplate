import { Item } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/ItemRepository";

export interface UpdateItemUseCaseInput {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface UpdateItemUseCaseOutput {
  item: Item;
}

export class UpdateItemUseCase {
  constructor(private itemRepository: ItemRepository) {}

  async execute(input: UpdateItemUseCaseInput): Promise<UpdateItemUseCaseOutput> {
    const { id, name, description, price } = input;

    const item = await this.itemRepository.update({ id, name, description, price });

    return { item };
  }
}