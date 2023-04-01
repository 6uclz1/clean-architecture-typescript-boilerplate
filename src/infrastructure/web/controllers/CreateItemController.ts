import { Router, Request, Response } from 'express';
import { CreateItemUseCase } from '../../../application/usecase/createItem';
import { ItemRepositoryImpl } from '../../repositories/ItemRepositoryImpl';

export class CreateItemController {
  private readonly router = Router();
  private readonly createItemUseCase = new CreateItemUseCase(new ItemRepositoryImpl());

  constructor() {
    this.router.post('/', this.create);
  }

  private create = async (req: Request, res: Response) => {
    const { name, description, price } = req.body;
    const item = await this.createItemUseCase.execute({ name, description, price });
    res.json(item);
  }

  getRouter() {
    return this.router;
  }
}
