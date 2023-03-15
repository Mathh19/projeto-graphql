import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  // const handleRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   registerUser({ variables: { data: user } })
  //     .then((result) => (dataUserRef.current = result.data.registerUser))
  //     .catch((err) => console.log(err.message));
  // };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  };

  return {
    onChange,
    values,
  };
};
