import { getRepository, Repository } from 'typeorm';
import { HelloEntity } from '../database/HelloEntity';
import { Hello } from '../../domain/hello/Hello';
import { HelloRepository as IHelloRepository } from '../../infrastructure/repositories/HelloRepository';

export class HelloRepository implements IHelloRepository {
  private readonly repository: Repository<HelloEntity>;

  constructor() {
    this.repository = getRepository(HelloEntity);
  }

  async save(hello: Hello): Promise<void> {
    const entity = new HelloEntity();
    await this.repository.save(entity);
  }
}
