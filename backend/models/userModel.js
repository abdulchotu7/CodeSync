import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    u_name: {
        type: String,
        required: true, 
        trim: true,
        unique: true
    },
    name:{
        type: String
    },
    Codechef: {
        type: String,
        trim: true
    },
    Leetcode: {
        type: String,
        trim: true
    },
    Hackerrank: {
        type: String,
        trim: true
    },
    Codeforces: {
        type: String,
        trim: true
    }
}, {
    timestamps: true 
});

export default mongoose.model("UserCPProfile", userSchema);
