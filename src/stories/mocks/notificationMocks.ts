import { YuriNotification } from '../../components/notifications/NotificationMenu'

export const notificationsData: YuriNotification[] = [
  {
    id: 1,
    title: 'Notificação 1',
    description: 'Descrição da notificação 1',
    viewed: false,
    created_at: new Date(),
    updated_at: new Date(),
    viewed_at: null,
    notifiable_uuid: '165165asdsadsad-sadsadsa12132'
  },
  {
    id: 2,
    title: 'Notificação 2',
    description: 'A descrição também pode receber um link: https://google.com',
    viewed: false,
    created_at: new Date(),
    updated_at: new Date(),
    viewed_at: null
  },
  {
    id: 3,
    title: 'Notificação 3',
    description: 'Descrição da notificação 3',
    viewed: true,
    created_at: new Date(),
    updated_at: new Date(),
    viewed_at: new Date()
  }
]
