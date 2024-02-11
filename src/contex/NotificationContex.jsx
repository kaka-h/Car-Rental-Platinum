import React from 'react'
import { createContext, useState } from 'react'

export const NotificationContex = createContext()

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState("")
  const setNotif = (notif) => {
    setNotification(notif)
  }
  return (
    <NotificationContex.Provider value={{ setNotif, notification }}>{children}</NotificationContex.Provider>
  )
}

export default NotificationProvider
