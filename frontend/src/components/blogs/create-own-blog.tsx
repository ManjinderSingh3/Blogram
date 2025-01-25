import { Button } from "@/shadcn-components/ui/button";
import axios from "axios";
import { BACKEND_URL } from "@/config";

export const CreatBlog = () => {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post(`${BACKEND_URL}/api/v1/blog/create-blog`),
            {
              // REQUEST-Body
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            };
        }}
      ></Button>
    </div>
  );
};
