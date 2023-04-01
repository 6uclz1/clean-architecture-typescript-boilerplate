import { Request, Response, NextFunction } from 'express';

/**
 * 認証に関するミドルウェアです。この関数は、リクエストが認証された場合に次のミドルウェアに処理を渡し、
 * 認証されていない場合には401エラーを返します。
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function authenticate(req: Request, res: Response, next: NextFunction): void {
  // 認証処理を実装する
  // 認証成功時は、次のミドルウェアに処理を渡す
  // 認証失敗時は、401エラーを返す
  // ...
  next();
}
