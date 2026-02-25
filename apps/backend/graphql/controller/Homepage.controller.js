import { GraphQLError } from "graphql";
import { BLOG_MODEL } from "../../models/blogs.js";
import { countFollowers } from '../../utilites/helperFunctions.js'
import { FOLLOW_MODEL } from "../../models/follower.js";


class Homepage {



     // done finally
     async mostPopularBlogs() {
          // Most popular ( latest(5day) ,most likes) -- rightSide of slider
         

          try {
               let blog = await BLOG_MODEL.aggregate([
                    {
                         $match: {
                              createdAt: { $gte: new Date(new Date().setDate(new Date().getDate() - 5)) }
                         }
                    },
                    {
                         $lookup: {
                              from: 'statistics',  // Collection name of Statistics
                              localField: 'statistic',
                              foreignField: '_id',
                              as: 'stats'
                         },
                         $lookup: {
                              from: 'users',  // Collection name of Statistics
                              localField: 'author',
                              foreignField: '_id',
                              as: 'authorDetails'
                         }
                    },
                    {
                         $addFields: {
                              likes: { $size: { $ifNull: [{ $arrayElemAt: ['$stats.likes', 0] }, []] } }
                         }
                    },
                    { $sort: { likesCount: -1 } },

                    { $limit: 5 },
                    {
                         $project: {
                              title: 1,
                              thumbnail: 1,
                              slug: 1,
                              likes: 1,
                              timeRequired: 1,
                              createdAt: 1,
                              authorDetails: {
                                   _id: 1,
                                   slug: 1,
                                   username: 1,

                              }
                         }
                    }
               ])

               if (blog.length === 0) {
                    blog = await BLOG_MODEL.aggregate([
                         {
                              $match: {
                                   createdAt: { $gte: new Date(new Date().setDate(new Date().getDate() - 20)) }
                              }
                         },

                         {
                              $lookup: {
                                   from: 'statistics',  // Collection name of Statistics
                                   localField: 'statistic',
                                   foreignField: '_id',
                                   as: 'stats'
                              },
                              $lookup: {
                                   from: 'users',  // Collection name of Statistics
                                   localField: 'author',
                                   foreignField: '_id',
                                   as: 'authorDetails'
                              }
                         },
                         {
                              $addFields: {
                                   likes: { $size: { $ifNull: [{ $arrayElemAt: ['$stats.likes', 0] }, []] } }
                              }
                         },
                         { $sort: { likesCount: -1 } },

                         { $limit: 5 },
                         {
                              $project: {
                                   title: 1,
                                   thumbnail: 1,
                                   slug: 1,
                                   likes: 1,
                                   timeRequired: 1,
                                   createdAt: 1,
                                   authorDetails: {
                                        _id: 1,
                                        slug: 1,
                                        username: 1,

                                   }
                              }
                         }
                    ])
               }

               let data = blog?.map((item) => {

                    return {
                         ...item,
                         authorDetails: {
                              ...item.authorDetails[0],
                         }
                    }
               })

               return data

          } catch (error) {
               console.error("Error fetching events:", error);

               throw new GraphQLError(error.message, {
                    extensions: {
                         code: "400",
                         errorDetails: "Homepage-mostPopularBlogs",
                    },
               });
          }
     }


     // done
     async sliderMain() {
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
               let blog = await BLOG_MODEL.aggregate([
                    {
                         $match: {
                              createdAt: { $gte: new Date(new Date().setDate(new Date().getDate() - 5)) }
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
                         }
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
                              timeRequired: 1,
                              createdAt: 1,
                              authorDetails: {
                                   username: 1,
                                   avatar: 1,
                                   slug: 1,
                                   bio: 1

                              }
                         }
                    }
               ])
               if (blog.length === 0) {
                    blog = await BLOG_MODEL.aggregate([
                         {
                              $match: {
                                   createdAt: { $gte: new Date(new Date().setDate(new Date().getDate() - 20)) }
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
                              }
                         },
                         {
                              $addFields: {
                                   views: { $size: { $ifNull: [{ $arrayElemAt: ['$stats.views', 0] }, []] } }
                              }
                         },
                         { $sort: { views: -1 } },
                         { $limit: 10 },
                         {
                              $project: {
                                   title: 1,
                                   subTitle: 1,
                                   thumbnail: 1,
                                   slug: 1,
                                   views: 1,
                                   timeRequired: 1,
                                   createdAt: 1,
                                   authorDetails: {
                                        username: 1,
                                        avatar: 1,
                                        slug: 1,
                                        bio: 1
                                   }
                              }
                         }
                    ])

               }
               let data = blog?.map((item) => {

                    return {
                         ...item,
                         authorDetails: {
                              ...item.authorDetails[0],
                         }
                    }
               })

