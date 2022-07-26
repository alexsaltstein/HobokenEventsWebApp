import { useRecoilState } from "recoil";
import { authState } from "../atoms";

export const useAuthState = () => {
  const [auth, setAuth] = useRecoilState(authState);

  const setAuthToken = (jwt) => {
    setAuth(jwt);
  };

  return [auth, setAuthToken];
};
