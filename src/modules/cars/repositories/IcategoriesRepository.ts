import { Category } from "../models/Category";

// DTO => PARA CRIAR A TRANSFERENCIA DOS DADOS ENTRE A ROTA E O REPOSITORY
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface IcategoryRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  findByName(name: string): Category;
  list(): Category[];
}

export { IcategoryRepository, ICreateCategoryDTO };
