import { socket } from '@/socket/socket'
import { useEffect } from 'react'
import GameInvitation from './Channel/GameInvitation'
import PrivateInvitation from './Channel/PrivateInvitation'
import ChannelMessage from './Channel/ChannelMesage'
import GameInvitationReply from './Channel/GameInvitationReply'
import ErrorMeassage from './Channel/ErrorMessage'
import { useNickNameImage } from '@/store/login'

export default function ChannelSocketHandler() {
  const { myNickname } = useNickNameImage()

  useEffect(() => {
    try {
      if (myNickname !== null && myNickname !== 'nicknameDefault') {
        socket.connect()
        socket.on('connect', () => {
          console.log('channel connect')
        })
      }
    } catch (error) {
      console.log('Error : ', error)
    }
    return () => {
      socket.close()
      socket.disconnect()
      // socket.off('connect')
    }
  }, [myNickname])
  return (
    <>
      <ChannelMessage />
      <GameInvitation />
      <PrivateInvitation />
      <GameInvitationReply />
      <ErrorMeassage />
    </>
  )
}
