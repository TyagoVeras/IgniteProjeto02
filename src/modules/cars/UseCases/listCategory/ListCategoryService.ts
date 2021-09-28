import { Category } from "../../models/Category";
import { IcategoryRepository } from "../../repositories/IcategoriesRepository";

class ListCategoryService {
  constructor(private categoryRepository: IcategoryRepository) {}

  execute(): Category[] {
    const categories = this.categoryRepository.list();
    return categories;
  }
}
export { ListCategoryService };
