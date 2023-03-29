import React from "react";
import useManageMedianNumbers from "../hooks/useManageMedianNumbers";

type ErrorNotificationProps = {};

export default function ErrorNotification({}: ErrorNotificationProps) {
  const { state } = useManageMedianNumbers();

  return (
    <>
      {state.error.message ? (
        <div className="mb-5">
          <p className="font-medium bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400">
            {state.error.message}
          </p>
        </div>
      ) : null}
    </>
  );
}
