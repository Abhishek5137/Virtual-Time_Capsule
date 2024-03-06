import mongoose from 'mongoose'

const memorySchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    selectedFiles:{
        type: [String],
    }
}, {timestamps:true})

const Memory = mongoose.model('Memory', memorySchema)

export default Memory
