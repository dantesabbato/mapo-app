import { createStore } from "vuex"

export default createStore({
  state: {
    photo_path: ""
  },
  mutations: {
    setPhotoPath (state, path) { state.photo_path = path }
  }
})
