import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function QuizProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role === "FACULTY" || currentUser.role === "ADMIN") {
    return children;
  } else {
    return <Navigate to="/Kanbas/Dashboard" />;
  }
}