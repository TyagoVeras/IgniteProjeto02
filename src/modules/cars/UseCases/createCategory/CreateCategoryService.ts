import { IcategoryRepository } from "../../repositories/IcategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateCategoryService {
  constructor(private categoryRepository: IcategoryRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category alread exists");
    }
    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryService };
