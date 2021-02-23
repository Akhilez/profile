import React from "react"
import ProfilePage from "../components/profile/profile"
import { GlobalWrapper } from "../components/profile/profile_components"

export default function MyApp() {
  return (
    <GlobalWrapper>
      <ProfilePage />
    </GlobalWrapper>
  )
}
