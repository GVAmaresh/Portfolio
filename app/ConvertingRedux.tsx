"use client"
import ReactNode from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@/redux/store";
export default function ConvertingRedux({
  children
}: {
  children: React.ReactNode;
}) {
    
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
}
