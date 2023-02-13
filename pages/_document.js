import Document, { Html, Head, Main, NextScript } from 'next/document';
import {createDOMRenderer, renderToStyleElements} from '@fluentui/react-components';

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        // 👇 creates a renderer that will be used for SSR
        const renderer = createDOMRenderer();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App =>
                    function EnhancedApp(props) {
                        const enhancedProps = {
                            ...props,
                            // 👇 this is required to provide a proper renderer instance
                            renderer,
                        };

                        return <App {...enhancedProps} />;
                    },
            });

        const initialProps = await Document.getInitialProps(ctx);
        const styles = renderToStyleElements(renderer);

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {/* 👇 adding Fluent UI styles elements to output */}
                    {styles}
                </>
            ),
        };
    }

    render() {
        return (
            <Html>
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
