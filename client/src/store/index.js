/* eslint no-param-reassign: "off" */

import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);
axios.defaults.baseURL = `https://${process.env.IDM_HOST}/ipa/session`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.referrer = `https://${process.env.IDM_HOST}/ipa/`;

function createEmptyUser() {
  // We could use object.Assign here, but this is a little simpler and works in old brwosers.
  return {
    username: '',
    firstName: '',
    lastName: '',
    token: '',
  };
}

const store = new Vuex.Store({
  state: {
    user: createEmptyUser(),
  },
  mutations: {
    logIn(state, payload) {
      axios.post('/login_password', {
        user: payload.user,
        password: payload.password,
      })
      .then((response) => {
        console.log(response);
      });
    },
    logOut(state) {
      state.user = createEmptyUser();
    },
  },
});

export default store;
