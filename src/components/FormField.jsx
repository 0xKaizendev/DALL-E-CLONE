import React from 'react'

const FormField = ({labelName,name,type,placeholder,value,handleChange,handleSurprisePrompt,isSurpriseMe,surpriseLabel,home}) => {
  return (
    <div>
      <div className='flex gap-3 mb-2 items-center'>
      <label htmlFor={name} className={`block ${home? "text-lg":"text-sm"} font-medium`}>{labelName}</label>
      {isSurpriseMe && (<button type='button' onClick={handleSurprisePrompt} className="font-semibold text-xs py-1 bg-primary px-2 rounded-[5px]">{surpriseLabel}</button>)}
      </div>
      <input type={type} name={name} placeholder={placeholder} value={value}  onChange={handleChange} className="bg-gray-50 border-gray-300 border  text-primary text-sm rounded-lg focus:ring-primary focus:border-primary w-full p-3"/>
    </div>
  )
}

export default FormField
