import multer from "multer";
import { resolve } from "path";
import crypto from "crypto";

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", "tmp", folder),
        filename: (req, file, callback) => {
          const fileHas = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHas}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};
