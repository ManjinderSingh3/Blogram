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
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>Sign in to your Blogram account</CardDescription>
      </CardHeader>
      <div className="px-6">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="example@gmail.com" />
      </div>
      <div className="px-6 mt-2">
        <Label>Password</Label>
        <Input id="password" type="password" />
      </div>
      <div className="px-6">
        <Button className="w-full mt-4 mb-4">Sign Up</Button>
      </div>
      <CardFooter>
        <div className="text-sm text-muted-foreground">
          <span className="mr-2">Don&apos;t have an account?</span>
          <Link
            to="/sign-up"
            className="text-primary underline-offset-4 hover:underline hover:font-bold "
          >
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
