import type { AppProps } from "next/app";
import { Layout } from "@/components";
import { reduxWrapper } from "@/createStore";
import { SessionProvider, getSession } from "next-auth/react";
import { setSession } from "@/slices/userSlice";
import { useDispatch } from "react-redux";

import "@/styles/index.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

App.getInitialProps = reduxWrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }) => {
      const session = await getSession(ctx);

      if (session) {
        store.dispatch(setSession(session));
      }

      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
        },
      };
    }
);

export default reduxWrapper.withRedux(App);
