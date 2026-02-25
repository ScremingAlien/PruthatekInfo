import { gql } from "graphql-request";




export const GET_USER_BY_SLUG = gql`
   query GetUserBySlug($slug: String!) {
     getUserBySlug(slug: $slug) {
          TotalFollowers
          TotalFollowing
          _id
          accountType
          avatar
          bio
          country
          email
          username
          verifyedUser
          slug
     }
}
   `;

export const GET_BLOG_OF_USER = gql`
 query GetBlogsBySlugOfUser($slug: String!, $page: Int, $limit: Int) {
  getBlogsBySlugOfUser(slug: $slug, page: $page, limit: $limit) {
    blog {
      _id
      createdAt
      slug
      thumbnail
      timeRequired
      title
    }
    limit
    page
    totalCount
    totalPages
  }
}
   `;
