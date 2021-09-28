import { Category } from "../../models/Category";
import {
  IcategoryRepository,
  ICreateCategoryDTO,
} from "../IcategoriesRepository";

class CategoriesRepository implements IcategoryRepository {
  private categories: Category[];

  // PADRAO SIGLETON

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
      return CategoriesRepository.INSTANCE;
    }
    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      createdAt: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const alradyExistCategory = this.categories.find(
      (cat) => cat.name === name
    );
    return alradyExistCategory;
  }
}

export { CategoriesRepository };
