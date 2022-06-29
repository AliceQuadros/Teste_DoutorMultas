import { ClientsRepository } from "../repositories/clientsRepository";

interface UpdateClientUseCaseRequest {
    id?: string;
    name: string;
    phone:  string;
    address: string;
}

export class UpdateClientUseCase{

    constructor(
        private clientsRepository: ClientsRepository
    ){}


    async execute (request: UpdateClientUseCaseRequest){
        const {id, name, phone, address} = request;

        await this.clientsRepository.update({
            id,
            name,
            address,
            phone
        })
    }

}
