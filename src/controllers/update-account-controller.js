import { UpdateAccount } from "../usecases/update-account.js";

export class UpdateAccountController {
    async handle(req, res) {
        const resposne = await new UpdateAccount().execute();
        return res.status(200).send(resposne);
    }
}