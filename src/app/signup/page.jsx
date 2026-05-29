"use client";
// export const metadata = {
//   title: "StudyNook-Sign Up",
//   description: "A Library Room Booking System for Students",
// };
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
import { ToastContainer } from "react-toastify/unstyled";

export default function SignUpPage() {
  const router = useRouter();
  const validatePassword = (value) => {
    if (value.length < 6) {
      return "Password must be at least 6 characters";
    }

    if (!/[A-Z]/.test(value)) {
      return "Password must contain at least one uppercase letter";
    }

    if (!/[0-9]/.test(value)) {
      return "Password must contain at least one number";
    }

    return null;
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: image,
      callbackURL: "/signin",
    });
    // console.log(data);
    // console.log(error);

    if (!error) {
      toast.success("Sign up successful!");
      router.push("/signin");
    }
    if (error) {
      alert("Something went wrong!");
    }
  };
  const onGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    // <Card className="border border-blue-300 mx-auto w-full max-w-md px-4 sm:px-6 py-8 sm:py-10 mt-15 shadow-2xl">
    //   <h1 className="text-center text-2xl font-bold">Sign Up</h1>

    //   <Form className="w-full flex flex-col gap-4 mt-4" onSubmit={onSubmit}>
    //     <TextField isRequired name="name" type="text">
    //       <Label>Name</Label>
    //       <Input placeholder="Enter your name" />
    //       <FieldError />
    //     </TextField>

    //     <TextField isRequired name="image" type="text">
    //       <Label>Image URL</Label>
    //       <Input placeholder="Image URL" />
    //       <FieldError />
    //     </TextField>

    //     <TextField
    //       isRequired
    //       name="email"
    //       type="email"
    //       validate={(value) => {
    //         if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    //           return "Please enter a valid email address";
    //         }
    //         return null;
    //       }}
    //     >
    //       <Label>Email</Label>
    //       <Input placeholder="john@example.com" />
    //       <FieldError />
    //     </TextField>
    //     {/* Password */}
    //     <TextField
    //       isRequired
    //       minLength={6}
    //       name="password"
    //       type="password"
    //       validate={validatePassword}
    //       // validate={(value) => {
    //       //   if (value.length < 6) {
    //       //     return "Password must be at least 6 characters";
    //       //   }
    //       //   if (!/[A-Z]/.test(value)) {
    //       //     return "Password must contain at least one uppercase letter";
    //       //   }
    //       //   if (!/[0-9]/.test(value)) {
    //       //     return "Password must contain at least one number";
    //       //   }
    //       //   return null;
    //       // }}
    //     >
    //       <Label>Password</Label>
    //       <Input placeholder="Enter your password" />
    //       <Description>
    //         Must be at least 6 characters with 1 uppercase and 1 number
    //       </Description>
    //       <FieldError />
    //     </TextField>

    //     {/* Buttons */}
    //     <div className="flex flex-row sm:flex-col gap-2">
    //       {/* <Button
    //         type="submit"
    //         className="w-full sm:w-auto"
    //         onClick={async () => {
    //           await authClient.signUp();
              
    //           window.location.href = "/signin";
    //           toast.success("Sign up successful!");
    //         }}
    //       >
    //         <Check />
    //         Submit
    //       </Button> */}
    //       <Button
    //         type="submit"
    //         className="w-full sm:w-auto"
    //         onClick={async () => {
    //           const password =
    //             document.querySelector('input[name="password"]')?.value || "";

    //           const error = validatePassword(password);

    //           if (error) {
    //             toast.error(error);
    //             return;
    //           }

    //           await authClient.signUp();

    //           toast.success("Sign up successful!");

    //           window.location.href = "/signin";
    //         }}
    //       >
    //         <Check />
    //         Submit
    //       </Button>

    //       <Button type="reset" variant="secondary" className="w-full sm:w-auto">
    //         Reset
    //       </Button>
    //     </div>
    //   </Form>
    //   <p className="text-center">
    //     Already have an account?
    //     <span className="text-blue-500">
    //       {" "}
    //       <Link href="/signin">Sign In</Link>
    //     </span>
    //   </p>
    //   <p className="text-center text-lg font-bold">Or</p>
    //   <Button
    //     onClick={onGoogleSignIn}
    //     variant="outline"
    //     className="w-full border border-blue-300 flex items-center justify-center gap-2"
    //   >
    //     <GrGoogle />
    //     Sign in with Google
    //   </Button>
    //   <ToastContainer />
    // </Card>
    <Card className="bg-white border border-olive-100 mx-auto w-full max-w-md px-6 sm:px-8 py-10 mt-12 shadow-lg rounded-2xl">
  
  {/* Header */}
  <div className="text-center mb-6">
    <h1 className="text-3xl font-bold text-olive-900">Create Account</h1>
    <p className="text-sm text-olive-600 mt-1">
      Sign up to get started
    </p>
  </div>

  <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
    
    {/* Name */}
    <TextField isRequired name="name" type="text">
      <Label className="text-olive-800 font-medium">Name</Label>
      <Input
        placeholder="Enter your name"
        className="focus:border-olive-400 focus:ring-olive-200"
      />
      <FieldError className="text-red-500 text-sm" />
    </TextField>

    {/* Image */}
    <TextField isRequired name="image" type="text">
      <Label className="text-olive-800 font-medium">Profile Image URL</Label>
      <Input
        placeholder="https://..."
        className="focus:border-olive-400 focus:ring-olive-200"
      />
      <FieldError className="text-red-500 text-sm" />
    </TextField>

    {/* Email */}
    <TextField
      isRequired
      name="email"
      type="email"
      validate={(value) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          return "Please enter a valid email address";
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
      validate={validatePassword}
    >
      <Label className="text-olive-800 font-medium">Password</Label>
      <Input
        placeholder="Enter your password"
        className="focus:border-olive-400 focus:ring-olive-200"
      />
      <Description className="text-xs text-olive-500">
        Must contain at least 6 characters, 1 uppercase, 1 number
      </Description>
      <FieldError className="text-red-500 text-sm" />
    </TextField>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 pt-2">
      
      <Button
        type="submit"
        className="w-full bg-[#586235] hover:bg-olive-800 text-white rounded-lg transition-all"
        onClick={async () => {
          const password =
            document.querySelector('input[name="password"]')?.value || "";

          const error = validatePassword(password);

          if (error) {
            toast.error(error);
            return;
          }

          await authClient.signUp();

          toast.success("Account created successfully!");
          window.location.href = "/signin";
        }}
      >
        Create Account
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
  <p className="text-center mt-6 text-sm text-olive-600">
    Already have an account?{" "}
    <Link href="/signin" className="text-olive-800 font-medium hover:underline">
      Sign in
    </Link>
  </p>

  <ToastContainer />
</Card>
  );
}
