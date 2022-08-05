import { Fragment } from 'react'
import Layout from '../components/layout'
import NavBarLink from '../components/layout/navLinks'
import Content from '../components/common/content'

export default function Home() {
  return (
    <Fragment>
      <Layout>
        <section className="u-clearfix u-image u-typography-Normal--Introduction u-white u-section-1 position-relative" id="sec-2984">
          <div className='banner-img'>
            <div className='main-menu'>
              <NavBarLink isHome={true} />
            </div>
            <div className='container'>
              <div className='row'>
                <div className="u-clearfix u-sheet u-sheet-1 banner-text">
                  <div className="u-align-left u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-similar-fill u-group-1">
                    <div className="u-container-layout u-valign-middle u-container-layout-1">
                      <h3 className="u-expanded-width-xl u-heading-font u-text  u-text-1 welcome_text">welcome</h3>
                      <h1 className="u-text u-text-white u-text-2">Dogs Life Brands</h1>
                      <h4>Behind Every Dog is a Super Human</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </section>

        <Content />


      </Layout>

    </Fragment>
  )
}
