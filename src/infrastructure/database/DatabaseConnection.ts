import { createConnection, Connection } from 'typeorm';

export class DatabaseConnection {
  private static connection: Connection | null = null;

  static async connect(): Promise<void> {
    if (this.connection !== null) {
      return;
    }

    this.connection = await createConnection();
  }

  static async disconnect(): Promise<void> {
    if (this.connection === null) {
      return;
    }

    await this.connection.close();
    this.connection = null;
  }

  static getConnection(): Connection {
    if (this.connection === null) {
      throw new Error('Database connection has not been established.');
    }

    return this.connection;
  }
}
