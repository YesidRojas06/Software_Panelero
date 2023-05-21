import servidor from "./modelos/servidor.js";
import * as dotenv from 'dotenv' 
dotenv.config()
const server = new servidor()
server.listen()