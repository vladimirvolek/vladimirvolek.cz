import Document, {
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

const globalStyles = `#__next {display: flex;flex-direction: column;min-height: 100%;}input, textarea {outline: none;}body, html {-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;}a {text-decoration: none;cursor: pointer;}*,*:before,*:after {box-sizing: border-box; font-family: 'Inconsolata', monospace;}`;

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(
                            <>
                                <App {...props} />
                            </>
                        ),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                        {/* eslint-disable-next-line react/no-danger */}
                        <style
                            dangerouslySetInnerHTML={{ __html: globalStyles }}
                            key="styles"
                        />
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <html lang="en" style={{ height: '100%' }}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;800&amp;display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body style={{ height: '100%' }}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
