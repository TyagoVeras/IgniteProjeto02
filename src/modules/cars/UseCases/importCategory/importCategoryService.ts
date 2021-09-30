import csvParse from "csv-parse";
import fs from "fs";

class ImportCateogryService {
  execute(file: Express.Multer.File) {
    if (file.mimetype !== "text/csv") throw new Error("File is not csv type");

    // convertendo um arquvo normal em stream
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse({});

    // cada pedaço lido está sendo enviado para a função parseFile
    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line[3]);
    });
  }
}

export { ImportCateogryService };
