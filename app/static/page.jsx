import { db } from '@/config/db';
import React from 'react';

async function StaticPage(props) {
    let [students] = await db.execute("select * from students");
    console.log('Static Students');

    return (
        <div className='m-6  text-2xl'>
            <h1 className='mt-3 text-red-400 text-4xl text-center'>Dynamic Page </h1>     
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

export default StaticPage;