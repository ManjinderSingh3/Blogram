import axios from "axios";
import { useEffect } from "react";
import { userState } from "@/store/atoms/user";
import { useSetRecoilState } from "recoil";
import { BACKEND_URL } from "@/config";

export const InitUser = () => {
  const setUser = useSetRecoilState(userState);
  const init = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/user/me`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      //   const response = await axios.get(`http://localhost:8787/api/v1/user/me`, {
      //     headers: {
      //       Authorization: "Bearer " + localStorage.getItem("token"),
      //     },
      //   });
      const email = response.data.email;
      if (email) {
        setUser({
          isLoading: false,
          userEmail: email,
        });
      } else {
        setUser({
          isLoading: false,
          userEmail: null,
        });
      }
    } catch (e) {
      setUser({
        isLoading: false,
        userEmail: null,
      });
    }
  };
  useEffect(() => {
    init();
  }, []);
  return <></>;
};
