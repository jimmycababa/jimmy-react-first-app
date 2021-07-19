import React from 'react';
import { useForm } from 'react-hook-form';

export default function Home() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (d) => alert(JSON.stringify(d))



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    First Name:
                    <input {...register("FirstName")} />
                </label>
                <label>
                    Last Name:
                    <input {...register("LastName")} />
                </label>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
