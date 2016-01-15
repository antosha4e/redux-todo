/*
 * action types
 */

//тип действия
export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

//генератор действия
export function selectReddit(reddit) {
  return {
    type: SELECT_REDDIT,
    reddit
  };
}

export function invalidateReddit(reddit) {
  return {
    type: INVALIDATE_REDDIT,
    reddit
  };
}

export function requestPosts(reddit) {
    return {
        type: REQUEST_POSTS,
        reddit
    };
}

export function receivePosts(reddit, json) {
    return {
        type: RECEIVE_POSTS,
        reddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    };
}