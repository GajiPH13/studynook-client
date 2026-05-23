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
import { div, em } from "framer-motion/client";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      callbackURL: "/",
    });

    if (!error) {
      toast.success("Sign in successful!");
    }

    if(error)toast.error("Email or password is incorrect!");
  };
 

  const onGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div>
      <Card className="border border-blue-300 mx-auto w-full max-w-md px-4 sm:px-6 py-8 sm:py-10 mt-15 shadow-2xl">
        <h1 className="text-center text-2xl font-bold">Sign In</h1>

        <Form className="w-full flex flex-col gap-4 mt-4" onSubmit={onSubmit}>
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
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex flex-row sm:flex-col gap-2">
            <Button
              
              type="submit"
              className="w-full sm:w-auto"
            >
              <Check />
              Sign In
            </Button>

            <Button
              type="reset"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Reset
            </Button>
          </div>
        </Form>

        <p className="text-center text-lg sm:text-xl my-4">Or</p>

        <Button
          onClick={onGoogleSignIn}
          variant="outline"
          className="w-full border border-blue-300 flex items-center justify-center gap-2"
        >
          <GrGoogle />
          Sign in with Google
        </Button>
        <Link href="/signup">
          <p className="text-center">
            Don't have an account?{" "}
            <span className="text-blue-500">Register</span>
          </p>
        </Link>
      </Card>
      <ToastContainer />
    </div>
  );
}
