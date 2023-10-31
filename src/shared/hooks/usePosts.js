import { useEffect, useState } from 'react';
import axios from 'axios';

const usePosts = (limit, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${limit}`,
    }).then((response) => {
      console.log('HOOK DATA', response.data);
      setPostsList((prevBooks) => {
        return [...new Set([...prevBooks, ...response.data.map((item) => item)])];
      });
      setHasMore(response.data.length > 0);
      setLoading(false);
    }).catch(() => {
      setError(true);
    });
  }, [limit, pageNumber]);

  return {loading, error, hasMore, postsList};
};

export default usePosts;
