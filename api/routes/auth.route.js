import express from 'express';
import { signUp,signIn,googleSignIn} from '../controller/auth.controller.js';
const router = express.Router()

router.post('/signup', signUp)
router.post('/signin', signIn)
router.post('/google', googleSignIn)

export default router;