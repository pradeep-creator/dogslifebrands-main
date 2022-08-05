import Link from "next/link"
import { Fragment } from "react"

const Index = () => {
    return (
        <Fragment>
            <footer className="top-margin-for-add-section-widget-small pt-5 pb-5  text-center u-black u-clearfix u-footer" id="sec-d375"><div className="u-clearfix u-sheet u-sheet-1">
                <a href="#" className="u-image u-logo u-image-1" src="" data-image-width="80" data-image-height="40" style={{ textAlign: 'center' }}>
                    <img src="/images/logo.png" width={'100'} className="u-logo-image u-logo-image-1" />
                </a>
                <div className="u-align-left u-border-1 u-border-white u-expanded-width u-line u-line-horizontal u-opacity u-opacity-30 u-line-1"></div>
                <div className="u-clearfix u-expanded-width-lg u-expanded-width-md u-expanded-width-xl u-expanded-width-xs u-gutter-30 u-layout-wrap u-layout-wrap-1">
                    <div className="u-gutter-0 u-layout">
                        <ul className="footer-menu">
                            <li><Link href="/"><a style={{ color: "white" }}>Home</a></Link></li>
                            <li><Link href="/#sec-1f01"><a style={{ color: "white" }}>Brands</a></Link></li>
                            <li><Link href="/#sec-8229"><a style={{ color: "white" }}>Opportunities</a></Link></li>
                            <li><Link href="/about"><a style={{ color: "white" }}>About</a></Link></li>
                            <li><Link href="/contact"><a style={{ color: "white" }}>Contact</a></Link></li>
                            <li><a href="https://bigdogslife.app" target="_blank" style={{ color: "white" }}>Big Dogs Life</a></li>
                            <li><a href="https://littledogslife.club" target="_blank" style={{ color: "white" }}>Little Dogs Life</a></li>
                        </ul>
                    </div>
                </div>
            </div></footer>
            <section className="u-backlink u-clearfix u-grey-80">
                <p style={{ background: '#333', textAlign: 'center', margin: 0, padding: 15, color: '#fff', fontSize: 18 }}>Copyright@ 2022 Dogs Life Brands</p>
            </section>
        </Fragment >
    )
}


export default Index