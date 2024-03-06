import Capsule from "../models/capsule.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const createCapsule = asyncHandler(async (req, res) => {

    const { title, description, reminderDate } = req.body;
    if(!title ||!description || !reminderDate || title==='' || description==='' || reminderDate==='' ){
       throw new Error("All Fields are required")
    }
    
    const selectedFilesArray = req.files?.selectedFiles;
    // if(!selectedFilesArray){
    //     throw new Error("images required")
    // }
// console.log(selectedFilesArray);

    if (!selectedFilesArray || selectedFilesArray.length === 0) {
        return res.status(400).json({ message: 'No files are uploaded' });
    }

    try {
        const uploadedFilesUrls = [];

        for (const file of selectedFilesArray) {

            const uploadedFile = await uploadOnCloudinary(file.path);
            if (!uploadedFile) { 
                throw new Error('Error uploading file to Cloudinary');
            }
            uploadedFilesUrls.push(uploadedFile.url);
        }

        const newCapsule = new Capsule({
            title,
            description,
            reminderDate,
            selectedFiles: uploadedFilesUrls,
        });

        await newCapsule.save();

        res.status(201).json(newCapsule);
        console.log(newCapsule)
        
    } catch (error) {
        console.error('Error while uploading files:', error);
        return res.status(500).json({ message: 'Error while uploading the files' });
    }
});


export const updateCapsulebyId = asyncHandler(async (req, res) => {
    const { title, description, reminderDate } = req.body;

    try {
        // Check if files are uploaded
        if (!req.files || !req.files.length) {
            return res.status(400).json({ message: 'No files are uploaded' });
        }

        const uploadedFilesUrls = [];

        // Iterate through each uploaded file
        for (const file of req.files) {
            // Upload file to Cloudinary or any other service
            const uploadedFile = await uploadOnCloudinary(file.path);
            if (!uploadedFile) {
                throw new Error('Error uploading file to Cloudinary');
            }
            uploadedFilesUrls.push(uploadedFile.url);
        }

        // Update capsule with uploaded files
        const updatedCapsule = await Capsule.findByIdAndUpdate(req.params.id, {
            title,
            description,
            reminderDate,
            selectedFiles: uploadedFilesUrls,
        }, { new: true });

        if (!updatedCapsule) {
            return res.status(404).json({ message: 'Capsule not found' });
        }

        res.status(200).json(updatedCapsule);
    } catch (error) {
        console.error('Error while updating capsule:', error);
        return res.status(500).json({ message: 'Error while updating the capsule' });
    }
});



export const getAllCapsules = asyncHandler(async (req, res) => {
    const capsules = await Capsule.find();
    res.status(200).json(capsules);
});

export const getCapsuleById = asyncHandler(async (req, res) => {
    const capsule = await Capsule.findById(req.params.id);
    if (!capsule) {
        return res.status(404).json({ message: 'Capsule not found' });
    }
    res.status(200).json(capsule);
});


export const deleteCapsuleById = asyncHandler(async (req, res) => {
    const capsule = await Capsule.findByIdAndDelete(req.params.id);
    if (!capsule) {
        return res.status(404).json({ message: 'Capsule not found' });
    }
    res.status(200).json("capsule deleted successfully");
});