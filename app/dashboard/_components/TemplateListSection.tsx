import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'
import { templateFormat } from '@/app/(data)/Template'

const TemplateListSection = ({ userSearchInput }: { userSearchInput: string }) => {

  const [templateList, setTemplateList] = useState(templateFormat)
  

  useEffect(() => {
    if (userSearchInput) {
      const filteredData = templateList.filter((item) => item.name.toLowerCase().includes(userSearchInput))
      setTemplateList(filteredData)
    } else {
      setTemplateList(templateFormat)
    }

  }, [userSearchInput])
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 p-10 md:grid-cols-3 gap-3 m-2 '>
      {templateList.map((template, index) => {
        return (
          <TemplateCard key={index} template={template} />
        )
      })}
    </div>
  )
}

export default TemplateListSection