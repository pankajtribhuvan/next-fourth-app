import Link from 'next/link';
import React from 'react';

function Home(props) {
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
        </ul>
      </nav>

    </div>
  );
}

export default Home;