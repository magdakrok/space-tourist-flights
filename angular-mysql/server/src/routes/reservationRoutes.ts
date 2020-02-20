import * as express from 'express';
import {reservationController} from '../controllers/reservationControler';



class ReservationRoutes{

    public router: express.Router = express.Router();

    constructor(){
     this.config();
    }

    config(): void{
        
        this.router.get('/:departure_date/:arrival_date', reservationController.reservation);
    }
}

const reservationRoutes = new ReservationRoutes();
export default reservationRoutes.router;