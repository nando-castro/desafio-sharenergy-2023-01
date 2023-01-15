import { Router } from "express";
import * as clientController from "../controllers/clientController";
import validateUser from "../middlewares/validateUser";

const clientRouter = Router();

clientRouter.use(validateUser);
clientRouter.post("/client", clientController.createClient);
clientRouter.get("/clients", clientController.getClients);
clientRouter.put("/client/:id", clientController.updateClient);
clientRouter.delete("/client/:id", clientController.deleteClient);

export { clientRouter };
