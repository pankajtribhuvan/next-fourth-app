
// React DOM useFormStatus Hook - Example 
// Show Loading State on Submit Button in Next.js 15


'use client'
import React from 'react';
import { registerAction } from './Register.action';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';


function Register() {
    const [state, formAction, isPending] = useActionState(registerAction,{status:null,message:""});

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Create Account</h1>
                    <p className="text-slate-500 mt-2">Enter student details below</p>
                </div>

                <form className="space-y-5" action={formAction}>
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

                    <SubmitButton />
                    
                </form>

                {state?.status !== null && (
                    <div className={`mt-6 p-4 rounded-xl text-center font-medium animate-in fade-in slide-in-from-top-2 duration-300 ${
                        state.status ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'
                    }`}>
                        {state.message}
                    </div>
                )}


            </div>
        </div>
    );
}

export default Register

const SubmitButton = ()=>{
    const { pending, data, method, action } = useFormStatus();

    return (
        <button
                    disabled={pending}
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-4"
                    >
                        Register Student
                    </button>
    )
}

/*
'use client'
import React from 'react';
import { registerAction } from './Register.action';
import { useActionState } from 'react';


function Register() {
    const [state, formAction, isPending] = useActionState(registerAction,{status:null,message:""});

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Create Account</h1>
                    <p className="text-slate-500 mt-2">Enter student details below</p>
                </div>

                <form className="space-y-5" action={formAction}>
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
                    disabled={isPending}
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-4"
                    >
                        Register Student
                    </button>
                </form>
                {state?.status !== null && (
                    <div className={`mt-6 p-4 rounded-xl text-center font-medium animate-in fade-in slide-in-from-top-2 duration-300 ${
                        state.status ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'
                    }`}>
                        {state.message}
                    </div>
                )}


            </div>
        </div>
    );
}

export default Register;
*/

