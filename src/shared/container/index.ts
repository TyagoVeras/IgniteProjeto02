import { container } from "tsyringe";

import { IcategoryRepository } from "../../modules/cars/repositories/IcategoriesRepository";
import { CategoriesPostgresRepository } from "../../modules/cars/repositories/implementations/CategoriesPostgresRepository";
import { SpecificationPostgresRepository } from "../../modules/cars/repositories/implementations/SpecificationPostgresRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";

container.registerSingleton<IcategoryRepository>(
  "CategoriesRepository",
  CategoriesPostgresRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationPostgresRepository
);
