import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/shadcn-components/ui/card";
import { Button, buttonVariants } from "@/shadcn-components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export const Signout = () => {
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
            <CardTitle className="text-2xl text-center">Sign out</CardTitle>
            <CardDescription>
              Are you sure you want to sign out?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full mb-3"
              onClick={() => {
                localStorage.setItem("token", "");
                navigate("/");
              }}
            >
              Sign out
            </Button>
            <Link to="/">
              <div
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full",
                })}
              >
                Go back
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
