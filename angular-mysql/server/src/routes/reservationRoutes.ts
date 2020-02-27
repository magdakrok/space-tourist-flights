import * as express from 'express';
import {reservationController} from '../controllers/reservationControler';



class ReservationRoutes{

    public router: express.Router = express.Router();

    constructor(){
     this.config();
    }

    config(): void{
        
        this.router.get('/:departure_date/:arrival_date', reservationController.reservation);
        this.router.get('/:id_flight', reservationController.listNumberOfSeats);
    }
}

const reservationRoutes = new ReservationRoutes();
export default reservationRoutes.router;