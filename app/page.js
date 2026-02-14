'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

function Home(props) {

  const router = useRouter()

  function useRouterDemo(){
    router.push("/Register")
  }

  return (
    <div>
      <h1 className='text-6xl text-center'>Client Vs Server Component in NEXT.js</h1>

      <hr />
      <nav>
        <ul className="grid grid-cols-4 gap-4 list-none">
          <li>
            <Link
              href="/static"
              className="bg-amber-300 px-4 py-2 block"
            >
              Static Page
            </Link>
          </li>
           <li>
            <Link
              href="/dynamic"
              className="bg-amber-300 px-4 py-2 block"
            >
              Dynamic Page
            </Link>
          </li>
           <li>
            <Link
              href="/CacheDemo"
              className="bg-amber-300 px-4 py-2 block"
            >
              Cache Example
            </Link>
          </li>
           <li>
            <Link
              href="/Students/01"
              className="bg-amber-300 px-4 py-2 block"
            >
              generateStaticParams
            </Link>
          </li>
          
           <li>
            <Link
              href="/Register"
              className="bg-amber-300 px-4 py-2 block"
            >
              Register Form
            </Link>
          </li>

          <li>
            <Link
              href="/UseActionState"
              className="bg-amber-300 px-4 py-2 block"
            >
              UseActionState - Register Form
            </Link>
          </li>

         <li>
           
           <button className='bg-red-400 p-2  w-max' onClick={useRouterDemo}>
               useRouter Example</button>
          </li>


        </ul>
      </nav>

    </div>
  );
}

export default Home;