import express from 'express';
import { HelloController } from '../application/controllers/HelloController';
import { HelloUseCase } from '../domain/hello/HelloUseCase';
import { HelloRepository } from '../infrastructure/repositories/HelloRepository';
import { DatabaseConnection } from '../infrastructure/database/DatabaseConnection';

async function startServer() {
  const app = express();

  // Initialize database connection
  await DatabaseConnection.connect();

  // Initialize repositories and use cases
  const helloRepository = new HelloRepository();
  const helloUseCase = new HelloUseCase(helloRepository);

  // Initialize controllers
  const helloController = new HelloController(helloUseCase);

  // Define routes
  app.get('/hello', helloController.sayHello.bind(helloController));

  // Start server
  const server = app.listen(3000, () => {
    console.log('Server started on port 3000');
  });

  // Handle shutdown
  async function shutdown() {
    console.log('Shutting down server');

    await DatabaseConnection.disconnect();
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  }

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

startServer().catch((err) => {
  console.error(err);
  process.exit(1);
});
