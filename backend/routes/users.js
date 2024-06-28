import express  from "express";
import {deleteUser, getAllUsers, getUser, updateUser} from "../controllers/user.js";
import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

router.get('/checkauth', verifyToken, (req, res, next) => {
  res.send("hello user, you are authenticated!")
})

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.send("hello user, you are authorized and you can delete your account!")
})

router.get('/checkadmin', verifyAdmin, (req, res, next) => {
    res.send("hello admin, you are authenticated and you can delete any user account!")
})

router.put('/', verifyUser ,updateUser)
router.delete('/:id',verifyUser ,deleteUser)
router.get('/:id',verifyUser, getUser)
router.get('/', verifyAdmin , getAllUsers)


export default router;