import FormInput from "../../components/form/FormInput";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import Buttons from "../../components/form/Buttons";

import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../../utils/validator";
import { actionLogin, actionRegister } from "../../api/auth";
import useAuthStore from "../../store/auth-store";
import { useNavigate } from "react-router";

// rfce
function Login() {
  // JS
  const navigate = useNavigate()
  // Zustand
  const actionLoginWithZustand = useAuthStore((state)=>state.actionLoginWithZustand)


  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { isSubmitting, errors } = formState;
  // console.log(errors)

  const hdlSubmit = async (value) => {
    const res = await actionLoginWithZustand(value)
    if(res.success){
      console.log(res.role)
      createAlert("success","Welcome back")
      roleRedirect(res.role)
    }else{
      createAlert('info',res.message)
    }
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    // try {
    //   const res = await actionLoginWithZustand(value);
    //   console.log(res);
    //   createAlert("success", res.data.message);
    //   // reset()
    // } catch (error) {
    //   console.log(error);
    //   createAlert("info", error.response?.data?.message);
    // }
  };

  const roleRedirect = (role)=>{
    if(role==="ADMIN"){
      navigate('/admin')
    }else{
      navigate('/user')
    }
  }


  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="border w-64 p-4 m-4 rounded-md">
        <h1 className="font-bold text-center mb-4">Login</h1>
        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-4">
            <FormInput register={register} name="email" errors={errors} />
            <FormInput
              register={register}
              name="password"
              errors={errors}
              type="password"
            />
          </div>

          <div className="flex justify-center mt-4">
            <Buttons label="Login" isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
