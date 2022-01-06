export default {
  state: {
    active: 'dataOverview', // 菜单选中
    list: [
      { value: 'dataOverview', label_cn: '数据概况', label_en: 'Data overview', icon: 'statistics' },
      {
        value: 'article',
        label_cn: '文章管理',
        label_en: 'Article management',
        icon: 'article-module',
        children: [
          { value: 'articleIndex', label_cn: '列表', label_en: 'List', icon: 'article' },
          { value: 'articleWriting', label_cn: '写作', label_en: 'Writing', icon: 'edit-article' },
          { value: 'articleCategory', label_cn: '分类', label_en: 'Category', icon: 'category' },
          { value: 'articleTag', label_cn: '标签', label_en: 'Tag', icon: 'tag' }
        ]
      },
      { value: 'leaveMessage', label_cn: '留言', label_en: 'Leaving message', icon: 'leave-message' },
      { value: 'user', label_cn: '用户', label_en: 'User', icon: 'user' }
    ]
  },
  mutations: {
    SET_ACTIVE: (state, active) => {
      state.active = active
    }
  },
  actions: {
    setActive({ commit }, active) {
      commit('SET_ACTIVE', active)
    }
  }
}
