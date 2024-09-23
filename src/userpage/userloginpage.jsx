import { useNavigate } from "react-router-dom"

export let Userloginpage = () => {
    const navigate = useNavigate();
    let logout = () => {
        localStorage.clear()
        navigate("/login")
    }
    return (
        <>
            <h1>User Login Page</h1><br />
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary btn-block mx-auto " onClick={logout}>
                    LOGOUT
                </button>
            </div>
        </>
    )
}