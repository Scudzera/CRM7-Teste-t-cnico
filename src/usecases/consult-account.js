import { RepositoryAccount } from '../infrastructure/db/repository/repository-accounts.js';

export class ConsultAccount {
    async execute() {
        const response = await new RepositoryAccount().findOne();
        return response;
    }
}
