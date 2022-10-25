import axios from 'axios';
import { IComment } from '../types/comments';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
export const commentURL = `${baseURL}item/`;

export const getComment = async (commentId: number): Promise<IComment> => {
  const result = await axios.get(`${commentURL + commentId}.json`);

  return result.data;
};


export async function getNestedComments(commenstIds: number[]) {
  const result = await Promise.all(commenstIds.map(id => {
    return getComment(id);
  }))

  return result;
}