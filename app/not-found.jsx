'use client'
// app/not-found.js
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="relative w-full max-w-lg text-center">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-[120px] -z-10" />
        
        <h1 className="text-[12rem] font-bold text-white/5 leading-none select-none">
          404
        </h1>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Lost in Space?
          </h2>
          <p className="text-slate-400 text-lg max-w-sm">
            The page you're looking for has drifted away. Let's get you back to the classroom.
          </p>
          
          <div className="flex gap-4 mt-6">
           <button className="px-8 py-3 bg-green-500 hover:bg-green-400 text-slate-950 font-semibold rounded-full transition-all active:scale-95"
           onClick={()=> router.back()}>
            Go Back 
            </button> 
            <Link 
              href="/"
              className="px-8 py-3 bg-green-500 hover:bg-green-400 text-slate-950 font-semibold rounded-full transition-all active:scale-95"
            >
              Go Home
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}