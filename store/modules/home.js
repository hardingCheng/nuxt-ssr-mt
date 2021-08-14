const state = () => ({ menus: [], hotPlace: [] })

const mutations = {
  setMenu(state, val) {
    state.menus = val
  },
  setHotPlace(state, val) {
    state.hotPlace = val
  },
}

const actions = {
  setMenu: ({ commit }, menu) => {
    commit('setMenu', menu)
  },
  setHotPlace: ({ commit }, hotPlace) => {
    commit('setHotPlace', hotPlace)
  },
}

export default { namespaced: true, state, mutations, actions }
