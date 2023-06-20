import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { SET_LOGIN } from "../../src/redux/features/auth/userauthslice"
import { getLoginStatus } from "../services/userauthService";
import { toast } from "react-toastify";

const useRedirectLoggedOutUser = (path) => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const redirectLoggedOutUser = async () => {
      const isLoggedIn = await getLoginStatus();
      dispatch(SET_LOGIN(isLoggedIn));

      if (!isLoggedIn) {
        toast.info("Session expired, please login to continue.");
        history.push(path);
        return;
      }
    };
    redirectLoggedOutUser();
  }, [history, path, dispatch]);
};

export default useRedirectLoggedOutUser;
