import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import {
  ISpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationPostgresRepository implements ISpecificationRepository {
  private specifications: Repository<Specification>;

  // PADRAO SIGLETON
  constructor() {
    this.specifications = getRepository(Specification);
  }

  async create({ name, description }: ISpecificationDTO): Promise<void> {
    const specification = this.specifications.create({
      name,
      description,
    });

    await this.specifications.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.specifications.findOne({
      where: { name },
    });
    return specification;
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.specifications.find();
    return specifications;
  }
}

export { SpecificationPostgresRepository };
