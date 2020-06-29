import { MutationTree } from 'vuex';

interface IGlobalState {
  userId: string;
  userName: string;
}

interface IUser {
  userId: string;
  userName: string;
}

const state: IGlobalState = {
  userId: 'admin',
  userName: 'Admin'
};

const mutations: MutationTree<IGlobalState> = {
  SET_USERINFO(state: IGlobalState, userInfo: IUser) {
    state.userId = userInfo.userId;
    state.userName = userInfo.userName;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
