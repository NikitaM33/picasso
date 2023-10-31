import React, {
  useEffect,
  useState,
  memo,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './style.module.scss';
import { fetchPosts } from '../../app/redux/actions/posts';
import { CommentCard } from '../../features';

// TEST ************************************ */
import { usePosts } from '../../shared/hooks';

const Comment = () => {
  // const dispatch = useDispatch();
  // const { posts } = useSelector(({ posts }) => posts);
  const [currentPage, setCurrentPage] = useState(1);
  // const [fetching, setFetching] = useState(true);

  // ************************************************************
  const { loading, error, hasMore, postsList } = usePosts(5, currentPage);

  const observer = useRef();
  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  // ************************************************************

  // const scrollHandler = (e) => {
  //   if (
  //     e.target.documentElement.scrollHeight -
  //       (e.target.documentElement.scrollTop + window.innerHeight) <
  //     100
  //   ) {
  //     setFetching(true);
  //   }
  // };

  const sayHello = () => {
    console.log('Hello');
  };

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler);

  //   return function () {
  //     document.removeEventListener('scroll', scrollHandler);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (fetching) {
  //     console.log('FETCHING...');
  //     dispatch(fetchPosts(currentPage, 5));
  //     setFetching(false);
  //     setCurrentPage(currentPage + 1);
  //   }
  // }, [fetching]);

  return (
    <>
      {postsList &&
        postsList.map((item, index) => {
          if (postsList.length === index + 1) {
            return (
              <div ref={lastPostElementRef} key={item.id}>
                <CommentCard
                  title={item.id}
                  body={item.body}
                  btnListener={sayHello}
                />
              </div>
            );
          } else {
            return (
              <div key={item.id}>
                <CommentCard
                  title={item.id}
                  body={item.body}
                  btnListener={sayHello}
                />
              </div>
            );
          }
        })}
      <div>
        <h3>{loading && 'Loading...'}</h3>
      </div>
      <div>
        <h3>{error && 'Error'}</h3>
      </div>
    </>
  );
};

export default Comment;
