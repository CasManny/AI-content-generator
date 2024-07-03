import mongoose from "mongoose";

const aiOutputSchema = new mongoose.Schema({
    formdata: [{
        data: {
            type: String,
        }
    }],
    aiResponse: {
        type: String,
        required: true
    },
    creatorEmail: {
        type: String,
        unique: true,
    },
    templateSlug: {
        type: String,
        required: true
    }
}, { timestamps: true})

export const AIOutput = mongoose.models.AIOutput || mongoose.model("AIOutput", aiOutputSchema)

