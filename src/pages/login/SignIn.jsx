import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const SignIn = () => {
    const { signIn, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    console.log(location);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(() => {
                toast('User logged In successfully')
                navigate(`${location?.state?.path ? location.state.path : '/'}`)
            }
            )
            .catch(error => {
                toast(error.message)
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                toast('User logged In successfully')
                navigate(`${location?.state?.path ? location.state.path : '/'}`)
            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (
        <div className="max-w-7xl lg:px-10 px-0 lg:mx-auto md:mx-9 mx-3 md:mb-10 mb-5">
            <form className="card-body md:p-8 p-0" onSubmit={handleSignIn}>
                <h2 className="md:text-3xl text-xl mt-4 font-semibold text-center">{location?.state?.message}</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="rounded-none input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="rounded-none input input-bordered" required />
                </div>
                <div className="mt-2">
                    <p>Don not have an account? Please, <Link to='/signUp' className="underline font-medium">sign up</Link></p>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#A4E889] hover:bg-[#A4E889] rounded-none">Sign In</button>
                </div>
                <p className="text-center my-3 text-lg font-medium">------OR------</p>
                <div className="form-control">
                    <button onClick={handleGoogleLogin} className="btn bg-[#FDC04B] hover:bg-[#FDC04B] rounded-none">Sign In with Google</button>
                </div>

            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignIn;