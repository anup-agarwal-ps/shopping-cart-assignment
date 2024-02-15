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
      console.log("password do not match")
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "80%",
        margin: "auto",
        alignItems: "flex-start",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <div
        style={{
          flexBasis: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Signup</h1>
          <p style={{ paddingTop: "25px" }}>
            We do not share personal details with anyone.
          </p>
        </div>
      </div>
      <div style={{ flexBasis: "60%" }}>
        <form
          onSubmit={(_) => {
            _.preventDefault()
            _.stopPropagation()
            handleSubmit()
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 5,
              marginBottom: 10,
            }}
          >
            <label htmlFor="signup-first-name" aria-label="First Name">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              id="signup-first-name"
              style={{
                width: "60%",
                border: "none",
                borderBottom: "1px solid #ddd",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 5,
              marginBottom: 10,
            }}
          >
            <label htmlFor="signup-last-name" aria-label="Last Name">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              id="signup-last-name"
              style={{
                width: "60%",
                border: "none",
                borderBottom: "1px solid #ddd",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 5,
              marginBottom: 10,
            }}
          >
            <label htmlFor="signup-email" aria-label="Email">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="signup-email"
              style={{
                width: "60%",
                border: "none",
                borderBottom: "1px solid #ddd",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 5,
              marginBottom: 10,
            }}
          >
            <label htmlFor="signup-password" aria-label="Password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              id="signup-password"
              style={{
                width: "60%",
                border: "none",
                borderBottom: "1px solid #ddd",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 5,
              marginBottom: 10,
            }}
          >
            <label
              htmlFor="signup-confirm-password"
              aria-label="Confirm Password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              id="signup-confirm-password"
              style={{
                width: "60%",
                border: "none",
                borderBottom: "1px solid #ddd",
              }}
            />
          </div>
          <button
            style={{
              width: "60%",
              color: "white",
              backgroundColor: THEME_COLOR,
              marginTop: "20px",
              padding: "10px 0",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: 0,
            }}
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
