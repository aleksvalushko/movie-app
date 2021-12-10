import { Notification } from 'element-ui'

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

export {
  errorNotification
}
