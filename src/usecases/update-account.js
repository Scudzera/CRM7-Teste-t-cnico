import { RepositoryAccount } from '../infrastructure/db/repository/repository-accounts.js';

export class UpdateAccount {
    async execute() {
        const response = await new RepositoryAccount().update();
        return response;
    }
}
