import { useContext } from "react";
import { AuthContext } from "../../auth provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { signUp, addNameAndImage, loginWithGoogle } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imgUrl = form.ImageUrl.value;

        if (password.length < 6) {
            toast('Password should be at least 6 characters')
            return;
        } else if (!/^(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password)) {
            toast('Password must contain at least one capital letter and one special character')
            return;
        }

        signUp(email, password)
            .then(result => {

                addNameAndImage(name, imgUrl)
                    .then(() => {
                        location.reload();
                        toast('User has created successfully')
                    })
                    .catch(error => {
                        toast(error.message)
                    })
            })
            .catch(error => {
                toast(error.message)
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                toast('User logged In successfully')
            })
            .catch(error => {
                toast(error.message)
            })
    }

    return (
        <div className="max-w-7xl lg:px-10 px-0 lg:mx-auto md:mx-9 mx-3 md:mb-10 mb-5">
            <form className="card-body md:p-8 p-0" onSubmit={handleSignUp}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" name='name' placeholder="name" className="rounded-none input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="rounded-none input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="rounded-none input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image Url</span>
                    </label>
                    <input name='ImageUrl' type="ImageUrl" placeholder="ImageUrl" className="rounded-none input input-bordered" required />
                </div>
                <div className="mt-2">
                    <p>Already have an account? Please, <Link to='/signIn' className="underline font-medium">sign in</Link></p>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#A4E889] hover:bg-[#A4E889] rounded-none">Sign Up</button>
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

export default SignUp;