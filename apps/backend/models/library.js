import mongoose from "mongoose";


// Advertisement Schema
const LibrarySchenaa = new mongoose.Schema({
     thumbnail: { type: String, default: 'http://res.cloudinary.com/dxv0ir0vr/image/upload/v1742883765/suwd9gk8aubnetae7rad.png' },
     owner: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
     title: { type: String, required: true },
     blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'blogs' }],
     type: { type: String, default: 'private' },
}, { timestamps: true });

export const LIBRARY_MODEL = mongoose.model('library', LibrarySchenaa);