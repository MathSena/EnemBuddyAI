import { Request, Response, NextFunction } from 'express'

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.message)
  res
    .status(500)
    .json({ message: 'Erro interno do servidor', details: err.message })
}

export default errorHandler
