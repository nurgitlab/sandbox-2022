import {useState} from 'react'
import './App.css'
import {SubmitHandler, useForm, SubmitErrorHandler} from "react-hook-form";
import {Connect} from "vite";

interface IForm {
    name: string;
    age: number;
}

function App() {
    const {register,  handleSubmit, formState: {errors}, clearErrors, reset} = useForm<IForm>({
        defaultValues: {
            age: 20,
            name: 'defaultName'
        }
    })

    const submit: SubmitHandler<IForm> = data => {
        console.log(data)
    }

    const error: SubmitErrorHandler<IForm> = data => {
        console.log(data)
    }

    const isName = data => {
        if (data.length > 5 && data.length < 10) return true
        console.log(data)
        return false
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit, error)}>
                <div>
                    <input
                        type="text"
                        {...register(
                        'name',
                        {required: true, validate: isName}
                        )}
                        aria-invalid={errors.name ? true : false}
                    />
                </div>
                <div>
                    <input type="number" {...register('age')}/>
                </div>
                <div>
                    <button>Отправить</button>
                    <button type="button"  onClick={() => clearErrors()}>Оичстить ошибки</button>
                    <button type="button"  onClick={() => reset({
                        age: 0,
                        name: ''
                    })}>Оичстить форму</button>
                </div>
            </form>
        </>
    )
}

export default App
