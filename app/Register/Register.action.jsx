// This is function - not a component
'use server'
import {db} from '@/config/db'
export let registerAction = async (formData)=>{
    
    // const name = formData.get("name");
    // const mobile = formData.get("mobile");
    // const city = formData.get("city");

    const {name,mobile,city} = Object.fromEntries(formData.entries())

    console.log(name,mobile,city)

    await db.execute(`insert into students(name,mobile,city) values(?,?,?)`,[name,mobile,city])

}