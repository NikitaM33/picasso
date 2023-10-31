import { FETCH_POSTS } from '../../../shared/config';

const initialState = {
  posts: [],
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: [...new Set([...state.posts, ...action.payload])],
        // posts: action.payload.map((item) => posts.push(item)),
        // posts: action.payload.map(item => item),
      };

    default:
      return state;
  }
};

export default posts;
