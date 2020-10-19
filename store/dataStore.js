export const state = () => ({
  routeName: 'Route name from store'
})

export const mutations = {
  SET_ROUTE_NAME (state, name) {
    state.routeName = name
  }
}

export const actions = {
  setRouteName ({ commit }, name) {
    commit('SET_ROUTE_NAME', name)
  }
}

export const getters = {
  getRouteName (state) {
    return state.routeName
  }
}
