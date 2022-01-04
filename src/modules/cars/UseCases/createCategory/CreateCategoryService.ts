import { inject, injectable } from "tsyringe";
import { AppErros } from "../../../../erros/AppErros";
import { IcategoryRepository } from "../../repositories/IcategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryService {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: IcategoryRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppErros("Category alread exists", 400);
    }
    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryService };
