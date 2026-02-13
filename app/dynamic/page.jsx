import { db } from '@/config/db';
import React from 'react';

export const dynamic = "force-dynamic"

async function DynamicPage(props) {
    let [students] = await db.execute("select * from students");
    console.log('Dynamic Students');

    return (
        <div className='m-6  text-2xl'>
            <h1 className='mt-3 text-green-400 text-4xl text-center'>Dynamic Page </h1>     
            <h2 className='text-2xl'>Student : {students.length}</h2>
            <hr />
            <ul >
                {
                    students.map((s)=>{
                        return (
                            <li key={s.id} >
                              {s.id} - {s.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default DynamicPage;