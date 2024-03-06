import express from "express";
import { createCapsule, deleteCapsuleById, getAllCapsules, getCapsuleById, updateCapsulebyId } from "../controllers/capsule.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.route('/create').post(
    upload.fields([
        {
            name: "selectedFiles",
            maxCount: 8,
        }
    ]), createCapsule)
router.route('/allCapsules').get(getAllCapsules);
router.route('/capsule/:id').get(getCapsuleById);
router.route('/update/:id').put(upload.array('selectedFiles', 8), updateCapsulebyId);
router.route('/delete/:id').delete(deleteCapsuleById);


export default router;