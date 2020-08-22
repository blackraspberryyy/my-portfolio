import Vue from 'vue'

Vue.directive('responsive-col', {
  bind: function (el, binding, vnode) {
    const columns = {
      cols: 1,
      ...binding.value,
    }
    const keys = Object.keys(columns)
    keys.forEach((key) => {
      if (key === 'cols') {
        el.classList.add(`col-${12 / +columns[key]}`)
      } else {
        el.classList.add(`col-${key}-${12 / +columns[key]}`)
      }
    })
  },
})
