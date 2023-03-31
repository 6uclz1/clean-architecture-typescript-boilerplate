import { HelloController } from './controllers/HelloController';
import { HelloUseCase } from '../domain/hello/HelloUseCase';
import { HelloRepository } from '../infrastructure/repositories/HelloRepository';
import { DatabaseConnection } from '../infrastructure/database/DatabaseConnection';

export class HelloApplication {
  private readonly controller: HelloController;

  constructor() {
    const connection = DatabaseConnection.connect();
    const repository = new HelloRepository();
    const useCase = new HelloUseCase(repository);
    this.controller = new HelloController(useCase);
  }

  async start(): Promise<void> {
    await DatabaseConnection.connect();
    this.controller.start();
  }

  async stop(): Promise<void> {
    await DatabaseConnection.disconnect();
  }
}
