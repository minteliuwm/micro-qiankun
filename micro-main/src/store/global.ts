import { MutationTree } from 'vuex';

interface IGlobalState {
  userName: string;
}

const state: IGlobalState = {
  userName: 'Admin'
};

const mutations: MutationTree<IGlobalState> = {
  SET_USERINFO(state: IGlobalState, userName: string) {
    state.userName = userName;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
