"use client"
import { useState } from "react"
import SearchSection from "./_components/SearchSection"
import TemplateListSection from "./_components/TemplateListSection"

const DashboardHomePage = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>("")

  const handleSearchTerm = (e: string) => {
    setUserSearchInput(e)
  }
  return (
    <div>
      <SearchSection onSearchInput={handleSearchTerm} />
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  )
}

export default DashboardHomePage