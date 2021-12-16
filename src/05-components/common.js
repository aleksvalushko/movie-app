import { Notification } from 'element-ui'
import Vue from 'vue'

const errorNotification = async (error) => {
  let msg = error.toString()
  if (msg.lastIndexOf(401) > 0) {
    msg = 'Вы не авторизованы!'
  }
  if (error.response?.data != null && error.response?.data?.message != null) {
    msg = error.response.data.message
  }

  Notification.error({
    title: 'Внимание!',
    message: msg
  })
}

const createLoading = (title) => {
  const text = title ?? 'Выполняется запрос'
  return Vue.prototype.$loading({
    lock: true,
    text,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

// eslint-disable-next-line import/no-unused-modules
export {
  errorNotification,
  createLoading
}
