

import { GraphQLError } from "graphql";
import { BLOG_MODEL } from "../../models/blogs.js";
import { countFollowers } from '../../utilites/helperFunctions.js'
import { TAG_MODEL } from "../../models/achivement_tags.js";


class TagPage {



     // done
     async sliderMain({ tag }) {
          // Slider ( latest(5day) , most views) -- left main slider
          // _id:1
          // title: 1, 
          // subTitle: 1,
          // thumbnail: 1,
          // authorDetails: [ { _id: 1, username: 1   } ],
          // slug: 1,
          // views
          // timeRequired: 1,
          // createdAt: 1,
          try {

               let temp_tag = await TAG_MODEL.findOne({ slug: tag })

               let blog = await BLOG_MODEL.aggregate([
                    {
                         $match: {
                              tags: { $in: [temp_tag._id] },
                              
                         }
                    },
                    {

                         $lookup: {
                              from: 'statistics',
                              localField: 'statistic',
                              foreignField: '_id',
                              as: 'stats'
                         },

                         $lookup: {
                              from: 'users',  // Collection name of Statistics
                              localField: 'author',
                              foreignField: '_id',
                              as: 'authorDetails'

                         },

                    },
                    {
                         $addFields: {
                              views: { $size: { $ifNull: [{ $arrayElemAt: ['$stats.views', 0] }, []] } }
                         }
                    },
                    { $sort: { views: -1, createdAt: -1 } },
                    { $limit: 10 },
                    {
                         $project: {
                              title: 1,
                              subTitle: 1,
                              thumbnail: 1,
                              slug: 1,
                              views: 1,
                              tags: 1,
                              timeRequired: 1,
                              createdAt: 1,

                              authorDetails: {
                                   _id: 1,
                                   slug: 1,
                                   username: 1,
                                   avatar: 1,
                                   bio: 1
                              }
                         }
                    }
               ])

               
               blog = await BLOG_MODEL.populate(blog, { path: 'tags', select: 'name slug' });
               let tempData = await Promise.all(blog.map(async (item) => {
                    let data = await countFollowers(item.authorDetails[0]._id);
                    let newOB = { ...item.authorDetails[0], followers: data };

                    return { ...item, authorDetails: newOB, tagName: temp_tag.name }; // ← Add tag.name here
               }));


               return tempData

          } catch (error) {
               console.error("Error fetching events:", error);

               throw new GraphQLError(error.message, {
                    extensions: {
                         code: "400",
                         errorDetails: "Tagpage-sliderMain",
                    },
               });
          }
     }
 
     // done -- Trending Bar
     async latestBlogsBar({ tag }) {
          // bar One( latest( skip 5day, limit 20days) )

          // blogs
          // title: 1,
          // thumbnail: 1,
          // subTitle: 1,
          // slug: 1,
          // authorDetails:{
          //   _id: 1,
          //   username: 1,
          //   bio
          //   avatar: 1,
          //   followers: 1
          // }
          // timeRequired: 1,
          // createdAt: 1,

          try {
               let temp_tag = await TAG_MODEL.findOne({ slug: tag })

               let blog = await BLOG_MODEL.aggregate([
                    {
                         $match: {
                              tags: { $in: [temp_tag._id] },
                              createdAt: {
                                   $gte: new Date(new Date().setDate(new Date().getDate() - 60)),

                                   $lte: new Date(new Date().setDate(new Date().getDate() - 5)),

                              }
                         }
                    },
                    {
                         $lookup: {
                              from: 'users',  // Collection name of Statistics
                              localField: 'author',
                              foreignField: '_id',
                              as: 'authorDetails'
                         }
                    },
                    {
                         $sort: {
                              createdAt: 1
                         }
                    },
                    { $limit: 8 },
                    {
                         $project: {
                              title: 1,
                              thumbnail: 1,
                              subTitle: 1,
                              slug: 1,
                              timeRequired: 1,
                              createdAt: 1,
                              authorDetails: {
                                   _id: 1,
                                   slug: 1,
                                   username: 1,
                                   avatar: 1,
                                   bio: 1
                              }
                         }
                    }
               ])

               let tempData = await Promise.all(blog.map(async (item) => {
                    let data = await countFollowers(item.authorDetails[0]._id);
                    let newOB = { ...item.authorDetails[0], followers: data }

                    return { ...item, authorDetails: newOB };
               }))

               return tempData
          } catch (error) {
               console.error("Error fetching events:", error);

               throw new GraphQLError(error.message, {
                    extensions: {
                         code: "400",
                         errorDetails: "Tagpage-latestBlogsBar",
                    },
               });
          }
     }


     // done
     async Sponserd_Blogs({ tag }) {
          // Sponserd Blogs (for somethime use rando blogs)
          // blogs
          // title: 1,
          // thumbnail: 1,
          // subTitle: 1,
          // slug: 1,
          // authorDetails:{
          //   _id: 1,
          //   username: 1,
          //   bio
          //   avatar: 1,
          //   followers: 1
          // }
          // timeRequired: 1,
          // createdAt: 1,
          try {
               let temp_tag = await TAG_MODEL.findOne({ slug: tag })

               let blog = await BLOG_MODEL.aggregate([
                    // {
                    //      $match: {
                    //           tags: { $in: [temp_tag._id] }
                    //      }
                    // },
                    {
                         $lookup: {
                              from: 'users',  // Collection name of Statistics
                              localField: 'author',
                              foreignField: '_id',
                              as: 'authorDetails'
                         }
                    },
                    { $sort: { likes: -1 } },
                    { $skip: 6 },
                    { $limit: 4 },
                    {
                         $project: {
                              title: 1,
                              thumbnail: 1,
                              subTitle: 1,
                              slug: 1,
                              timeRequired: 1,
                              createdAt: 1,
                              authorDetails: {
                                   _id: 1,
                                   slug: 1,
                                   username: 1,
                                   avatar: 1,
                                   bio: 1
                              }
                         }
                    }
               ])
               let tempData = await Promise.all(blog.map(async (item) => {
                    let data = await countFollowers(item.authorDetails[0]._id);
                    let newOB = { ...item.authorDetails[0], followers: data }

                    return { ...item, authorDetails: newOB };
               }))

               return tempData
          } catch (error) {
               console.error("Error fetching events:", error);

               throw new GraphQLError(error.message, {
                    extensions: {
                         code: "400",
                         errorDetails: "Tagpage-Sponserd_Blogs",
                    },
               });
          }
     }


}

export default new TagPage();