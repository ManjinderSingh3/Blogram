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
  );
};
