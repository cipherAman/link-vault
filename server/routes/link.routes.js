const express=require('express');
const router = express.Router();
const authMiddleware= require('../middleware/auth.middleware');
const {getLinks, addLink, deleteLink, updateLink }= require('../controllers/link.controller');



router.get('/',authMiddleware,getLinks);
router.post('/', authMiddleware,addLink);
router.put('/:id',authMiddleware,updateLink);
router.delete('/:id',authMiddleware,deleteLink);


module.exports =router;
