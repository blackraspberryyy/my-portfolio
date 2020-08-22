export const state = () => ({
  section: 0,
})

export const mutations = {
  setSection(state, section) {
    state.section = section
  },
}

export const getters = {
  section(state) {
    return state.section
  },
}
