//改变属性状态
export const setMenuItems = (state, data) => {
  state.menuItems = data
}

//将匹配到的某一项删除
export const removeMenuItem = (state, data) => {
  state.menuItems.forEach((item, index) => {
    if (item.id == data.id)
      state.menuItems.splice(index, 1)
  })
}

//将新添加的pizza添加到menuItems
export const pushToMenuItem = (state, data) => {
  state.menuItems.push(data)
}

//更改用户登录状态
export const setUser = (state, user) => {
  if (user != null) {
    state.currentUser = user,
      state.isLogin = true
  } else {
    state.currentUser = null,
      state.isLogin = false
  }
}
