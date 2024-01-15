import { getUserDetailWithToken } from "@/services/apis/user";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "@/redux/userSlice";
import { RootState } from "@/redux/store";

export function useUser() {
  const userDetail = useSelector(
    (state: RootState) => state.UserReducer.currentUser
  );
  const [user, setUser] = useState<null | false | true | string>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userDetail.email) {
      setUser(userDetail);
    } else {
      const accessToken: any = localStorage.getItem("accessToken");
      try {
        const decodedUser: any = jwt.decode(accessToken);
        setUser(decodedUser);
        const { email, role } = decodedUser;
        dispatch(
          saveUser({
            email,
            accessToken,
            role,
          })
        );
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return user;
}
