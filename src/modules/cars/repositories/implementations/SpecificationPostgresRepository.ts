import { Specification } from "../../entities/Specification";
import {
  ISpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationPostgresRepository implements ISpecificationRepository {
  private specifications: Specification[];

  // PADRAO SIGLETON

  create({ name, description }: ISpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      createdAt: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (spec) => spec.name === name
    );
    return specification;
  }

  list(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationPostgresRepository };
