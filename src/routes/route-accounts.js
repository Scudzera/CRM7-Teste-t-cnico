import express from "express";
import { ConsultAllAccountsController } from "../controllers/consult-all-accounts-controller.js";
import { CreateAccountController } from "../controllers/create-account-controller.js";
import { ConsultAccountController } from "../controllers/consult-account-controller.js";
import { UpdateAccountController } from "../controllers/update-account-controller.js";

const router = express.Router();

router.get("/accounts", new ConsultAllAccountsController().handle);

router.post("/accounts", new CreateAccountController().handle);

router.get("/accounts", new ConsultAccountController().handle);

router.put("/accounts", new UpdateAccountController().handle);

router.delete("/accounts", new ConsultAccountController().handle);

export default router;
