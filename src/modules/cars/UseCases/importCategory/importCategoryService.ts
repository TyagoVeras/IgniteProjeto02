import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";
import { IcategoryRepository } from "../../repositories/IcategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}
@injectable()
class ImportCateogryService {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: IcategoryRepository
  ) {}

  private loadCategories(
    file: Express.Multer.File
  ): Promise<IImportCategory[]> {
    // retornando uma promessa que aguarda todas as categorias serem carregadas para dentro do array categoris linha 33
    return new Promise((resolve, reject) => {
      if (file.mimetype !== "text/csv") throw new Error("File is not csv type");

      const categories: IImportCategory[] = [];

      // convertendo um arquvo normal em stream
      const stream = fs.createReadStream(file.path);

      const parseFile = csvParse();

      // cada pedaço lido está sendo enviado para a função parseFile
      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;

          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (e) => {
          reject(e);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;
      const existCategory = await this.categoryRepository.findByName(name);

      if (!existCategory) {
        await this.categoryRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCateogryService };
