import { GetterTree } from 'vuex';
import { Post } from '@/models/post.model';
import { RootState } from '@/store';
import { State } from '@/store/modules/posts/state';

export type Getters = {
  getPosts(state: State): Post[] | [];
}

export const getters: GetterTree<State, RootState> & Getters = {
  getPosts: (state) => state.data,
};
