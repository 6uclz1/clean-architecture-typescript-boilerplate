import { Request, Response } from 'express';
import { HelloUseCase } from '../../domain/hello/HelloUseCase';

export class HelloController {
  private readonly helloUseCase: HelloUseCase;

  constructor(helloUseCase: HelloUseCase) {
    this.helloUseCase = helloUseCase;
  }

  async sayHello(req: Request, res: Response) {
    const name = req.query.name as string;
    const message = await this.helloUseCase.getHello();
    res.send(message);
  }
}