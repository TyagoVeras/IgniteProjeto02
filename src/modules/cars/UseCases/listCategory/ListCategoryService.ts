import { injectable, inject } from "tsyringe";
import { Category } from "../../entities/Category";
import { IcategoryRepository } from "../../repositories/IcategoriesRepository";

@injectable()
class ListCategoryService {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: IcategoryRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();
    return categories;
  }
}
export { ListCategoryService };
