import { MutationTree } from 'vuex';

interface IGlobalState {
  userInfo: IUser;
}

interface IUser {
  userId: string;
  userName: string;
}

const state: IGlobalState = {
  userInfo: {
    userId: 'admin',
    userName: 'Admin'
  }
};

const mutations: MutationTree<IGlobalState> = {
  SET_USERINFO(state: IGlobalState, userInfo: IUser) {
    state.userInfo = userInfo;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
