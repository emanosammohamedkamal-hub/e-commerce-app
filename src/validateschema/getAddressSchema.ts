import * as zod from "zod"

export   const schema=zod.object(
    { 
        name:zod.string().nonempty("name is required").max(30,"name must at most 30 characters").min(3,"Name must at least 3 characters"),
            phone:zod.string().max(11,"phone must be iclude 11 number").min(11), 
          city:zod.string().max(30,"city must at most 30 characters").min(3,"city must at least 3 characters"), 
        
        })
