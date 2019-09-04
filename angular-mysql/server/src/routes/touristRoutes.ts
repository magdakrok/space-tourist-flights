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
        this.router.post('/', touristController.create);
        this.router.delete('/:id_tourist', touristController.delete);
        this.router.put('/:id_tourist', touristController.update);
    }
}

const touristRoutes = new TouristRoutes;
export default touristRoutes.router;