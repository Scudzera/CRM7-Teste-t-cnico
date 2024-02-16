import { RepositoryAccount } from "../infrastructure/db/repository/repository-accounts,js";

export class DeleteAccount {
    async execute() {
        const response = await new RepositoryAccount().DeleteAccount();
        return response;
    }
}
