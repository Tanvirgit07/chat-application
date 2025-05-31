const express = require('express');
const router = express.Router();
const decorateHtmlResponse = require('../middleware/commone/decorateHtmlRespose');



const {getInbox} = require('../controller/inboxController');

router.get('/',decorateHtmlResponse("Inbox"), getInbox)


module.exports = router;