import { ClientsRepository } from "../repositories/clientsRepository";


export class ShowClients{

    constructor(
        private clientsRepository: ClientsRepository
    ){}


    async execute (){
       const resultList =  await this.clientsRepository.list()
        return resultList ;
    }

}


