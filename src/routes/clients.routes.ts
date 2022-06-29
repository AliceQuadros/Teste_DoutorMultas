import { Router } from "express";
import { body, validationResult } from "express-validator";
import { PrismaClientsRepository } from "../repositories/prisma/prismaClientsRepository";
import { DeleteClient } from "../useCases/deleteClientUseCase";
import { ShowClients } from "../useCases/showClientUseCase";
import { SubmitClientUseCase } from "../useCases/submitClientUseCase";
import { UpdateClientUseCase } from "../useCases/updateClientUseCase";

const clientsRoutes = Router();

const prismaClientsRepository = new PrismaClientsRepository();

clientsRoutes.post('/clients', [
    body('name').notEmpty().withMessage("O campo nome é obrigatório"),
    body('phone').notEmpty().withMessage("O campo telefone é obrigatório"),
    body('address').notEmpty().withMessage("O campo endereço é obrigatório")
],
async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const{ name, phone, address} = req.body;

    

    const submitClientUseCase = new SubmitClientUseCase(prismaClientsRepository);


    await submitClientUseCase.execute({
        name,
        phone,
        address,
     });

    return res.status(201).send();

});



clientsRoutes.get("/clients", async (req, res) => {

    const showClients = new ShowClients(prismaClientsRepository);
    
    const result = await showClients.execute()

    
    return res.json(result);

});

clientsRoutes.delete("/clients",
body('id').notEmpty().withMessage("O campo ID é obrigatório"),
async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const{ id } = req.body;

    const deleteClient = new DeleteClient(prismaClientsRepository);

    await deleteClient.execute(id)

    return res.status(200).send();


});



clientsRoutes.put("/clients",
body('id').notEmpty().withMessage("O campo ID é obrigatório"),
async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const{ id, name, phone, address} = req.body;

    const updateClientUseCase = new UpdateClientUseCase(prismaClientsRepository);

    await updateClientUseCase.execute({id, name, phone, address})

    return res.status(200).send();


});



export {clientsRoutes};