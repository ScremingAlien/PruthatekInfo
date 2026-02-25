import { gql } from "graphql-request";


export const GET_DROPDOWN_BLOGS = gql`
 query NavbarDropDown($tags: [String]) {
  navbarDropDown(tags: $tags) {
    _id
    name
    slug
    subTags {
      slug
      name
      _id
    }
  
  }
}
`;

export const GET_POKEMONS = gql`
  query GetPokemons {
    pokemon_v2_pokemon(limit: 10) {
      id
      name
    }
  }
`;
export const GET_TOP_AUTHOR_OF_WEEK = gql`
 query GET_TOP_AUTHOR_OF_WEEK {
  getTopAuthorOfWeek {
    _id
    avatar
    bio
    followers
    slug
    username
  }
}
`;

export const FOOTER_BLOGS = gql`
query GetRandomBlogsFooterBlogs {
  getRandomBlogsFooterBlogs {
    _id
    slug
    title
  }
}
`;





export const GetRandom = gql`
query GetRandom {
  getRandomBlogsTemp {
    _id
 
    slug
    author {
      _id
      avatar
      username
      
      bio
    }
    createdAt
    timeRequired
   
    subTitle
     
    thumbnail
    title
  }
}

`;

export const BLOG_BY_SLUG = gql`
query blogBySlug($slug: String!) {
  getBlogBySlug(slug: $slug) {
    _id
    title
    timeRequired
    thumbnail
    subTitle
    statistic
    content
    slug
    author {
      _id
      avatar
      username
      bio
      
    }
    tags {
      _id
      name
      slug
    }
    likes
    polls {
      _id
    }
       accordians {
      _id
      blog
      items {
        answer
        question
      }
    }
    isGlobal
    createdAt
    updatedAt
  }
}

`;

/// new builided
export const GetRelatedBlogsBySlug = gql`
query GetRelatedBlogsBySlug($slug: String!) {
  getRelatedBlogsBySlug(slug: $slug) {
    title
    timeRequired
    thumbnail
    slug
    createdAt
    _id
    author {
      _id
      username
      slug
      bio
      avatar
      followers
    }
  }
}
`;


// give array of Ids
export const GetTopBlogsByTopAuthor = gql`
query GetTopBlogsByTopAuthor{
  getTopBlogsByTopAuthor {
    _id
    author {
      _id
      avatar
      bio
      slug
      followers
      username
    }
    createdAt
    title
    timeRequired
    thumbnail
    slug
  }
}

`;

export const GetUserBySlug = gql`
query GetUserBySlug($slug: String!) {
  getUserBySlug(slug: $slug) {
    bio
    slug
    username
    TotalFollowers
    TotalFollowing
    _id
    country
    email
    avatar
  }
}
`;
export const GetBlogsBySlugOfUser = gql`
query GetBlogsBySlugOfUser($slug: String!, $page: Int, $limit: Int) {
  getBlogsBySlugOfUser(slug: $slug, page: $page, limit: $limit) {
    blog {
      _id
      title
      createdAt
      timeRequired
      slug
      thumbnail
    }
    limit
    page
    totalCount
    totalPages
  }
}
`;