               return data
          } catch (error) {
               console.error("Error fetching events:", error);

               throw new GraphQLError(error.message, {
                    extensions: {
                         code: "400",
                         errorDetails: "Homepage-sliderMain",
                    },
               });
          }
     }


     // done -- Trending Bar
     async latestBlogsBar() {
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
               let blog = await BLOG_MODEL.aggregate([
                    {
                         $match: {
                              createdAt: {
                                   $gte: new Date(new Date().setDate(new Date().getDate() - 20)),

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
                                   username: 1,
                                   slug: 1,
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
                         errorDetails: "Homepage-latestBlogsBar",
                    },
               });
          }
     }


  async highestFiveBlogs_View_Bar() {
     try {
          let blogs = await BLOG_MODEL.aggregate([
               // Join with statistics to get views
               {
                    $lookup: {
                         from: 'statistics',
                         localField: 'statistic',
                         foreignField: '_id',
                         as: 'stats'
                    }
               },
               // Join with users to get author details
               {
                    $lookup: {
                         from: 'users',
                         localField: 'author',
                         foreignField: '_id',
                         as: 'authorDetails'
                    }
               },
               // Flatten stats and calculate views
               {
                    $addFields: {
                         views: { $ifNull: [{ $arrayElemAt: ['$stats.views', 0] }, 0] },
                         authorDetails: { $arrayElemAt: ['$authorDetails', 0] }
                    }
               },
               { $sort: { views: -1 } },
               { $skip: 0 }, // skip top 5
               { $limit: 8 }, // get next top 4
               {
                    $project: {
                         title: 1,
                         thumbnail: 1,
                         subTitle: 1,
                         slug: 1,
                         timeRequired: 1,
                         createdAt: 1,
                         views: 1,
                         authorDetails: {
                              _id: 1,
                              slug: 1,
                              username: 1,
                              avatar: 1,
                              bio: 1
                         }
                    }
               }
          ]);

          console.log("View Bar" );
          // Get list of author IDs
          const authorIds = blogs.map(b => b.authorDetails._id);
          // Count followers per author in a single query
          const followersData = await FOLLOW_MODEL.aggregate([
               { $match: { following: { $in: authorIds } } },
               {
                    $group: {
                         _id: '$following',
                         count: { $sum: 1 }
                    }
               }
          ]);

          // Map for quick lookup
          const followersMap = new Map(followersData.map(f => [f._id.toString(), f.count]));

          // Attach followers count
          const result = blogs.map(blog => {
               const authorId = blog.authorDetails._id.toString();
               return {
                    ...blog,
                    authorDetails: {
                         ...blog.authorDetails,
                         followers: followersMap.get(authorId) || 0
                    }
               };
          });

          return result;

     } catch (error) {
          console.error("Error fetching highest viewed blogs (bar):", error);

          throw new GraphQLError(error.message, {
               extensions: {
                    code: "400",
                    errorDetails: "Homepage-highestFiveBlogs_View_Bar",
               },
          });
     }
}


async highestFiveBlogs_Likes_Bar() {
     try {
          const blogs = await BLOG_MODEL.aggregate([
               // Join statistics to get likes
               {
                    $lookup: {
                         from: 'statistics',
                         localField: 'statistic',
                         foreignField: '_id',
                         as: 'stats'
                    }
               },
               // Join users to get author details
               {
                    $lookup: {
                         from: 'users',
                         localField: 'author',
                         foreignField: '_id',
                         as: 'authorDetails'
                    }
               },
               // Calculate number of likes
               {
                    $addFields: {
                         likes: {
                              $size: {
                                   $ifNull: [{ $arrayElemAt: ['$stats.likes', 0] }, []]
                              }
                         },
                         authorDetails: { $arrayElemAt: ['$authorDetails', 0] }
                    }
               },
               { $sort: { likes: -1, createdAt: -1 } },
               { $skip: 0 },  // skip top 5
               { $limit: 8 }, // get next 4
               {
                    $project: {
                         title: 1,
                         thumbnail: 1,
                         subTitle: 1,
                         slug: 1,
                         timeRequired: 1,
                         createdAt: 1,
                         likes: 1,
                         authorDetails: {
                              _id: 1,
                              username: 1,
                              slug: 1,
                              avatar: 1,
                              bio: 1
                         }
                    }
               }
          ]);

          // Extract author IDs
          const authorIds = blogs.map(b => b.authorDetails._id);

          // Aggregate follower counts
          const followersData = await FOLLOW_MODEL.aggregate([
               { $match: { following: { $in: authorIds } } },
               {
                    $group: {
                         _id: '$following',
                         count: { $sum: 1 }
                    }
               }
          ]);

          // Create map for easy access
          const followersMap = new Map(followersData.map(f => [f._id.toString(), f.count]));

          // Attach follower counts to authorDetails
          const result = blogs.map(blog => {
               const authorId = blog.authorDetails._id.toString();
               return {
                    ...blog,
                    authorDetails: {
                         ...blog.authorDetails,
                         followers: followersMap.get(authorId) || 0
                    }
               };
          });

          return result;
     } catch (error) {
          console.error("Error fetching liked blogs:", error);

          throw new GraphQLError(error.message, {
               extensions: {
                    code: "400",
                    errorDetails: "Homepage-highestFiveBlogs_Likes_Bar",
               },
          });
     }
}


     // done
     async Sponserd_Blogs() {
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
               let blog = await BLOG_MODEL.aggregate([
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
                                   username: 1,
                                   slug: 1,
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
                         errorDetails: "Homepage-Sponserd_Blogs",
                    },
               });
          }
     }


}

export default new Homepage();