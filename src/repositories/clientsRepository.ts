import { Clients } from "@prisma/client";



export interface ClientCreateData {
    id?: string;
    name: string;
    address:  string;
    phone: string;
}

export interface ClientsRepository {
    create: (data:ClientCreateData) => Promise<void>;
    list(): Promise<Clients[]>;
    delete: (id: string) => Promise<void>;
    update: (data:ClientCreateData) => Promise<void>;

}