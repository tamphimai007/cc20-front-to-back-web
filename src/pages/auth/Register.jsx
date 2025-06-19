import FormInput from "../../components/form/FormInput";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import axios from "axios";
import Buttons from "../../components/form/Buttons";
// rfce
function Register() {
  // JS
  const { handleSubmit, register, formState } = useForm();
  const { isSubmitting } = formState;

  const hdlSubmit = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const res = await axios.post(
        "http://localhost:8000/auth/register",
        value
      );
      console.log(res);
      createAlert("success", res.data.message);
    } catch (error) {
      console.log(error);
      createAlert("info", error.response?.data?.message);
    }
  };
  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="border w-64 h-[300px] p-4 m-4 rounded-md">
        <h1 className="font-bold text-center">Register</h1>
        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-4">
            <FormInput register={register} name="email" />
            <FormInput register={register} name="name" />
            <FormInput register={register} name="password" />
            <FormInput register={register} name="confirmPassword" />
          </div>

          <div className="flex justify-center mt-4">
            <Buttons label="Register" isSubmitting={isSubmitting} />
          </div>

          
        </form>
      </div>
    </div>
  );
}
export default Register;
