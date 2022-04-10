import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const existsUser = this.usersRepository.findById(user_id);

    if (!existsUser) {
      throw new Error("User does not exists");
    }

    const userTurned = this.usersRepository.turnAdmin(existsUser);

    return userTurned;
  }
}

export { TurnUserAdminUseCase };
