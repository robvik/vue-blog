import { createStore, createLogger } from 'vuex';
import { store as posts, PostsStore, State as PostsState } from '@/store/modules/posts';

export type RootState = {
  posts: PostsState;
};

export type Store = PostsStore<Pick<RootState, 'posts'>>;

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: {
    posts
  },
});

export function useStore(): Store {
  return store as Store;
}