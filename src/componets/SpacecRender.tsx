import { useState, useEffect } from "react"

import axios from "axios";

interface DashboardProps {
  ipAdress: string;
  location: string;
  timezone: string;
  isp: string;
}

const SpacecRender = () => {
    
  const [andress, setAdress] = useState <DashboardProps|null>(null);

   useEffect (() => {

    const initialData = async () => {
    const requi = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_APP_API_KEY}&ipAddress=8.8.8.8`)
    setAdress(requi.data)
    }
    
    initialData()
   }, [])


  return (
    

    <>
    <article className="">
              <div
                className=" bg-slate-300
                 rounded-xl
                  p-8
                   shadow
                  max-w-6xl 
                  mx-auto 
                  grid
                   grid-cols-1
                 gap-5 
                text-center 
                   md:grid-cols-2 
                   lg:grid-cols-4 
                   lg:gap-0 
                   lg:text-left
                   -mt-20
                   absolute
                   inset-x-10
                    lg:-mb-32"
                style={{
                  zIndex: 10000,
                }}
              >
                <article className="lg:border-r lg:border-slate-400 p-6">
                  <h2 className="text-sm uppercase text-slate-600">
                    IP Address
                  </h2>
                  <p className="font-bold text-slate-900 text-2xl">
                    {andress?.ipAdress}
                  </p>
                </article>

                <article className="lg:border-r lg:border-slate-400 p-6">
                  <h2 className="text-sm uppercase text-slate-600">Location</h2>
                  <p className="font-bold text-slate-900 text-2xl">
                    {andress?.location}
                  </p>
                </article>

                <article className="lg:border-r lg:border-slate-400 p-6">
                  <h2 className="text-sm uppercase text-slate-600">Timezone</h2>
                  <p className="font-bold text-slate-900 text-2xl">
                  {andress?.timezone}
                  </p>
                </article>

                <article className="p-6">
                  <h2 className="text-sm uppercase text-slate-600">ISP</h2>
                  <p className="font-bold text-slate-900 text-2xl">
                   {andress?.isp}
                  </p>
                </article>
              </div>
            </article>
    </>
  )
}

export default SpacecRender
