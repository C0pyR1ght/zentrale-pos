import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href={`${process.env.PUBLIC_URL}/favicon.ico`} />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Zentrale POS" />
          <link rel="apple-touch-icon" href={`${process.env.PUBLIC_URL}/logo192.png`} />
          <link rel="manifest" href={`${process.env.PUBLIC_URL}/manifest.json`} />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous" dangerouslySetInnerHTML={{ __html: `` }} />
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous" dangerouslySetInnerHTML={{ __html: `` }} />
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous" dangerouslySetInnerHTML={{ __html: `` }} />
          <script src="https://kit.fontawesome.com/1802451b8e.js" crossOrigin="anonymous" dangerouslySetInnerHTML={{ __html: `` }} />
          <noscript>You need to enable JavaScript to run this app.js.</noscript>
          <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
        $(document).ready(function () {
          $('#sidebarCollapse').on('click', function () {
            console.log("toogle sidebar");
              $('#sidebar').toggleClass('active');
          });
        });
    ` }} />
        </Head>
        
        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    )
  }
}

export default MyDocument      
