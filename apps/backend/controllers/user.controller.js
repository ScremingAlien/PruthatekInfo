
import { asyncHandler } from "../utilites/asyncHandler.js";
import { FOLLOW_MODEL } from '../models/follower.js'
import { BLOG_MODEL } from "../models/blogs.js";

export const likeBlog = asyncHandler(async (req, res) => {
     res.json({ status: true })
}, 'likeBlog')



export const follow_unfollow_user = asyncHandler(async (req, res) => {

     const { followerId, followingId } = req.body

     const existingFollow = await FOLLOW_MODEL.findOne({ follower: followerId, following: followingId });

     if (existingFollow) {

          await FOLLOW_MODEL.deleteOne({ follower: followerId, following: followingId });
          
          res.json({ status: true, message: "Unfollowed successfully!" });

     } else {
          await FOLLOW_MODEL.create({ follower: followerId, following: followingId });
         
          res.json({ status: true, message: "Followed successfully!" });
     }

}, 'follow_unfollow_user');


export const getFollowers = asyncHandler(async (req, res) => {
     const userId = req.params.id;

     let data = await FOLLOW_MODEL.find({ following: userId }).populate('follower', 'username avatar slug');

     res.json({ status: true, data: data });

}, 'getFollowers');



export const getFollowing = asyncHandler(async (req, res) => {
     const userId = req.params.id;

     let data = await FOLLOW_MODEL.find({ follower: userId }).populate('following', 'username avatar slug');

     res.json({ status: true, data: data });


}, 'getFollowing');

export const getFollowingLess = asyncHandler(async (req, res) => {
     const userId = req.params.id;

     let data = await FOLLOW_MODEL.find({ follower: userId })
     let dataaaa = data.map(item => item?.following)

     res.json(dataaaa);


}, 'getFollowingLess');

export const getBlogsByUser = asyncHandler(async (req, res) => {
     const userId = req.params.id;

     let data = await BLOG_MODEL.find({ author: userId }).populate('tags');

     res.json({ status: true, data: data });

     console.log(data);

}, 'getBlogsByUser');




// export const unfollowUser = async (followerId, followingId) => {
//      try {
//           await FOLLOW_MODEL.deleteOne({ follower: followerId, following: followingId });
//  
//      } catch (error) {
//           console.error("Error unfollowing user:", error);
//      }
// };
