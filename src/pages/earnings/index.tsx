import React from "react";

import { Disclaimer, LoadIndicator } from "@/components";
import { reduxWrapper } from "@/createStore";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { setSession } from "@/slices/userSlice";

import styles from "./Earnings.module.scss";

const Earnings = () => {
  return (
    <div className={styles.container}>
      <LoadIndicator isLoading={false}>
        <Disclaimer />
      </LoadIndicator>
    </div>
  );
};

export default Earnings;

// export const getServerSideProps: GetServerSideProps =
//   reduxWrapper.getServerSideProps((store) => async (context) => {
//     const session = await getSession(context);

//     if (!session) {
//       return {
//         redirect: {
//           destination: "/api/auth/signin",
//           permanent: false,
//         },
//       };
//     }

//     const isAffiliateActive = session.user.affiliateStatus === "ACTIVE";

//     if (!isAffiliateActive) {
//       return {
//         redirect: {
//           destination: "/",
//           permanent: false,
//         },
//       };
//     }

//     store.dispatch(setSession(session));

//     return {
//       props: {},
//     };
//   });
