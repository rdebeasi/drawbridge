/* Vuex mutations modify their params, so we'll turn off the eslint rule that
 * disallows this behavior. */
/* eslint no-param-reassign: "off" */

import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';

Vue.use(Vuex);
// TODO: Switch to HTTPS
axios.defaults.baseURL = `http://${process.env.IDM_HOST}/ipa/session`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.referrer = `http://${process.env.IDM_HOST}/ipa/`;

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
      const params = qs.stringify({
        user: payload.user,
        password: payload.password,
      });
      axios.post('/login_password', params)
      .then((response) => {
        console.log('logged in');
        console.log(response);
      });
    },
    logOut(state) {
      state.user = createEmptyUser();
    },
  },
});

export default store;
