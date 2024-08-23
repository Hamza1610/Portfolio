
var express = require('express');
var router = express.Router();

/* 
    API ROUTERS
*/

/* GET profiles listing. */
router.get('/profile/get-profiles', function(req, res, next) {
    res.status(200).json({result: [
        { path: 'full_stack_developer', json: {} },
        { path: 'backend_developer', json: {} },
        { path: 'frontend_developer', json: {} },
        { path: 'machine_learning_developer', json: {} },
    ]});
});


module.exports = router;
