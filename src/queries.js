import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      summary
      medium_cover_image
      rating
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movidId: Int!) {
    movie(id: $movieId) {
      title
      rating
      medium_cover_image
      description_intro
      language
      genres
    }
  }
`;
