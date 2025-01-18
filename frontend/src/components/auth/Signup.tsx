import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn-components/ui/card";
import { Button } from "@/shadcn-components/ui/button";
import { Label } from "@/shadcn-components/ui/label";
import { Input } from "@/shadcn-components/ui/input";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col min-h-screen py-4">
      <div className="text-2xl font-bold">
        <Link to="/">
          <span className="text-fuchsia-500">B</span>logram
        </Link>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create your Account</CardTitle>
            <CardDescription>
              Please enter your email below to create account
            </CardDescription>
          </CardHeader>
          <div className="px-6">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="px-6 mt-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></Input>
          </div>
          <div className="px-6">
            <Button
              className="w-full mt-4"
              onClick={async () => {
                const response = await axios.post(
                  `http://localhost:8787/api/user/signup`,
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
              }}
            >
              Create Account
            </Button>
          </div>
          <CardFooter>
            <div className="mt-4 text-sm text-muted-foreground">
              <span className="mr-2">Already have an account?</span>
              <Link
                to="/sign-in"
                className="text-primary hover:underline underline-offset-4 hover:font-bold"
              >
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
