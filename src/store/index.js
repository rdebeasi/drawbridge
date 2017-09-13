import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

function createEmptyUser() {
  // We could use object.Assign here, but this is a little simpler and works in old brwosers.
  return {
    username: '',
    firstName: '',
    lastName: '',
    token: '',
  };
}

const state = {
  user: createEmptyUser(),
};

const mutations = {
  logIn() {
    state.user = createEmptyUser();
  },
  logOut() {
    // TODO
  },
};

mutations.logIn();
