  export const state = () => ({
        user: null,
    });
    //export const  mutations = {},
    export const actions = {
        async registerUser({commit}, {email, password}) {
          const user = await firebase.auth().createUserWithEmailAndPassword(email, password)  
          console.log(user);
        }
    };
    export const getters = {
        user(state) {
            return state.user;
        },
        checkUser (state) {
            return state.user !== null;
        }
    };
