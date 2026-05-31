import { schema } from "@/validateschema/scheam";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
 

  interface inputAttributes{
         id?:string
        type?:string
        required?:true,
        placeholder:string
    } 
export  function inputattributes(id:string,type:string,placeholder:string):inputAttributes{
    return {
        id,
        type,
        required:true,
        placeholder:placeholder

    }
};