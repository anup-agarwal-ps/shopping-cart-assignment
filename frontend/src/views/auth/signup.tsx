import { useState } from "react"
import { THEME_COLOR } from "../../constants/colors"
import { signUp } from "../../apis/signup"
import { useNavigate } from "react-router"
import { LOGIN_PAGE } from "../../constants/routes"
import InputWrapper from "../../components/InputWrapper"

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  })
  const sendFormDataToApiCall = () => {
    signUp(formData).then(() => {
      navigate(LOGIN_PAGE)
    })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    if (formData.password === formData.confirm_password) {
      sendFormDataToApiCall()
    } else {
      console.log("Passwords do not match")
    }
  }

  return (
    <div className="w-9/12 mx-auto py-12 flex flex-col lg:gap-10 lg:flex-row gap-0 ">
      <div className="w-full lg:w-5/12 pb-10">
        <div>
          <h1 className="text-2xl font-bold">Signup</h1>
          <p className="pt-6">We do not share personal details with anyone.</p>
        </div>
      </div>
      <form
        className="w-full lg:w-7/12 flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleSubmit()
        }}
      >
        {[
          { label: "First Name", name: "first_name", type: "text" },
          { label: "Last Name", name: "last_name", type: "text" },
          { label: "Email", name: "email", type: "text" },
          { label: "Password", name: "password", type: "password" },
          {
            label: "Confirm Password",
            name: "confirm_password",
            type: "password",
          },
        ].map(({ label, name, type }) => (
          <div key={name} className="flex flex-col gap-1.5 mb-2.5">
            <label htmlFor={`signup-${name}`} aria-label={label}>
              {label}
            </label>
            <InputWrapper
              type={type}
              name={name}
              value={formData[name as keyof typeof formData] || ""}
              onChange={handleChange}
              id={`signup-${name}`}
            />
          </div>
        ))}
        <button
          className="w-[60%] text-whit mt-5 py-2.5 cursor-pointer flex justify-center items-center border-none focus:outline-none"
          style={{ backgroundColor: THEME_COLOR }}
          tabIndex={0}
        >
          Signup
        </button>
      </form>
    </div>
  )
}

export default Signup
