import { RepositoryAccount } from '../infrastructure/db/repository/repository-accounts.js';

export class CreateAccount {
    async execute() {
        const response = await new RepositoryAccount().create();
        return response;
    }
}
