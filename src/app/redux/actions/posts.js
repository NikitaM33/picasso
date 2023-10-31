import { apiPosts } from '../../../shared/api/apiPosts';
import { FETCH_POSTS } from '../../../shared/config';

export const setPosts = (payload) => ({ type: FETCH_POSTS, payload });

export const fetchPosts = (page, limit) => async (dispatch) => {
  try {
    const response = await apiPosts.getPosts(page, limit);
    dispatch(setPosts(response.data));
    // dispatch(setPosts(response));
  } catch (error) {
    console.warn('Fetch posts is faild.', error);
  }
};
