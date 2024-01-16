"use client";

import { useUser } from "../_lib/Auth";
import { ReactNode, useEffect } from "react";
import AuthGuard from "./_components/AuthGuard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Layout({ children }: { children: ReactNode }) {
  const userDetail = useSelector(
    (state: RootState) => state.UserReducer.currentUser
  );

  if (userDetail === false) return <>Auth loading...</>;
  if (!userDetail) return <AuthGuard />;
  return children;
}
