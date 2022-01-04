import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateuserDTO } from "../../dtos/ICreateUserDTO";
import { AppErros } from "../../../../erros/AppErros";

@injectable()
class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateuserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new AppErros("User already exists", 400);
    }
    const hashedPassword = await hash(password, 8);
    await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      driver_license,
    });
  }
}

export { CreateUserService };
