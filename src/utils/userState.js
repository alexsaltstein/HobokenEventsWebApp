import { useRecoilState } from "recoil";
import { userState } from "../atoms";

export const useUserState = () => {
  const [user, setUser] = useRecoilState(userState);

  const setUserObj = (user) => {
    setUser(user);
  };

  return [user, setUserObj];
};
