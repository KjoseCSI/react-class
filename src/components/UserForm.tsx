import { useForm, SubmitHandler } from "react-hook-form"
import { CustomInput } from "./CustomInput"
import {schema, FormValues} from "../models/FormSchema"
import { zodResolver } from "@hookform/resolvers/zod"

export function UserForm() {

    const { control , handleSubmit, formState: {errors} } = useForm<FormValues>({
      resolver: zodResolver(schema)
    })
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <>
    <h3>
        Formulario de Usuario
    </h3>
    <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput name="firstName" control={control} label="Primer nombre" type="text" error={errors.firstName} />
        <CustomInput name="lastName" control={control} label="Apellido" type="text" error={errors.lastName} />
        <CustomInput name="age" control={control} label="Edad" type="number" error={errors.age} />
      {/* <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
      <button type="submit"> submit</button>
    </form>

    </>
  )
}
