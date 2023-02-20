import "@/styles/globals.css";
import {
  createDOMRenderer,
  FluentProvider,
  SSRProvider,
  RendererProvider,
  webLightTheme,
} from "@fluentui/react-components";
import { Main } from "next/document";
import MainNavigation from "./layout/main-navigation";
import ProductItem from "./products";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

function MyApp({ Component, pageProps, renderer }) {
  return (
    // 👇 Accepts a renderer from <Document /> or creates a default one
    //    Also triggers rehydration a client

    <RendererProvider renderer={renderer || createDOMRenderer()}>
      <MainNavigation />
      <SSRProvider>
        <FluentProvider theme={webLightTheme}>
          <Component {...pageProps} />
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
}

export default MyApp;
