import React from "react"

const InputWrapper = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) => {
  return (
    <input
      className="w-full border-b border-gray-300 focus:outline-none focus:border-[#51DAE2]"
      {...props}
    />
  )
}

export default InputWrapper
