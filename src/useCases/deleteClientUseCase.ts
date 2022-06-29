import { ClientsRepository } from "../repositories/clientsRepository";


export class DeleteClient{

    constructor(
        private clientsRepository: ClientsRepository
    ){}


    async execute (id){

        await this.clientsRepository.delete(id)

    }

}


