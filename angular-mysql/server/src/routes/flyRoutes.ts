import {Router} from 'express';
import {flyController} from '../controllers/flyController';


class FlyRoutes{

    public router: Router = Router();

    constructor(){
     this.config();
    }

    config(): void {
        this.router.get('/', flyController.list);
        this.router.get('/:id_flight', flyController.getOne);
        this.router.get('/:departure_date/:arrival_date', flyController.checkFlight);
        this.router.post('/', flyController.create);
        this.router.delete('/:id_flight', flyController.delete);
        this.router.put('/:id_flight', flyController.update);
    }
}

const flyRoutes = new FlyRoutes();
export default flyRoutes.router;