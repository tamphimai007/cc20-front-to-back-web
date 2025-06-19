// rfce
function FormInput({ name, register }) {
  return (
    <input
      className="border w-full rounded-md border-gray-400 p-1 px-4"
      placeholder={name}
      {...register(name)}
    />
  );
}
export default FormInput;
