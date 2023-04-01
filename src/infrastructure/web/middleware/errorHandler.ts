import { Request, Response, NextFunction } from 'express';

/**
 * エラーハンドリングに関するミドルウェアです。
 * この関数は、リクエスト処理中にエラーが発生した場合に呼び出されます。
 * この関数では、エラーのスタックトレースをログに出力し、
 * 500エラーを返します。具体的なエラーの処理方法は、アプリケーションに合わせて実装します。
 * 
 * @param err 
 * @param req 
 * @param res 
 * @param next 
 */
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
}