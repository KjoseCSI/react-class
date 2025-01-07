import { Controller,Control, FieldError } from "react-hook-form"
import { FormValues } from "../models/FormSchema"


interface Props {
  name: keyof FormValues,
  control: Control<FormValues>,
  label:string,
  type?:string,
  error?:FieldError
}

export const CustomInput = ({name,control,label,type,error}:Props) => {
  return (
    <div>
    <label htmlFor={name} > {label} </label>
    <Controller 
        name={name}
        control= {control}
        render={({field}) => <input id={name} type={type} {...field} className={ `${error ? "is-invalid":"" }`} />  }
    />
    {error && <p className="text-red-500 text-lg mt-1" > {error.message} </p>}
    </div>
  )
}
