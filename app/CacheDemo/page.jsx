import { db } from '@/config/db';
import React from 'react';
import { cache } from 'react';

export const dynamic = "force-dynamic"

async function DynamicPage(props) {
   let students = await  fetchStudentList();
    return (
        <div className='m-6  text-2xl'>
            <h1 className='mt-3 text-green-400 text-4xl text-center'>CacheDemo  Page </h1>     
            <h2 className='text-2xl'>Student : {students.length}</h2>
            <hr />
            <StudentsList students={students} />
        </div>
    );
}

export default DynamicPage;


let StudentsList = async ()=>{

    let students2 = await fetchStudentList()

    return (
                    <ul >
                {
                    students2.map((s)=>{
                        return (
                            <li key={s.id} >
                              {s.id} - {s.name}
                            </li>
                        )
                    })
                }
            </ul>

    );
}


export let fetchStudentList = cache(async ()=>{
    
    let [students] = await db.execute("select * from students");
    console.log('Students fetching..');
    return students;
});