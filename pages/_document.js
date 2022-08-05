import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="utf-8" />
                <meta name="keywords" content="Dogs Life Brands, LLC, creates and manages Digital Community-Focused Brands for the fur members of families worldwide. DLB also provides Event Marketing opportunities and marketing services at native events and popular festivals as well as Entertainment Programs for varied outlets of broadcast and streaming services. All DLB brands and marketing services provide several advertising programs for targeted dog-friendly products and services. 
              Animal-Focused Non-Profit organizations are welcome to showcase their charity." />
                <meta name="description" content="" />
                <meta name="page_type" content="np-template-header-footer-from-plugin" />
                <title>Dogslifebrands</title>
                <script className="u-script" type="text/javascript" src="//capp.nicepage.com/assets/jquery-1.9.1.min.js" defer=""></script>
                <script className="u-script" type="text/javascript" src="//capp.nicepage.com/d45d91fca4c709ded430bb085fa789b2810dd254/nicepage.js" defer=""></script>
                <link id="u-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"></link>
                <meta name="theme-color" content="#73a3de"/>
                <meta property="og:site_name" content="Dogslifebrands"/>

                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"></meta>

              
                <title>Dogslifebrands: Join now for free</title>
                <meta name="title" content="Behind Every Dog is a Super Human"/>
                <meta name="description" content="Dogs Life Brands, LLC, creates and manages Digital Community-Focused Brands for the fur members of families worldwide"/>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.dogslifebrands.com"/>
                <meta property="og:title" content="Behind Every Dog is a Super Human"/>
                <meta property="og:description" content=" Dogs Life Brands, LLC, creates and manages Digital Community-Focused Brands for the fur members of families worldwide"/>
                <meta property="og:image" content="https://www.dogslifebrands.com/images/banner_meta.jpg"/>

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://www.dogslifebrands.com"/>
                <meta property="twitter:title" content="Behind Every Dog is a Super Human"/>
                <meta property="twitter:description" content="Dogs Life Brands, LLC, creates and manages Digital Community-Focused Brands for the fur members of families worldwide"/>
                <meta name="twitter:creator" content="@LilDogsLifeApp"/>
                <meta property="twitter:image" content="https://www.dogslifebrands.com/images/home_meta.jpg?62cd875b67ecb"/>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"/>
                <link id="u-style" rel="stylesheet" href="/css/style.css"></link>

                <Head />
                <body className="u-backlink-hidden u-body">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument