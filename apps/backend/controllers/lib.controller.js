import { LIBRARY_MODEL } from "../models/library.js";
import { BLOG_MODEL } from "../models/blogs.js";
import { asyncHandler } from "../utilites/asyncHandler.js";

export const getLibrariesOfUser = asyncHandler(async (req, res) => {

     const libraries = await LIBRARY_MODEL.find({ owner: req.params.id }).lean();

     res.json({
          status: true,
          data: libraries
     });

}, 'getLibrariesOfUser');

export const getBlogsOfLibrary = asyncHandler(async (req, res) => {

     const libraries = await LIBRARY_MODEL.findById(req.params.id).populate('blogs').select('blogs title thumbnail title type').lean();

     res.json({

          status: true,
          data: libraries
     });

}, 'getBlogsOfLibrary');


export const CreateLib = asyncHandler(async (req, res) => {
     let { title, type, owner } = req.body;

     type = type || 'private';


     let data = await LIBRARY_MODEL.create({ owner, title, type });

     res.json({
          status: true,
          data
     });

}, 'CreateLib');

export const DelLib = asyncHandler(async (req, res) => {

     const libraries = await LIBRARY_MODEL.findByIdAndDelete(req.params.id)

     res.json({
          status: true,
          message: "Library deleted successfully"
     });

}, 'DelLib');


export const allBookmarksByUser = asyncHandler(async (req, res) => {

     const libraries = await LIBRARY_MODEL.find({ owner: req.params.id }).lean();

     let data = await LIBRARY_MODEL.populate(libraries, {
          path: 'blogs',
          select: 'title slug',
     });

     let mainData = [];
     data = data.map(lib => {

          let blogs = lib.blogs;

          blogs.forEach(blog => {
               mainData.push(

                    blog._id,
               );
          })

     })


     res.json({
          data: mainData,
          status: true,
          message: "Library deleted successfully"
     });

}, 'allBookmarksByUser');


export const UpdateLib = asyncHandler(async (req, res) => {

     const libraries = await LIBRARY_MODEL.findByIdAndUpdate(req.params.id, {
          title: req.body.title,
          type: req.body.type
     }, { new: true });

     res.json({
          status: true,
          data: libraries,
          message: "Library updated"
     });

}, 'UpdateLib');

export const addOrRemoveBlogFromLib = asyncHandler(async (req, res) => {
     // "/lib/:libId/blog/:blogId"
     let { libId, blogId } = req.params;

     const libraries = await LIBRARY_MODEL.findById(libId);


     if (libraries.blogs.includes(blogId)) {
          libraries.blogs = libraries.blogs.filter(item => item != blogId);
          await libraries.save();
          res.json({
               status: true,
               message: "Removed"
          });
     } else {
          libraries.blogs.push(blogId);
          await libraries.save();
          res.json({
               status: true,
               message: "added"
          });
     }

     // update image of lib
     let newLib = await LIBRARY_MODEL.findById(libId).populate('blogs') ;
     
     let length = newLib.blogs.length;
     
     if (length != 0) {
          newLib.thumbnail = newLib?.blogs[length-1]?.thumbnail;
     } else {
          newLib.thumbnail = "http://res.cloudinary.com/dxv0ir0vr/image/upload/v1742883765/suwd9gk8aubnetae7rad.png";
     }
     await newLib.save();


}, 'addOrRemoveBlogFromLib');

