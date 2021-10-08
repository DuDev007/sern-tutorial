import express from 'express';
import home from '../controllers/homeController';
import about from '../controllers/homeController';


let router = express.Router();

let initWebRoutes = (app) => {

    router.get('/', home.getHomePage);
    router.get('/about', about.getAboutPage);
    

    return app.use('/',router);
}

module.exports = initWebRoutes;
