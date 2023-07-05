import React from 'react'

export default function PriceCard({
  data
}) {
  return (
    <div className={`py-4 ${data?.bgColor} space-y-2 border-[1px] border-slate-700 rounded-xl w-64`}>
      <p className='text-center text-xl font-bold'>$ {data?.price}</p>
      <p className='text-center text-sm font-semibold'>{data?.description}</p>
    </div>
  )
}
