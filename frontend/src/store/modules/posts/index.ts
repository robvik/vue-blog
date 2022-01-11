import { Store as VuexStore, CommitOptions, DispatchOptions, Module } from 'vuex';
import { RootState } from '@/store';
import { actions, Actions } from '@/store/modules/posts/actions';
import { getters, Getters } from '@/store/modules/posts/getters';
import { mutations, Mutations } from '@/store/modules/posts/mutations';
import { state } from '@/store/modules/posts/state';
import type { State } from '@/store/modules/posts/state';

export { State };
  
export type PostsStore<S = State> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
      key: K,
      payload: P,
      options?: CommitOptions
    ): ReturnType<Mutations[K]>;
  } & {
    dispatch<K extends keyof Actions>(
      key: K,
      payload?: Parameters<Actions[K]>[1],
      options?: DispatchOptions
    ): ReturnType<Actions[K]>;
  } & {
    getters: {
      [K in keyof Getters]: ReturnType<Getters[K]>
    };
};
  
export const store: Module<State, RootState> = {
    state,
    getters,
    mutations,
    actions
};
  