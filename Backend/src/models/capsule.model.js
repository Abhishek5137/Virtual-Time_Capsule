import mongoose from 'mongoose'

const capsuleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reminderDate:{
        type:Date,
        required:true
    },
    selectedFiles: {
        type: [String], 
        required: true
       
    },
}, { timestamps: true })

const Capsule = mongoose.model('Capsule', capsuleSchema)

export default Capsule
