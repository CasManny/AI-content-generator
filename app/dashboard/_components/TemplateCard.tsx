import { ITemplate } from '@/types'
import Image from 'next/image'
import React from 'react'

const TemplateCard = ({template}: { template: ITemplate}) => {
  return (
    <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
      <Image src={template.icon} alt={template.name} width={50} height={50} />
      <h2 className='font-medium text-lg'>{template.name }</h2>
      <p className='text-gray-500 line-clamp-3'>{template.desc }</p>
    </div>
  )
}

export default TemplateCard