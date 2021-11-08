import { Specification } from "../../entities/Specification";
import {
  ISpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  // PADRAO SIGLETON

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
      return SpecificationRepository.INSTANCE;
    }
    return SpecificationRepository.INSTANCE;
  }

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

export { SpecificationRepository };
