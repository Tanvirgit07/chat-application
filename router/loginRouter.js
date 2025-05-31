const express = require('express');
const router = express.Router();


const {getLogin} = require('../controller/loginController'); 
const decorateHtmlResponse = require ('../middleware/commone/decorateHtmlRespose');



router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;