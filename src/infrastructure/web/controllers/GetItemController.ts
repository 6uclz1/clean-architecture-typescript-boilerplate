import { Router, Request, Response } from 'express';
import { GetItemUseCase } from '../../../application/usecase/getItem';
import { ItemRepositoryImpl } from '../../repositories/ItemRepositoryImpl';

export class GetItemController {
  private readonly router = Router();
  private readonly getItemUseCase = new GetItemUseCase(new ItemRepositoryImpl());

  constructor() {
    this.router.post('/', this.get);
  }

  private get = async (req: Request, res: Response) => {
    const { id } = req.body;
    const item = await this.getItemUseCase.execute({ id });
    res.json(item);
  }

  getRouter() {
    return this.router;
  }
}
