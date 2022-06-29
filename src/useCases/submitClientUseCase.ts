import { ClientsRepository } from "../repositories/clientsRepository";

interface SubmitClientUseCaseRequest {
    id?: string;
    name: string;
    phone:  string;
    address: string;
}

export class SubmitClientUseCase{

    constructor(
        private clientsRepository: ClientsRepository
    ){}


    async execute (request: SubmitClientUseCaseRequest){
        const {name, phone, address} = request;

        await this.clientsRepository.create({
            name,
            phone,
            address
        })
    }

}
