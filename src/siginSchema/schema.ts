import { z} from "zod";


export const schema=z.object({
    name:z.string().nonempty("Name is required").max(30,"name must at most 30 charcs").min(3,"name must at least 3 chars"),
    email:z.string().nonempty("Email is required").regex(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm),
    password:z.string().nonempty("email is requried").max(10,"password must at most 3").min(5,"password must at least 5"),
    rePassword:z.string().nonempty("repassword is required") ,
    phone:z.string().regex(/^(010)[0-9]{8}$/gm)
}).refine((e)=> e.password==e.rePassword,{message:"repassword and password must the same",path:["repassword"]}) 
