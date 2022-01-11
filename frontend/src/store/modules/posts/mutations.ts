import { MutationTree } from 'vuex';
import { Post } from '@/models/post.model';
import { PostsMutationTypes } from '@/store/modules/posts/mutation-types';
import { State } from '@/store/modules/posts/state';

export type Mutations<S = State> = {
  [PostsMutationTypes.SET_DATA](state: S, payload: Post[]): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [PostsMutationTypes.SET_DATA](state: State, posts: Post[]) {
    state.data = posts;
  },
};
