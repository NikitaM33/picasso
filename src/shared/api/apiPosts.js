import { instance } from './apiBase';
import { GET_COMMETNS } from '../config';

export const apiPosts = {
  async getPosts (page, limit) {
    return await instance.get(`${GET_COMMETNS}?_page=${page}&_limit=${limit}`);
  },
  async getPostById (postId) {
    return await instance.get(`${GET_COMMETNS}/${postId}`);
  }
}
