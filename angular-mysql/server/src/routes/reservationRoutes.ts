import * as express from 'express';
import {reservationController} from '../controllers/reservationControler';



class ReservationRoutes{

    public router: express.Router = express.Router();

    constructor(){
     this.config();
    }

    config(): void{
        
        this.router.get('/:departure_date/:arrival_date', reservationController.reservation);
       // this.router.get('/', connectionsController.list);
        //this.router.get('/', connectionsController.checkRes);
        //this.router.post('/', connectionsController.createConnection);
        //this.router.delete('/:id_tourist', connectionsController.deleteTourist);
        //this.router.delete('/:id_flight', connectionsController.deleteFlight);
    }
}

const reservationRoutes = new ReservationRoutes();
export default reservationRoutes.router;