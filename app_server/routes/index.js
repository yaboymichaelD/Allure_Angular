var express = require('express');
var router = express.Router();

const ctrlLocations = require('../controllers/locations'); 
const ctrlOthers = require('../controllers/others');

/* Main Feed pages */
router.get('/', ctrlLocations.homelist);
router.get('/feed', ctrlLocations.feed);
router.get('/diveIn', ctrlLocations.diveIn);

/* Register Pages */
router.get('/register', ctrlOthers.registerUser);
module.exports = router;






