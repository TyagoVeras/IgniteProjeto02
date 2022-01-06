import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppErros } from "../erros/AppErros";
import { UserPostgresRepository } from "../modules/accounts/repositories/implementations/UserPostgresRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<any> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppErros("Token não preenchido", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "asçldkfasçldfkj") as IPayload;

    const userrepository = new UserPostgresRepository();
    const user = await userrepository.findById(user_id);

    if (!user) {
      throw new AppErros("user does not exists", 401);
    }

    request.user = {
      id: user.id,
    };

    next();
  } catch {
    throw new AppErros("Token invalido", 401);
  }
}
