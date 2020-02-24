import Document, { Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(context: any) {
    const initialProps = await Document.getInitialProps(context);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='google' content='notranslate'></meta>
          <meta charSet='utf-8' />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
