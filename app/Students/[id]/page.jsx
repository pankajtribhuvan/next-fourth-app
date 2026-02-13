import { db } from '@/config/db';
import React from 'react';

//applicable only for maximux 50 records - instead of this use [export const revalidate = 30;]
//so it will show first static data and then after 30 second it will fetch from db

export async function generateStaticParams() {
let [students] = await db.execute("select id from students ");
return students.map((s)=>({id:s.id.toString()}));

}
//because of above function , it generates static data for all id,and store in memory/cache
//After build - all id static pages generated because of generateStaticParams() - dynamic routing,


async function Page(props) {
    let obj = await props.params; //to fetch id from url - {id: '1'}
    console.log(obj.id) //1,2,3 etc..
    
    
    let [[student]] = await db.execute("select * from students where id = ?" , [obj.id]);
    // console.log(student);
    
return (
        <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center">
            <h1 className="mb-8 text-slate-800 text-4xl font-extrabold tracking-tight">
                Student <span className="text-red-500">Profile</span>
            </h1>

            {/* --- Student Card UI --- */}
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 transition-hover hover:shadow-2xl duration-300">
                <div className="bg-red-500 h-32 flex items-end justify-center">
                    <div className="w-24 h-24 bg-white rounded-full border-4 border-white translate-y-12 flex items-center justify-center shadow-md">
                        <span className="text-4xl">🎓</span>
                    </div>
                </div>

                <div className="pt-16 pb-8 px-8 text-center">
                    <h2 className="text-2xl font-bold text-slate-800">{student.name}</h2>
                    <p className="text-slate-500 font-medium">Student ID: #{student.id}</p>

                    <div className="mt-8 space-y-4 text-left border-t border-slate-50 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-500">📱</div>
                            <div>
                                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Mobile</p>
                                <p className="text-slate-700 font-semibold">{student.mobile}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-purple-50 rounded-lg text-purple-500">📍</div>
                            <div>
                                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">City</p>
                                <p className="text-slate-700 font-semibold">{student.city}</p>
                            </div>
                        </div>
                    </div>

                    <button className="mt-8 w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                        View Records
                    </button>
                </div>
            </div>
            {/* --- End Card UI --- */}
        </div>
    );
}

export default Page;