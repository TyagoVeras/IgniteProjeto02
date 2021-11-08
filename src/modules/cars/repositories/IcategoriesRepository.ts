import { Category } from "../entities/Category";

// DTO => PARA CRIAR A TRANSFERENCIA DOS DADOS ENTRE A ROTA E O REPOSITORY
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface IcategoryRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category | undefined>;
  list(): Promise<Category[]>;
}

export { IcategoryRepository, ICreateCategoryDTO };
