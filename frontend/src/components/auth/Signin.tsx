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
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config";

export const Signin = () => {
  //TODO Handle Server side errors using React Hook Form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
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
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription>
              Access your Blogram account by signing in now
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
            />
          </div>
          <div className="px-6">
            <Button
              className="w-full mt-4"
              onClick={async () => {
                await axios.post(`${BACKEND_URL}/api/user/signin`, {
                  username,
                  password,
                });
                navigate("/");
              }}
            >
              Sign In
            </Button>
          </div>
          <CardFooter>
            <div className="mt-4 text-sm text-muted-foreground">
              <span className="mr-2">Don&apos;t have an account?</span>
              <Link
                to="/sign-up"
                className="text-primary hover:underline underline-offset-4 hover:font-bold"
              >
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
