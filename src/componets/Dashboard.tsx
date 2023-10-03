interface DashboardProps {
  ipAdress: string;
  location: string;
  timezone: string;
  isp: string;
 
}

const Dashboard: React.FC<DashboardProps> = ({
  ipAdress,
  location,
  timezone,
  isp,
}) => {
  
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
                    lg:-mb-32
                    "
                style={{
                  zIndex: 10000,
                }}
              >
                <article className="lg:border-r lg:border-slate-400 lg:p-6 md:p-4">
                  <h2 className="text-sm uppercase text-slate-600">
                    IP Address
                  </h2>
                  <p className="font-bold text-slate-900 text-2xl">
                    {ipAdress}
                  </p>
                </article>

                <article className="lg:border-r lg:border-slate-400 lg:p-6 md:p-4">
                  <h2 className="text-sm uppercase text-slate-600">Location</h2>
                  <p className="font-bold text-slate-900 text-2xl">
                   {location}
                  </p>
                </article>

                <article className="lg:border-r lg:border-slate-400 lg:p-6 md:p-4">
                  <h2 className="text-sm uppercase text-slate-600">Timezone</h2>
                  <p className="font-bold text-slate-900 text-2xl">
                   {timezone}
                  </p>
                </article>

                <article className="lg:p-6 md:p-4">
                  <h2 className="text-sm uppercase text-slate-600">ISP</h2>
                  <p className="font-bold text-slate-900 text-2xl">
                    {isp}
                  </p>
                </article>
              </div>
            </article>
    </>
  )
}

export default Dashboard;
