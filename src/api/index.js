import axios from 'axios'

/**
 * 获取首页帖子列表
 */

export const postList = () => axios.get(`/api/post/list`);

/**
 * 获取帖子详情
 */
export const postDetail = (id) => axios.get(`/api/post/${id}`);


