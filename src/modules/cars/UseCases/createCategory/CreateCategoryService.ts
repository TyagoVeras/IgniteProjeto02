import { IcategoryRepository } from "../../repositories/IcategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateCategoryService {
  constructor(private categoryRepository: IcategoryRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category alread exists");
    }
    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryService };
