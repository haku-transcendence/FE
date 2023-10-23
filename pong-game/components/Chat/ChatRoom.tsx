import styles from '../../styles/components/Chat/ChatRoom.module.css'
import Image from 'next/image'
import closeRoom from '@/public/img/chat/closeRoom.svg'
import roomOut from '@/public/img/chat/roomOut.svg'
import submitMessage from '@/public/img/chat/enterInput.svg'
import userToggle from '@/public/img/chat/userToggle.svg'
import userImage from '@/public/img/chat/userProfileImage.svg'
import lock from '@/public/img/chat/lock.svg'

function ChatRoom(): JSX.Element {
  return (
    <div className={styles.chatRoom}>
      <div className={styles.chatShow}>
        <div className={styles.chatInfoLog}>
          <div className={styles.chatInfo}>
            <span>
              <Image src={closeRoom} alt={'out room'} />
            </span>
            <strong>트센</strong>
            <span>
              <Image src={roomOut} alt={'roomOut'} />
            </span>
          </div>
          <div className={styles.chatLog}>
            <section className={styles.opponentMessage}>
              <div className={styles.opponentUserMessageAndTime}>
                <strong className={styles.opponentUserNickName}>
                  sangyeki
                </strong>
                <div className={styles.opponentUserMessageTime}>12 : 32</div>
              </div>
              <div className={styles.opponentUserMessage}>
                누구세요? 누구세요?
                누구세요?누구세요?누구세요?누구세요?누구세요?누구세요?누구세요?누구세요?누구세요?누구세요?
              </div>
            </section>
            <section className={styles.myMessage}>
              <div className={styles.myMessageContainer}>
                <div className={styles.myUserMessageAndTime}>
                  <div className={styles.myUserMessageTime}>12 : 32</div>
                  <strong className={styles.myUserNickName}>sangyeki</strong>
                </div>
                <div className={styles.myUserMessage}>
                  저는 말하는 감자입니다 저는 말하는 감자입니다 저는 말하는
                  감자입니다 저는 말하는 감자입니다 저는 말하는 감자입니다 저는
                  말하는 감자입니다
                </div>
              </div>
            </section>
            <section className={styles.opponentMessage}>
              <div className={styles.opponentUserMessageAndTime}>
                <strong className={styles.opponentUserNickName}>
                  sangyeki
                </strong>
                <div className={styles.opponentUserMessageTime}>12 : 32</div>
              </div>
              <div className={styles.opponentUserMessage}>
                누구세요? 누구세요?
              </div>
            </section>
            <section className={styles.myMessage}>
              <div className={styles.myMessageContainer}>
                <div className={styles.myUserMessageAndTime}>
                  <div className={styles.myUserMessageTime}>12 : 32</div>
                  <strong className={styles.myUserNickName}>sangyeki</strong>
                </div>
                <div className={styles.myUserMessage}>
                  저는 말하는 감자입니다 저는 말하는 감자입니다 저는 말하는
                </div>
              </div>
            </section>
            <section className={styles.opponentMessage}>
              <div className={styles.opponentUserMessageAndTime}>
                <strong className={styles.opponentUserNickName}>
                  sangyeki
                </strong>
                <div className={styles.opponentUserMessageTime}>12 : 32</div>
              </div>
              <div className={styles.opponentUserMessage}>
                저도 감자인데 안녕하세요
              </div>
            </section>
            <section className={styles.myMessage}>
              <div className={styles.myMessageContainer}>
                <div className={styles.myUserMessageAndTime}>
                  <div className={styles.myUserMessageTime}>12 : 32</div>
                  <strong className={styles.myUserNickName}>sangyeki</strong>
                </div>
                <div className={styles.myUserMessage}>네 안녕하세요</div>
              </div>
            </section>
            <section className={styles.opponentMessage}>
              <div className={styles.opponentUserMessageAndTime}>
                <strong className={styles.opponentUserNickName}>
                  sangyeki
                </strong>
                <div className={styles.opponentUserMessageTime}>12 : 32</div>
              </div>
              <div className={styles.opponentUserMessage}>
                다른 감자를 만나다니 반갑네요
              </div>
            </section>
            <section className={styles.myMessage}>
              <div className={styles.myMessageContainer}>
                <div className={styles.myUserMessageAndTime}>
                  <div className={styles.myUserMessageTime}>12 : 32</div>
                  <strong className={styles.myUserNickName}>sangyeki</strong>
                </div>
                <div className={styles.myUserMessage}>저는</div>
              </div>
            </section>
          </div>
          {/* <div className={styles.chatPassword}>
            <div className={styles.chatRoomName}>
              <Image src={lock} alt={'password room'} />
              <h1 className={styles.RoomName}>채팅방 이름</h1>
            </div>
            <p className={styles.wrongPassword}>잘못된 비밀번호 입니다.</p>
            <div className={styles.chatPasswordInput}>
              <input
                type="password"
                className={styles.passwordInput}
                required
              />
              <span className={styles.passwordInputPlaceHolder}>
                비밀번호를 입력해주세요.
              </span>
              <button className={styles.submitPassword}>
                <Image src={submitMessage} alt={'submit message'} width={30} />
              </button>
            </div>
          </div> */}
        </div>
        <div className={styles.chatInput}>
          <input type="text" className={styles.messageInput} required />
          <span className={styles.folderNameInputPlaceHolder}>
            Message Input
          </span>
          <button className={styles.submitMessage}>
            <Image src={submitMessage} alt={'submit message'} />
          </button>
        </div>
      </div>
      <div className={styles.chatUserSection}>
        <div className={styles.chatUserList}>
          <ul className={styles.chatUserListContainer}>
            <li className={styles.chatUserListElement}>
              <div className={styles.userProfileImage}>
                <Image src={userImage} alt={'user profile image'} />
              </div>
              <span className={styles.userNickName}>sangyeki</span>
              <Image
                src={userToggle}
                alt={'user function'}
                width={15}
                height={15}
              />
            </li>
            <li className={styles.chatUserListElement}>
              <div className={styles.userProfileImage}>
                <Image src={userImage} alt={'user profile image'} />
              </div>
              <span className={styles.userNickName}>sangyeki</span>
              <Image
                src={userToggle}
                alt={'user function'}
                width={15}
                height={15}
              />
            </li>
            <li className={styles.chatUserListElement}>
              <div className={styles.userProfileImage}>
                <Image src={userImage} alt={'user profile image'} />
              </div>
              <span className={styles.userNickName}>sangyeki</span>
              <Image
                src={userToggle}
                alt={'user function'}
                width={15}
                height={15}
              />
            </li>
            <li className={styles.chatUserListElement}>
              <div className={styles.userProfileImage}>
                <Image src={userImage} alt={'user profile image'} />
              </div>
              <span className={styles.userNickName}>sangyeki</span>
              <Image
                src={userToggle}
                alt={'user function'}
                width={15}
                height={15}
              />
            </li>
            <li className={styles.chatUserListElement}>
              <div className={styles.userProfileImage}>
                <Image src={userImage} alt={'user profile image'} />
              </div>
              <span className={styles.userNickName}>sangyeki</span>
              <Image
                src={userToggle}
                alt={'user function'}
                width={15}
                height={15}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ChatRoom
