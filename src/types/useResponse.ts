 
    export type userResponse={
         message: 'success'|'Email is Already exist',
         user:{
            name:string,
            email:string,
            role:string
         }
         token:string

    }