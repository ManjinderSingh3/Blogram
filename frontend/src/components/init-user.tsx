import axios from "axios";
import { useEffect } from "react";
import { userState } from "@/store/atoms/user";
import { useSetRecoilState } from "recoil";

export const InitUser = () => {
  const setUser = useSetRecoilState(userState);
  const init = async () => {
    try {
      const response = await axios.get(`/api/v1/user/me`);
      console.log("Me endpoint response : ", response);
      if (response) {
        setUser({
          isLoading: false,
          userEmail: response.data.email,
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
  return;
  <></>;
};
