import { useJoinChannel } from '@/store/chat'
import { useModalState, useResponseModalState } from '@/store/store'
import { instance } from '@/util/axios'

interface ChatEditAdminProps {
  channelUserType: 'OWNER' | 'ADMIN' | 'MEMBER'
  channelUserId: number
  nickname: string
  setChannelUserType: (v: 'OWNER' | 'ADMIN' | 'MEMBER') => void
}

export default function ChatEditAdmin(props: ChatEditAdminProps) {
  const { setModalName } = useModalState()
  const responseModal = useResponseModalState()
  const { channelUserInfo, setChannelUserInfo } = useJoinChannel()
  // function changeArrayItem(newType, idToChange) {
  //   const result = channelUserInfo.map((item) => {
  //     if (item.nickname === idToChange) {
  //       return {
  //         ...item,
  //         channelUserType: newType,
  //       }
  //     } else {
  //       return {
  //         ...item,
  //       }
  //     }
  //   })

  //   setChannelUserInfo(result)
  // }
  function changeArrayItem(newType, idToChange) {
    const result = channelUserInfo.map((item) => {
      if (item.nickname === idToChange) {
        return {
          ...item,
          channelUserType: newType,
        }
      } else {
        return {
          ...item,
        }
      }
    })
    setChannelUserInfo(result)
  }
  // function changeArrayItem(newType, idToChange) {
  //   const itemToChange = channelUserInfo.find((item) => item.nickname === idToChange)
  //   if (itemToChange) {
  //     itemToChange.channelUserType = newType
  //   }
  //   const resData = channelUserInfo.filter(({ nickname }) => nickname != idToChange)
  //   console.log(resData)
  //   resData.push(itemToChange)
  //   setChannelUserInfo(resData)
  // }
  // function changeArrayItem(newType, idToChange) {
  //   channelUserInfo.filter((item) => {
  //     if (item.nickname === idToChange) {
  //       item.channelUserType = newType
  //     }
  //   })
  //   setChannelUserInfo
  // }
  // function changeArrayItem(newType, idToChange) {
  //   const itemToChange = channelUserInfo.filter(({nickname}) => nickname != idToChange)

  //   setChannelUserInfo([...channelUserInfo])
  //   console.log(channelUserInfo)
  // }

  const setAdminHandler = async () => {
    console.log(props.channelUserId)
    await instance
      .patch('/channels/admin', {
        channelUserId: props.channelUserId,
      })
      .then(function (res) {
        console.log(res)
        if (props.channelUserType == 'ADMIN') {
          // props.setChannelUserType('MEMBER')}
          changeArrayItem('MEMBER', props.nickname)
        } else {
          // props.setChannelUserType('ADMIN')
          changeArrayItem('ADMIN', props.nickname)
        }
      })
  }

  const setAdminModal = () => {
    const viewText = props.channelUserType == 'ADMIN' ? '관리자 해제' : '관리자 임명'
    setModalName('response')
    responseModal.setResponseModalState(
      '관리자 임명',
      `${props.nickname}님을 ${viewText} 하시겠습니까?`,
      setAdminHandler,
    )
  }

  return (
    <li>
      {props.channelUserType === 'ADMIN' ? (
        <button onClick={setAdminModal}>관리자 해제</button>
      ) : (
        <button onClick={setAdminModal}>관리자 임명</button>
      )}
    </li>
  )
}
