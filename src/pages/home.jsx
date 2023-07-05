import React from 'react'
import { FaBox } from "react-icons/fa";
import { priceCardData } from '../constants/constants';
import PriceCard from '../components/Cards/priceCard';
import PriceDataTable from '../components/Tables/priceDataTable';
import { tableDataArray } from '../constants/constants';

export default function Home() {
  const icons = ["icon1", "icon2", "icon3", "icon4", "icon5"]
  return (
    <main className='flex border-2 h-[97.5vh] m-2'>

      {/*left section*/}
      <section className='space-y-4 flex flex-col px-4 pt-16 bg-slate-300 h-full relative'>
        {
          icons?.map((i) => {
            return <FaBox color='white' fontSize={24} />
          })
        }
        <button className='bg-slate-600 rounded-full p-2 absolute bottom-1 left-[9px] text-white'>OK</button>
      </section>

      {/* right section */}
      <section className='flex-1 px-10 flex flex-col'>

        <div className='flex my-2'>
          <p className='font-semibold text-2xl my-auto'>Hi, Jennie Moss</p>
          <p className='ml-auto text-xs mt-auto'>Last scanned on march 20th,2023 11:30 PM IST</p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-12 mx-auto my-4">
          {
            priceCardData?.map((i) => {
              return <PriceCard data={i} key={i?.id}/>
            })
          }
        </div>

        <div className='flex flex-col space-y-4'>
          {
            tableDataArray?.map((priceTableData) => {
              return <PriceDataTable priceTableData={priceTableData} key={priceTableData?.id}/>
            })
          }
        </div>
      </section>
    </main>
  )
}
