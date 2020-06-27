import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  //   console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        name="First name"
        ref={register({ required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name"
        name="Last name"
        ref={register({ required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Email"
        name="Email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="text"
        placeholder="Student Address"
        name="Student Address"
        ref={register({ required: true, min: 4, maxLength: 50 })}
      />
      <input
        type="text"
        placeholder="Birthday"
        name="Birthday"
        ref={register({ required: true, maxLength: 8 })}
      />
      <select name="Gender" ref={register({ required: true })}>
        <option value="F">F</option>
        <option value="M">M</option>
      </select>

      <input type="submit" />
    </form>
  );
}
