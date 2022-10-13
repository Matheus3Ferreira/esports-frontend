import axios from "axios";

interface ISignInProps {
  email: FormDataEntryValue;
  password: FormDataEntryValue;
}

export default async function signIn({ email, password }: ISignInProps) {
  try {
    const token = await axios.post(
      "https://nlw-esports-backend.herokuapp.com/api/auth/users",
      {
        email: email,
        password: password,
      }
    );
    return token.data as string;
  } catch (err: any) {
    console.log(err.response.data); // IMPLEMENT THIS
  }
}
