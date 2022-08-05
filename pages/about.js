import { Fragment } from 'react'
import Layout from '../components/layout'
import NavBarLink from '../components/layout/navLinks'
import Paws from '../components/common/paws'

export default function Index() {
  return (
    <Fragment>
      <Layout>
        <section  >
          <div className='main-menu inner-page' style={{ position: 'relative' }}>
            <NavBarLink />
          </div>
        </section>
        <section className="u-clearfix u-white u-section-4" id="sec-8229">
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-container-style u-expanded-width u-group u-group-1">
              <div className="u-container-layout u-valign-middle u-container-layout-1">
                {/* <h3 className="u-text u-text-1">About</h3> */}
                <div style={{ display: "flex", textAlign: 'center' }}>
                  <div style={{ flex: "33.33%" }}><img style={{ width: "75%" }} src="/images/dog_1.png" /></div>
                  <div style={{ flex: "33.33%" }}><img style={{ width: "70%" }} src="/images/logo.png" /></div>
                  <div style={{ flex: "33.33%" }}><img style={{ width: "75%" }} src="/images/dog_3.png" /></div>
                </div>
                <p className="">
                  <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Dogs Life Brands&trade;</span>, creates and manages Digital Community-Focused Brands for like-minded people worldwide that want to join others that have either a small breed dog -
                  <span style={{ fontWeight: 'bold', color: "#00b0f0", fontStyle: 'italic' }}> Little Dogs Life&trade;</span>, or a larger breed dog -  <span style={{ fontWeight: 'bold', color: "#92D050", fontStyle: 'italic' }}>Big Dogs Life&trade;</span>. <br /><br />

                  Both proprietary community app platforms are free-to-join digital communities for “Super Humans”, aka insatiable dog lovers. DLB provides a harmonious place for individuals to connect and meet hyper-local new friends with little or big dogs alike, as well as across the world. <br /><br />

                  Our apps offer a user-friendly platform that provides familiar social media, the ability to create play dates with others in their neighborhood, opportunities for users to showcase their dog-friendly based businesses through our eCommerce targetability and so much more to be revealed.<br /><br />

                  Being a user-generated platform of like-minded individuals, our personalized marketplace provides ample sales and marketing opportunities for all types of dog products with the user’s dog size and breed in mind.<br /><br />
                  DLB also provides event marketing opportunities and marketing services at native events and popular festivals as well as Entertainment Programs for varied outlets of broadcast and streaming services.<br /><br />
                  All DLB brands and marketing services provide several advertising programs for targeted dog-friendly products and services. Animal-Focused Non-Profit organizations are welcome to showcase their charity at no cost on our applications or cause marketing initiatives at events.
                </p>
                <h3 style={{ fontStyle: 'italic', textAlign: 'center', fontWeight: 'bold', color: "#ffcb25" }}>And always remember… Behind Every Dog is a Super Human!</h3>

              </div>
            </div>
          </div>
          <Paws />

        </section>
      </Layout>
    </Fragment>
  )
}
