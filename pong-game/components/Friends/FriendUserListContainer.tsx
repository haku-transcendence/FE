import Image from 'next/image'
import styles from './FriendUserListContainer.module.scss'
import profileImage from '@/public/img/chat/userProfileImage.svg'
import toggle from '@/public/img/chat/userToggle.svg'
import React, { useState } from 'react'
import DropDown from '../DropDown/DropDown'

// interface FriendUserListContainerProps {
//   blockFlag: boolean
// }

function FriendUserListContainer(): JSX.Element {
  const [dropDownState, setDropDownState] = useState(false)

  return (
    <>
      <li className={styles.friendUserListContainer}>
        <div className={styles.friendUserImageNickName}>
          <Image src={profileImage} alt={'user profile image'} width={80} height={80} />
          <strong>sangyeki</strong>
        </div>
        <div className={styles.friendUserToggle}>
          <Image
            src={toggle}
            alt={'user edit toggle button'}
            onClick={() => setDropDownState((prev) => !prev)}
          />
          <div>
            {dropDownState && (
              <DropDown
                isDropDownView={dropDownState}
                setIsDropDownView={setDropDownState}
                dropDownState="userProfile"
                userProfile={{
                  id: 3,
                  nickname: 'him',
                  avatar: '1',
                  isFriend: true,
                  isBlocked: false,
                }}
              />
            )}
          </div>
        </div>
      </li>
    </>
  )
}

export default FriendUserListContainer
