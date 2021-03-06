const sidebarx = {
  state: {
    msg: 'made by bibinbin',
    activeIndex: 0,
    toggleShow: true,
    items: [
      {fontAwesome: 'fa fa-dashboard', value: 'Dashboard'},
      {fontAwesome: 'fa fa-search', value: 'query'},
      {fontAwesome: 'fa fa-list', value: 'indices'},
      {fontAwesome: 'fa fa-table', value: 'Mapping'},
      {fontAwesome: 'fa fa-gears', value: 'Tools'},
      {fontAwesome: 'fa fa-comments-o', value: 'Help'}
    ]
  },
  mutations: {
    SET_MSG: (state, msg) => {
      state.msg = msg
    },
    SET_ACTIVE_INDEX: (state, index) => {
      state.activeIndex = index
    },
    SET_TOGGLE_SHOW: (state, show) => {
      state.toggleShow = show
    }
  },
  actions: {
    ToggleShow ({ commit }, show) {
      commit('SET_TOGGLE_SHOW', !show)
    },
    SetActiveIndex ({ commit }, index) {
      commit('SET_ACTIVE_INDEX', index)
    }
  }
}
export default sidebarx
