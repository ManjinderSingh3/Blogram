import { Link } from "react-router-dom";
import { Button } from "@/shadcn-components/ui/button";

export const SignoutButton = () => {
  return (
    <Link to="/sign-out">
      <Button>Signout</Button>
    </Link>
  );
};
