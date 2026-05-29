// "use client";
// // export const metadata = {
// //   title: "StudyNook-Sign In",
// //   description: "A Library Room Booking System for Students",
// // };
// import { authClient } from "@/lib/auth-client";
// import { Check } from "@gravity-ui/icons";
// import {
//   Button,
//   Card,
//   Description,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { GrGoogle } from "react-icons/gr";
// import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function SignInPage() {
//   const router = useRouter();

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const email = formData.get("email");
//     const password = formData.get("password");

//     const { error } = await authClient.signIn.email({
//       email,
//       password,
//       callbackURL: "/",
//     });

//     if (!error) {
//       toast.success("Sign in successful!");
//       router.push("/");
//       router.refresh();
//       return;
//     }

//     toast.error(error.message ?? "Email or password is incorrect!");
//   };
 

//   const onGoogleSignIn = async () => {
//     const data = await authClient.signIn.social({
//       provider: "google",
//     });
//   };

//   return (
//     <div>
//       <Card className="border border-olive-300 mx-auto w-full max-w-md px-4 sm:px-6 py-8 sm:py-10 mt-15 shadow-2xl">
//         <h1 className="text-center text-2xl font-bold">Sign In</h1>

//         <Form className="w-full flex flex-col gap-4 mt-4" onSubmit={onSubmit}>
//           <TextField
//             isRequired
//             name="email"
//             type="email"
//             validate={(value) => {
//               if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//                 return "Please enter a valid email address";
//               }
//               return null;
//             }}
//           >
//             <Label>Email</Label>
//             <Input placeholder="john@example.com" />
//             <FieldError />
//           </TextField>

//           <TextField
//             isRequired
//             minLength={6}
//             name="password"
//             type="password"
//             validate={(value) => {
//               if (value.length < 6) {
//                 return "Password must be at least 6 characters";
//               }
//               if (!/[A-Z]/.test(value)) {
//                 return "Password must contain at least one uppercase letter";
//               }
//               if (!/[0-9]/.test(value)) {
//                 return "Password must contain at least one number";
//               }
//               return null;
//             }}
//           >
//             <Label>Password</Label>
//             <Input placeholder="Enter your password" />
//             <Description>
//               Must be at least 6 characters with 1 uppercase and 1 number
//             </Description>
//             <FieldError />
//           </TextField>

//           {/* Buttons */}
//           <div className="flex flex-row sm:flex-col gap-2">
//             <Button
              
//               type="submit"
//               className="w-full sm:w-auto"
//             >
//               <Check />
//               Sign In
//             </Button>

//             <Button
//               type="reset"
//               variant="secondary"
//               className="w-full sm:w-auto"
//             >
//               Reset
//             </Button>
//           </div>
//         </Form>

//         <p className="text-center text-lg sm:text-xl my-4">Or</p>

//         <Button
//           onClick={onGoogleSignIn}
//           variant="outline"
//           className="w-full border border-blue-300 flex items-center justify-center gap-2"
//         >
//           <GrGoogle />
//           Sign in with Google
//         </Button>
//         <Link href="/signup">
//           <p className="text-center">
//             Don't have an account?{" "}
//             <span className="text-blue-500">Register</span>
//           </p>
//         </Link>
//       </Card>
//       <ToastContainer />
//     </div>
//   );
// }
"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignInPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (!error) {
      toast.success("Welcome back!");
      router.push("/");
      router.refresh();
      return;
    }

    toast.error(error.message ?? "Invalid email or password");
  };

  const onGoogleSignIn = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-olive-50 px-4">

      <Card className="bg-white border border-olive-100 w-full max-w-md px-6 sm:px-8 py-10 shadow-xl rounded-2xl">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-olive-900">
            Welcome Back
          </h1>
          <p className="text-sm text-olive-600 mt-1">
            Sign in to continue to your account
          </p>
        </div>

        {/* Form */}
        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-olive-800 font-medium">Email</Label>
            <Input
              placeholder="john@example.com"
              className="focus:border-olive-400 focus:ring-olive-200"
            />
            <FieldError className="text-red-500 text-sm" />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={6}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Must include 1 uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Must include 1 number";
              }
              return null;
            }}
          >
            <Label className="text-olive-800 font-medium">Password</Label>
            <Input
              placeholder="Enter your password"
              className="focus:border-olive-400 focus:ring-olive-200"
            />
            <Description className="text-xs text-olive-500">
              At least 6 chars, 1 uppercase, 1 number
            </Description>
            <FieldError className="text-red-500 text-sm" />
          </TextField>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">

            <Button
              type="submit"
              className="w-full bg-[#586235] hover:bg-olive-800 text-white rounded-lg transition-all"
            >
              <Check />
              Sign In
            </Button>

            <Button
              type="reset"
              variant="secondary"
              className="w-full border border-olive-200 text-olive-700 hover:bg-olive-50 rounded-lg"
            >
              Reset
            </Button>

          </div>
        </Form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px bg-olive-100 flex-1" />
          <span className="text-xs text-olive-500">OR</span>
          <div className="h-px bg-olive-100 flex-1" />
        </div>

        {/* Google */}
        <Button
          onClick={onGoogleSignIn}
          variant="outline"
          className="w-full border border-olive-200 hover:bg-olive-50 flex items-center justify-center gap-2 rounded-lg"
        >
          <GrGoogle />
          Continue with Google
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-olive-600 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-olive-800 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>

      </Card>

      <ToastContainer />
    </div>
  );
}