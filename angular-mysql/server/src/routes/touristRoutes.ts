import {Router} from 'express';
import {touristController} from '../controllers/touristController';

class TouristRoutes{

    public router: Router = Router();

    constructor(){
     this.config();
    }

    config(): void {
        this.router.get('/', touristController.list);
        this.router.get('/:id_tourist', touristController.getOne);
        this.router.get('/:first_name/:last_name/:date_of_birth', touristController.checkTourist);
        this.router.post('/', touristController.create);
        this.router.delete('/:id_tourist', touristController.delete);
        this.router.put('/:id_tourist', touristController.update);
        this.router.get('/:first_name/:last_name',touristController.getOneTourist);
    }
}

const touristRoutes = new TouristRoutes;
export default touristRoutes.router;