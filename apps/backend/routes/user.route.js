// Api related to user's managament

import express from "express";
import { follow_unfollow_user, getBlogsByUser, getFollowers, getFollowing, getFollowingLess, likeBlog } from "../controllers/user.controller.js";
import { addOrRemoveBlogFromLib, CreateLib, DelLib, getBlogsOfLibrary, getLibrariesOfUser, UpdateLib ,allBookmarksByUser} from "../controllers/lib.controller.js";

let router = express.Router();

// router.get("/likeBlog", likeBlog);


router.post("/followUnfollow", follow_unfollow_user);
router.get("/followers/:id", getFollowers);
router.get("/followings/:id", getFollowing);
router.get("/followings-less/:id", getFollowingLess);



router.get('/blogs/:id',getBlogsByUser)

//allBookmarksByUser by id
router.get("/all-bookmarks/:id", allBookmarksByUser);

// get all lib of user
router.get("/lib/:id", getLibrariesOfUser);

// // get all blogs of lib
router.get("/lib/blog/:id", getBlogsOfLibrary);

// // remove or add blog to lib -> single api
router.put("/lib/:libId/blog/:blogId",addOrRemoveBlogFromLib);

// // update lib title or type
router.put("/lib/:id",UpdateLib);

// create lib
router.post("/lib",CreateLib);

// del lib
router.delete("/lib/:id",DelLib);


/*
 get all lib of user

 get all blogs of lib

 remove or add blog to lib -> single api

 update lib title or type

 create lib

 del lib

 

*/
export const UserRouter = router;


/*
### 
POST  http://localhost:8000/v1/user/followUnfollow
Content-Type: application/json

{
     "followerId": "681605aee75d60a80d8a8ee1",
     "followingId": "680a622ab6e0027e146e7b0a"
}


### 
GET  http://localhost:8000/v1/user/followings/681605aee75d60a80d8a8ee1
Content-Type: application/json
  
means qoukuiavi (ee1) is follwing DHIRAJSUTAHR
*/