import { ActionTree, ActionContext } from 'vuex';
import { Mutations } from '@/store/modules/posts/mutations';
import { PostsActionTypes } from '@/store/modules/posts/action-types';
import { PostsMutationTypes } from '@/store/modules/posts/mutation-types';
import { RootState } from '@/store';
import { State } from '@/store/modules/posts/state';

import PostService from '@/services/post.service';

/**
 * AugmentedActionContext
 */
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

/**
 * Action interfaces
 */
export interface Actions {
  [PostsActionTypes.FETCH_POST]({ commit }: AugmentedActionContext, payload: any): Promise<any>;
  [PostsActionTypes.FETCH_POSTS]({ commit }: AugmentedActionContext): Promise<any>;
  [PostsActionTypes.CREATE_POST]({ commit }: AugmentedActionContext, payload: any): Promise<any>;
  [PostsActionTypes.UPDATE_POST]({ commit }: AugmentedActionContext, payload: any): Promise<any>;
  [PostsActionTypes.DELETE_POST]({ commit }: AugmentedActionContext, payload: any): Promise<any>;
}

/**
 * Action methods 
 */
export const actions: ActionTree<State, RootState> & Actions = {
  async [PostsActionTypes.FETCH_POST]({ commit }, payload: any) {
    const post = await PostService.get(Number(payload.id))
    commit(PostsMutationTypes.SET_DATA, post.data);
    return post.data;
  },
  async [PostsActionTypes.FETCH_POSTS]({ commit }) {
    const posts = await PostService.getAll();
    commit(PostsMutationTypes.SET_DATA, posts.data);
    return posts.data;
  },
  async [PostsActionTypes.CREATE_POST]({ commit }, payload: any) {
    const createdPost = await PostService.create(payload.data);
    commit(PostsMutationTypes.SET_DATA, createdPost.data);
    return createdPost.data;
  },
  async [PostsActionTypes.UPDATE_POST]({ commit }, payload: any) {
    const updatedPost = await PostService.update(Number(payload.id), payload.data);
    commit(PostsMutationTypes.SET_DATA, updatedPost.data);
    return updatedPost.data;
  },
  async [PostsActionTypes.DELETE_POST]({ commit }, payload: any) {
    const deletedPost = await PostService.delete(Number(payload.id));
    commit(PostsMutationTypes.SET_DATA, deletedPost.data);
    return deletedPost.data;
  },
};
