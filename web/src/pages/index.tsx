/* eslint-disable @next/next/no-html-link-for-pages */

import { getSession } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);

  /*
   * if the user is not authenticated
   * will return to login page
   */
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/login",
        permanent: false,
      },
    };
    /*
     * if the user is authenticated
     * will return to app page
     */
  } else {
    return {
      redirect: {
        destination: "/app",
        permanent: false,
      },
    };
  }
};
