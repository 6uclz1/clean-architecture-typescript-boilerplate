import { Hello } from "./Hello";
import { HelloRepository } from "../../infrastructure/repositories/HelloRepository";

export class HelloUseCase {
  private readonly repository: HelloRepository;

  constructor(repository: HelloRepository) {
    this.repository = repository;
  }

  async getHello(): Promise<Hello> {
    await this.repository.save(new Hello('Hi'));
    return new Hello('Hi');
  }
}