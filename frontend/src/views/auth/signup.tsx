import { useState } from "react"
import { THEME_COLOR } from "../../constants/colors"
import { signUp } from "../../apis/signup"
import { useNavigate } from "react-router"
import { LOGIN_PAGE } from "../../constants/routes"

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
    <div className="flex justify-around w-[80%] mx-auto items-start pt-12 pb-12">
      <div className="flex-[0_0_40%] flex justify-center items-center">
        <div>
          <h1 className="text-2xl font-bold">Signup</h1>
          <p className="pt-6">We do not share personal details with anyone.</p>
        </div>
      </div>
      <div className="flex-[0_0_60%]">
        <form
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
              <input
                type={type}
                name={name}
                value={formData[name as keyof typeof formData] || ""}
                onChange={handleChange}
                id={`signup-${name}`}
                className="w-[60%] border-none border-b border-gray-300 focus:outline-none"
              />
            </div>
          ))}
          <button
            className="w-[60%] text-white bg-[THEME_COLOR] mt-5 py-2.5 cursor-pointer flex justify-center items-center border-none focus:outline-none"
            tabIndex={0}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
