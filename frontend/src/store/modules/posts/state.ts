import { Post } from '@/models/post.model';

export type State = {
  data: Post[] | [];
}

export const state: State = {
  data: [],
};
