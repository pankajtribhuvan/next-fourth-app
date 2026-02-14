// This is function - not a component
'use server'
import {db} from '@/config/db'
import { redirect } from 'next/navigation'
export let registerAction = async (previousState,formData)=>{
    const {name,mobile,city} = Object.fromEntries(formData.entries())

    console.log(name,mobile,city)
    try {
        
        await db.execute(`insert into students(name,mobile,city) values(?,?,?)`,[name,mobile,city])
        // return {status:true,message:"Data saved Successfully !"}
        redirect("/")
    } catch (error) {
        if(error.message == "NEXT_REDIRECT") throw error;
        return {status:true,message:error}
    }
    
    

}