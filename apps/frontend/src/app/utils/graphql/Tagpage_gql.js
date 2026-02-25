import { gql } from "graphql-request";


export const TP_SPONSERD_BLOGS = gql`
 query TagPageSponserd_Blogs($tag: String) {
  TagPageSponserd_Blogs(tag: $tag) {
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


export const TP_SLIDER = gql`

query TagPageSliderLeftSide($tag: String) {
  TagPageSliderLeftSide(tag: $tag) {
    _id
    authorDetails {
      _id
      slug
      avatar
      username
    }
    timeRequired
    createdAt
    subTitle
    slug
    tags {
      _id
      name
      slug
    }
    thumbnail
    title
  }
}
`;



export const TP_BAR_ONE_LATEST_BLOGS = gql`
query TagPageLatestBlogsBar($tag: String) {
  TagPageLatestBlogsBar(tag: $tag) {
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