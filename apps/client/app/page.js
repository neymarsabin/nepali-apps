"use client";
import { useEffect, useState } from 'react';
import Navbar from './components/Nav/navbar';
import CompanyTable from './components/Tables/table';

export default function Home() {
  const [appList, setAppList] = useState([]);
  const [isLoading, setLoading] = useState(true)
    
  useEffect(() => {
    fetch(`${process.env.API_URL}/data`)
      .then((res) => res.json())
        .then((data) => {
          setAppList(data)
          setLoading(false)
        })
    }, [])
   
  
  if (!appList) return <p>No Data</p>

  return (
    <div className="bg-gray-900">
      <Navbar />
      <main className="relative isolate">
        {/* Background */}
        <div
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>

        {/* Content section */}
        {isLoading ? 
          <p>Loading Component</p> :
          <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
            <CompanyTable />
          </div>
        }

        
      </main>

      {/* Footer */}
      <footer className="relative mt-32 sm:mt-40" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="xl:grid xl:grid-cols-4 xl:gap-8">
            <div className="space-y-8">
              <p className='mb-7'>
                 nepaliapps.com
              </p>
              <span className="text-sm leading-6 text-gray-300">
                If you love open source and want to contribute, find us on
                <b>
                  <a href='https://github.com/neymarsabin/nepali-apps?tab=readme-ov-file#contributing'> GitHub </a>
                </b>
              </span>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="mt-10 md:mt-0"></div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="mt-10 md:mt-0">
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-400">&copy; 2024, Open Sourced with MIT Liscence</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
