import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest {
  user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const listUsers = this.listAllUsersUseCase.execute({
        user_id,
      } as IRequest);

      return response.status(200).json(listUsers);
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }
  }
}

export { ListAllUsersController };
