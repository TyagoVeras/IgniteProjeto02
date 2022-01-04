import { Router } from "express";
import { categoriesRouter } from "./categories.routes";
import { authenticateRouter } from "./session.routes";
import { specificationRouter } from "./specification.routes";
import { userRouter } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specifications", specificationRouter);
router.use("/users", userRouter);
router.use(authenticateRouter);

export { router };
