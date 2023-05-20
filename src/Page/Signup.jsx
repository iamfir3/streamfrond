import { Link } from "react-router-dom";
import { useRef } from "react";
import ROKK from "../assets/ROKK.png";
import AuthApi from "../apis/AuthApi";
import swal from "sweetalert2";

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
    return <div className="flex flex-col items-center">
        <div className="pt-[40px] pb-[32px]">
            <img src={ROKK} alt="" />
        </div>
        <p className="font-[700] text-[32px] mb-[30px]">Sign up for free start listening</p>
        <div className="w-[450px] mb-[16px]">
            <p className="font-[700] text-[14px] mb-[8px]">Email</p>
            <input type="text" placeholder="Email" className="px-[14px] w-full py-[8px] rounded-[4px] border-[1px] outline-none border-[#727272] bg-[#121212]" ref={emailRef} />
        </div>
        <div className="w-[450px] mb-[16px]">
            <p className="font-[700] text-[14px] mb-[8px]">Username</p>
            <input type="text" placeholder="Username" className="px-[14px] w-full py-[8px] rounded-[4px] border-[1px] outline-none border-[#727272] bg-[#121212]" ref={usernameRef} />
        </div>
        <div className="w-[450px]">
            <p className="font-[700] text-[14px] mb-[8px]">Password</p>
            <input type="password" placeholder="Password" className="px-[14px] w-full py-[8px] rounded-[4px] border-[1px] outline-none border-[#727272] bg-[#121212]" ref={passwordRef} />
        </div>

        <div className="w-[200px] h-[48px] bg-primary text-black font-[700] text-[16px] flex items-center justify-center rounded-[30px] mt-[30px]" onClick={() => {
            const createUser = async () => {
                try {

                    const res = await AuthApi.create({ username: usernameRef.current.value, email: emailRef.current.value, password: passwordRef.current.value })
                    if (res.status === 0) {
                        swal.fire("Success", "Signup successful", "success")
                    }
                }
                catch (err) {
                    console.log(err);
                    swal.fire("Error", err.response.data.message, "error")

                }
            }
            createUser();
        }}>
            <p>Sign up</p>
        </div>

        <p className="text-[#a7a7a7] font-[400] text-[14px] mt-[20px]">Have an account? <Link to='/login' className="text-white font-[400] text-[14px]">Login</Link></p>

    </div >
}

export default Signup;