
import Memory from "../models/memory.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const createMemory = asyncHandler(async (req, res) => {
    const { title, description} = req.body;
    
    const selectedFilesArray = req.files?.selectedFiles;
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

        const newMemory = new Memory({
            title,
            description,
            selectedFiles: uploadedFilesUrls,
        });

        await newMemory.save();

        res.status(201).json(newMemory);
    } catch (error) {
        console.error('Error while uploading files:', error);
        return res.status(500).json({ message: 'Error while uploading the files' });
    }
});


export const updateMemorybyId = asyncHandler(async (req, res) => {
    const { title, description } = req.body;

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
        const updateMemory = await Memory.findByIdAndUpdate(req.params.id, {
            title,
            description,
            selectedFiles: uploadedFilesUrls,
        }, { new: true });

        if (!updateMemory) {
            return res.status(404).json({ message: 'memory not found' });
        }

        res.status(200).json(updateMemory);
    } catch (error) {
        console.error('Error while updating capsule:', error);
        return res.status(500).json({ message: 'Error while updating the capsule' });
    }
});



export const getAllMemories = asyncHandler(async (req, res) => {
    const Memories = await Memory.find();
    res.status(200).json(Memories);
});


export const getMemorybyId = asyncHandler(async (req, res) => {
    const memory = await Memory.findById(req.params.id);
    if (!memory) {
        return res.status(404).json({ message: 'memory not found' });
    }
    res.status(200).json(memory);
});


export const deleteMemorybyId = asyncHandler(async (req, res) => {
    const memory = await Memory.findByIdAndDelete(req.params.id);
    if (!memory) {
        return res.status(404).json({ message: 'Capsule not found' });
    }
    res.status(200).json("memeory deleted successfully");
});