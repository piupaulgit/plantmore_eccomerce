"use client";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  onChange?: any;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  onChange,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        autoComplete="false"
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-lime-600 peer"
        placeholder=" "
        onChange={onChange}
      />
      <label className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-lime-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
        {label}
      </label>
    </div>
  );
};

export default Input;
