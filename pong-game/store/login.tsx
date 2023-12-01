import { create } from 'zustand'

const defaultProfileImage = process.env.NEXT_PUBLIC_API_DEFAULT_PROFILE_IMAGE

interface useNicknameImageProps {
  avatar: string
  myNickname: string
  userId: string
  setMyNickname: (v: string) => void
  setAvatar: (v: string) => void
  setUserId: (v: string) => void
}

export const useNickNameImage = create<useNicknameImageProps>((set) => ({
  userId: null,
  myNickname: 'nickname',
  avatar: defaultProfileImage,
  setMyNickname: (myNickname) => set({ myNickname }),
  setAvatar: (avatar) => set({ avatar }),
  setUserId: (userId) => set({ userId }),
}))
