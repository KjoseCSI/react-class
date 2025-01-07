import { z } from "zod";

export const schema = z.object ({
    firstName: z.string().min(2,"Nombre muy corto").max(20,"Nombre muy largo")  ,
    lastName: z.string().min(2,"Apellido invalido"),
    age: z.number().safe("La edad debe ser de entre 18 y 99 años")
    /* .transform((val)=> parseInt(val,10) ) */
})

export type FormValues = z.infer<typeof schema>