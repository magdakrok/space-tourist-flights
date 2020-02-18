import {Router} from 'express';
import {connectionsController} from '../controllers/connectionsControler';
import conn  from '../database';

class ConnectionRoutes{

    public router: Router = Router();

    constructor(){
     this.config();
    }

    config(): void{
        
        this.router.get('/:id_flight', connectionsController.listFlight);
        this.router.get('/', connectionsController.list);
        //this.router.get('/', connectionsController.checkRes);
        this.router.post('/', connectionsController.createConnection);
        this.router.delete('/:id_tourist', connectionsController.deleteTourist);
        this.router.delete('/:id_flight', connectionsController.deleteFlight);
    }
}

const connectionsRoutes = new ConnectionRoutes();
export default connectionsRoutes.router;