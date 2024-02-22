import React from "react";

import { Header } from "@/components";
import { reduxWrapper } from "@/createStore";
import { GetServerSideProps } from "next";
import { getInfluencerProfileThunk } from "@/thunks/InfluencerThunk";
import { selectAffiliateState } from "@/selectors/InfluencerSelector";

const Home = () => {
  return (
    <div>
      <Header hasBorder={false} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps =
  reduxWrapper.getServerSideProps((store) => async () => {
    store.dispatch(getInfluencerProfileThunk());

    return {
      props: {},
    };
  });
