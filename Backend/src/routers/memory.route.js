import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { createMemory, deleteMemorybyId, getAllMemories, getMemorybyId, updateMemorybyId } from "../controllers/memory.controller.js";

const router = express.Router();

router.route('/create').post(
    upload.fields([
        {
            name: "selectedFiles",
            maxCount: 8,
        }
    ]), createMemory)

router.route('/allmemories').get(getAllMemories);
router.route('/viewmemory/:id').get(getMemorybyId);
router.route('/update/:id').put(upload.array('selectedFiles', 8),updateMemorybyId);
router.route('/delete/:id').delete(deleteMemorybyId);


export default router