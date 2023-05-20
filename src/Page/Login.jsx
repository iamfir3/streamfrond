import { Link } from "react-router-dom";
import { useRef } from "react";
import ROKK from "../assets/ROKK.png";
import AuthApi from "../apis/AuthApi";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    return <div>
        <div className="py-[32px] pl-[50px]">
            <Link to='/' >
                <img src={ROKK}></img>
            </Link>
        </div>
        <div style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%)' }} className="flex justify-center py-[50px]">
            <div className="max-w-[734px] w-full bg-black flex flex-col items-center rounded-[8px] pb-[30px]">
                <p className="mt-[80px] mb-[48px] font-[700] text-[48px]">Log in to ROKK</p>
                <div className="w-[324px] mb-[16px]">
                    <p className="font-[700] text-[14px] mb-[8px]">Email</p>
                    <input type="text" placeholder="Email" className="px-[14px] w-full py-[8px] rounded-[4px] border-[1px] outline-none border-[#727272] bg-[#121212]" ref={emailRef} />
                </div>
                <div className="w-[324px]">
                    <p className="font-[700] text-[14px] mb-[8px]">Password</p>
                    <input type="password" placeholder="Password" className="px-[14px] w-full py-[8px] rounded-[4px] border-[1px] outline-none border-[#727272] bg-[#121212]" ref={passwordRef} />
                </div>

                <div className="w-[324px] h-[48px] bg-primary text-black font-[700] text-[16px] flex items-center justify-center rounded-[30px] mt-[30px]"
                    onClick={() => {
                        console.log(1);
                        const login = async () => {
                            try {

                                const res = await AuthApi.login({ email: emailRef.current.value, password: passwordRef.current.value })
                                if (res.status === 0) {
                                    localStorage.setItem("token", res.accessToken);
                                    localStorage.setItem("isLoggedIn", true);
                                    localStorage.setItem("userId", res.userId);
                                    localStorage.setItem("username", res.username);
                                    navigate('/');
                                }
                            }
                            catch (err) {
                                console.log(err);
                                swal.fire("Error", err.response.data.message, "error")

                            }
                        }
                        login();
                    }}>
                    <p>Log in</p>
                </div>

                <p className="text-[#a7a7a7] font-[400] text-[14px] mt-[20px]">Don't have an account? <Link to='/signup' className="text-white font-[400] text-[14px]">Sign up for ROKK</Link></p>
            </div>
        </div>
    </div>
}

export default Login;