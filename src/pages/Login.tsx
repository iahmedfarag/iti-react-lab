// ---------------- useContext ---------------- //
// -------------------------------------------------------- //
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import useAuth from "../context/useAuth";

// interface LoginFormInputs {
//     email: string;
//     password: string;
// }

// export default function Login() {
//     const { login } = useAuth();
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<LoginFormInputs>();

//     const onSubmit = (data: LoginFormInputs) => {
//         const mockToken = "fake-token";
//         login(mockToken);

//         toast.success(`Welcome, ${data.email}!`, {
//             position: "top-right",
//             autoClose: 3000,
//         });
//     };

//     return (
//         <>
//             <Navbar />
//             <Header title="Login" />
//             <div className="container mt-5">
//                 <div className="row justify-content-center">
//                     <div className="col-md-6">
//                         <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded shadow">
//                             <h3 className="text-center mb-4">Login</h3>

//                             {/* Email Field */}
//                             <div className="mb-3">
//                                 <label htmlFor="email" className="form-label">
//                                     Email
//                                 </label>
//                                 <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} id="email" {...register("email", { required: "Email is required", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
//                                 {errors.email && <div className="invalid-feedback">{errors.email.message || "Invalid email address"}</div>}
//                             </div>

//                             {/* Password Field */}
//                             <div className="mb-3">
//                                 <label htmlFor="password" className="form-label">
//                                     Password
//                                 </label>
//                                 <input type="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} id="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} />
//                                 {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
//                             </div>

//                             {/* Submit Button */}
//                             <div className="d-grid">
//                                 <button type="submit" className="btn btn-primary">
//                                     Login
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// ---------------- Redux ---------------- //
// -------------------------------------------------------- //
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useAppDispatch } from "../store/hooks";
import { login } from "../slices/authSlice";

interface LoginFormInputs {
    email: string;
    password: string;
}

export default function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>();

    const onSubmit = (data: LoginFormInputs) => {
        const mockToken = "fake-token";
        dispatch(login(mockToken));
        navigate("/");
        toast.success(`Welcome, ${data.email}!`, {
            position: "top-right",
            autoClose: 3000,
        });
    };

    return (
        <>
            <Navbar />
            <Header title="Login" />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded shadow">
                            <h3 className="text-center mb-4">Login</h3>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                    id="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    })}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email.message || "Invalid email address"}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                    id="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                                    })}
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
