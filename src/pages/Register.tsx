// ---------------- useContext ---------------- //
// -------------------------------------------------------- //
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// interface RegisterFormInputs {
//     email: string;
//     password: string;
//     confirmPassword: string;
// }

// export default function Register() {
//     const navigate = useNavigate();

//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm<RegisterFormInputs>();
//     const onSubmit = () => {
//         toast.success("Registration successful!", {
//             position: "top-right",
//             autoClose: 3000,
//         });
//         setTimeout(() => navigate("/login"), 3000);
//     };

//     const password = watch("password");

//     return (
//         <>
//             <Navbar />
//             <Header title="Register" />
//             <div className="container mt-5">
//                 <div className="row justify-content-center">
//                     <div className="col-md-6">
//                         <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded shadow">
//                             <h3 className="text-center mb-4">Register</h3>

//                             {/* Email Field */}
//                             <div className="mb-3">
//                                 <label htmlFor="email" className="form-label">
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     className={`form-control ${errors.email ? "is-invalid" : ""}`}
//                                     id="email"
//                                     {...register("email", {
//                                         required: "Email is required",
//                                         pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                                     })}
//                                 />
//                                 {errors.email && <div className="invalid-feedback">{errors.email.message || "Invalid email address"}</div>}
//                             </div>

//                             {/* Password Field */}
//                             <div className="mb-3">
//                                 <label htmlFor="password" className="form-label">
//                                     Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     className={`form-control ${errors.password ? "is-invalid" : ""}`}
//                                     id="password"
//                                     {...register("password", {
//                                         required: "Password is required",
//                                         minLength: {
//                                             value: 6,
//                                             message: "Password must be at least 6 characters",
//                                         },
//                                     })}
//                                 />
//                                 {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
//                             </div>

//                             {/* Confirm Password Field */}
//                             <div className="mb-3">
//                                 <label htmlFor="confirmPassword" className="form-label">
//                                     Confirm Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
//                                     id="confirmPassword"
//                                     {...register("confirmPassword", {
//                                         required: "Please confirm your password",
//                                         validate: (value) => value === password || "Passwords do not match",
//                                     })}
//                                 />
//                                 {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
//                             </div>

//                             {/* Submit Button */}
//                             <div className="d-grid">
//                                 <button type="submit" className="btn btn-primary">
//                                     Register
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
import { RegisterFormInputs } from "../types/types";

export default function Register() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterFormInputs>();

    const onSubmit = () => {
        toast.success("Registration successful!", {
            position: "top-right",
            autoClose: 3000,
        });
        setTimeout(() => navigate("/login"), 3000);
    };

    const password = watch("password");

    return (
        <>
            <Navbar />
            <Header title="Register" />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded shadow">
                            <h3 className="text-center mb-4">Register</h3>
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
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters",
                                        },
                                    })}
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                                    id="confirmPassword"
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password",
                                        validate: (value) => value === password || "Passwords do not match",
                                    })}
                                />
                                {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
