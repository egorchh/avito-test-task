import axios from 'axios';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
export const commentURL = `${baseURL}item/`;

export const getComment = async (commentId: number): Promise<object> => {
  const result = await axios.get(`${commentURL + commentId}.json`);

  return result.data;
};
