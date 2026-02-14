'use client'
// import { registerAction } from './Register.action';
import React from 'react';
// import {db} from '@/config/db'

export let registerAction = async (formData)=>{
    //Form Action ->
    //by calling the registerAction method in the same FrontEnd page - 
    //we can see how easily we can get text fields data in below line , 
    // no need to write document.getElement('') etc..
    const {name,mobile,city} = Object.fromEntries(formData.entries())

    console.log(name,mobile,city)
    
    // await db.execute(`insert into students(name,mobile,city) values(?,?,?)`,[name,mobile,city])
    // we can't use above mysql queries in frontend - client component.
}

function Register() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Create Account</h1>
                    <p className="text-slate-500 mt-2">Enter student details below</p>
                </div>

                <form className="space-y-5" action={registerAction}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="mobile" className="block text-sm font-semibold text-slate-700 mb-1">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="city" className="block text-sm font-semibold text-slate-700 mb-1">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Mumbai"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-4"
                    >
                        Register Student
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register

/*
// This is the example of SERVER ACTION
import { registerAction } from './Register.action';
import React from 'react';

function Register() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Create Account</h1>
                    <p className="text-slate-500 mt-2">Enter student details below</p>
                </div>

                <form className="space-y-5" action={registerAction}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="mobile" className="block text-sm font-semibold text-slate-700 mb-1">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="city" className="block text-sm font-semibold text-slate-700 mb-1">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Mumbai"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-4"
                    >
                        Register Student
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
*/


