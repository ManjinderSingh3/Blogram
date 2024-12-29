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

export const Signup = () => {
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
            <Input id="email" type="email" placeholder="example@gmail.com" />
          </div>
          <div className="px-6 mt-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password"></Input>
          </div>
          <div className="px-6">
            <Button className="w-full mt-4">Create Account</Button>
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
