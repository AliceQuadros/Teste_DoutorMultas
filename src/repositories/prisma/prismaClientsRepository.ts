import { Clients } from "@prisma/client";
import { prisma } from "../../prisma";
import { ClientCreateData, ClientsRepository } from "../clientsRepository";

export class PrismaClientsRepository implements ClientsRepository {
   


    async create({name,phone,address }: ClientCreateData) {
        await  prisma.clients.create({
            data:{
                name,
                phone,
                address,
            }
        })
    }

    async list(): Promise<Clients[]> {
    
        return await prisma.clients.findMany({      
            orderBy:{
                name:'asc'
            }
   
        })

    }
    
    async delete(id:string){

      await prisma.clients.delete({
            where: {
              id: id
            }
        })

    }

    async update({id,name,phone,address }: ClientCreateData){

        await prisma.clients.update({
            where:{
                id: id
            },
            data:{
                name: name,
                phone: phone,
                address: address
            }
        })
    }
}
