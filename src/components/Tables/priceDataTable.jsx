import React from 'react'

function PriceDataTable({
  priceTableData
}) {
  return (
    <div className='border-[1px] border-slate-800 px-4 w-full rounded-md'>
      <h3 className='text-lg my-4'>{priceTableData?.title}</h3>
      <table className='w-full mb-4'>
        <thead>
          <tr className='border-t-[1px] border-b-[1px] border-slate-800'>
            {
              priceTableData?.columns?.map((column) => {
                return <th align='left' className={`${column?.columnCss} py-[4px] px-4 font-semibold`} key={column?.accessorKey}>{column?.header}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            priceTableData?.data?.map((x) => {
              return <tr>
                {
                  priceTableData?.columns?.map((column) => {
                    return column?.accessorKey == "action" ? (
                      <td className='flex space-x-2'>
                        <button className='mt-2 border-[1px] rounded-md px-4 border-black'>Accept</button>
                        <button className='mt-2 border-[1px] rounded-md px-4 border-black'>Reject</button>
                      </td>
                    ) : (
                      <td className={`${column?.dataCss} py-[6px] px-4`}>{x[column?.accessorKey]}</td>
                    )
                  })
                }
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default PriceDataTable