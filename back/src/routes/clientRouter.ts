import { Router } from "express";
import * as clientController from "../controllers/clientController";

const clientRouter = Router();

clientRouter.post("/client", clientController.createClient);
clientRouter.get("/clients", clientController.getClients);
clientRouter.put("/client/:id", clientController.updateClient);
clientRouter.delete("/client/:id", clientController.deleteClient);

export { clientRouter };
