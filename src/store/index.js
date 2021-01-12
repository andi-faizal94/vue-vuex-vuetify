import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: [{
            name: '',
            alamat: '',
            program: '',
            status: false

        }],

    },

    mutations: {
        getUser(state, data) {
            // menambahkan data dari array
            state.user.push(data)
        },
        getAkun(state, data) {
            state.akun.push(data)
        },

        // membuat tombol delete di admin home
        // di fungsi delete mengambil parameter state dan index
        //  dengan mengambil state.user.splice dengan parameter index dan berapa jumlah yang akan dihapus
        delete(state, index) {
            state.user.splice(index, 1)
        }


    },
    actions: {
        // getUser(status) {
        //     status.commit('getUser')
        // }

    },
    modules: {}
})