const router = require("express").Router();
const daoRepo = require('./dal/dao.repo');
const daoController = require('./controller/dao');


router.get("/", daoController.fetchAll);
router.get("/:id", daoController.fetchById);
router.post('/add', daoController.add);

router.post('/update',daoController.update);


module.exports = router;
