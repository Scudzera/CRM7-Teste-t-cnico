import { DeleteAccount } from "../usecases/delete-account.js";

export class DeleteAccountControlelr {
    async handle(req, res) {
        const response = await new DeleteAccount().execute();
        return res.status(200).send(response);
    }
}