import { Link } from "react-router-dom";
import { Button } from "@/shadcn-components/ui/button";

export const SignupAndSigninButtons = () => {
  return (
    <div>
      <Link to="/sign-in" className="mx-3">
        <Button variant="outline">Signin</Button>
      </Link>
      <Link to="/sign-up">
        <Button className="hover:bg-white hover:text-black">Signup</Button>
      </Link>
    </div>
  );
};
