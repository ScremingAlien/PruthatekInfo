// Api related to blogs's managament

import express from "express";
import { BLOG_MODEL, searchBlogs, unifiedSearch } from '../models/blogs.js'
import { createBlog, deleteBlog, updateTag, getStatistic, likeUnLike, incView, updateBlog, findBySlug } from "../controllers/blog.controller.js";
import { TAG_MODEL } from "../models/achivement_tags.js";
import { USER_MODEL } from "../models/users.js";

let router = express.Router();

router.get('/blogs', async (req, res) => {
     let data = await BLOG_MODEL.find();
     res.json(data)
})
router.get('/blogs/:id', async (req, res) => {
     let data = await BLOG_MODEL.findById(req.params.id);
     res.json(data)
})


// like and views api
router.get('/statistics/:id', getStatistic);
router.get('/incView/:stat_id', incView);
router.get('/likeUnlike/:user_id/:stat_id', likeUnLike);


router.post('/blogs', createBlog);
router.delete('/blogs/:id', deleteBlog);
router.put('/blogs/:id', updateBlog)

 
router.get("/search/:query", async (req, res) => {
     const { query } = req.params; // Get search term from query parameters
     if (!query) {
          return res.status(400).json({ message: "Search query is required" });
     }

     // const results = await unifiedSearch(query);
     const results = await searchBlogs(query);

     res.json(results);
});

router.get('/getStaticParams', async (req, res) => {
     let data = await BLOG_MODEL.find().sort({ createdAt: -1 }).limit(50);
     res.json(data)
})

router.get('/getStaticBlogs', async (req, res) => {
     let data = await BLOG_MODEL.find().sort({ createdAt: -1 }).select('slug createdAt').limit(10000);
 
     res.json(data)
})
router.get('/getStaticUsers', async (req, res) => {
     let data = await USER_MODEL.find().sort({ createdAt: -1 }).select('slug').limit(10000);
     res.json(data)
})

router.get('/getStaticTags', async (req, res) => {
     let data = await TAG_MODEL.find().sort({ createdAt: -1 }).select('name createdAt').limit(500);
     res.json(data)
})
router.get('/:slug', findBySlug);


router.put('/tag/:id', updateTag)
export const BlogRouter = router;

