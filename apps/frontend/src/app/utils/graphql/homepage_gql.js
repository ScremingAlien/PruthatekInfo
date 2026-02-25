import { gql } from "graphql-request";


export const HP_SPONSERD_BLOGS = gql`
 query HomePageSponserd_Blogs {
  HomePageSponserd_Blogs {
    _id
    slug
    title
    thumbnail
    timeRequired
    createdAt
    authorDetails {
      _id
      slug
      avatar
      bio
      followers
      username
    }
  }
}
`;

// main slider
export const LEFT_SWIPER_BLOGS = gql`
query HomeLeftSwiperBlogs {
  HomePageSliderLeftSide {
    _id
    authorDetails {
      _id
      slug
      username
    }
    createdAt
    subTitle
    slug
    thumbnail
    title
  }
  }
 
`;

export const RIGHT_SWIPER_BLOGS = gql`query HomeRightSwiperBlogs {
  
HomePageMostPopularBlogs {
    _id
    authorDetails {
      _id
      slug
      username
    }
     subTitle
    createdAt
    slug
    thumbnail
    title
  }
}`




export const HP_BAR_ONE_LATEST_BLOGS = gql`
query HomePageLatestBlogsBar {
  HomePageLatestBlogsBar {
    _id
    authorDetails {
      _id
      slug
      avatar
      bio
      followers
      username
    }
    createdAt
    slug
    thumbnail
    timeRequired
    title
  }
}
`;
export const HP_BAR_TWO_VIEW_BAR = gql`
query HomePageHighestFiveBlogs_View_Bar {
  HomePageHighestFiveBlogs_View_Bar {
    _id
      views 
    authorDetails {
      _id
      slug
      avatar
      bio
      followers
      username
    }
    createdAt
    slug
    thumbnail
    timeRequired
    title  
  }
}
`;


export const HP_BAR_THREE_LIKES_BAR = gql`
query HomePageHighestFiveBlogs_Likes_Bar {
  HomePageHighestFiveBlogs_Likes_Bar {
  _id
    authorDetails {
      _id
      slug
      avatar
      bio
      followers
      username
    }
    createdAt
    slug
    thumbnail
    timeRequired
    title    
  }
}
`;