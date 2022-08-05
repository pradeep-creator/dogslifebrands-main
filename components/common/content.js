import Paws from './paws'

const Index = () => {
    return (
        <>
            <section className="u-clearfix u-white u-section-2 mb-5" >
                <div style={{ marginTop: "3em", textAlign: "center" }}>
                    <div><h2 className="u-text u-text-1" style={{ marginBottom: "1em" }}>App Community Platforms of Dogs Life Brands</h2></div>
                    <div className='resposive-btm-img'><img className='img-responsive' src="/images/logo.png" /></div>
                </div>
            </section>
            <section className="u-clearfix u-white u-section-2 margin-10" id="sec-1f01">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <div className="u-align-left u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-similar-fill u-group-1">
                                <div className="u-container-layout u-valign-middle-md u-valign-middle-xl u-container-layout-1 pt-5">
                                    <h3 className="u-text u-text-1 mt-5" style={{ cursor: 'pointer' }} onClick={() => {
                                        window.open("https://littledogslife.club", "_blank")
                                    }}>Little Dogs Life</h3>
                                    <h1 className="u-text u-text-black u-text-2"><b>Connect. Discover. Enjoy!</b></h1>
                                    <div className="u-border-1 u-border-black u-hidden-xs u-line u-line-horizontal u-line-3"></div>
                                    <p className="u-expanded-width-xs u-text u-text-grey-dark-3 u-text-3">A free exclusive community, a unique social network app and a
                                        personalized furbaby marketplace for small breed dog owners and all kinds of little dogs! <br />
                                        Join for free and fun:

                                        <a href="https://littledogslife.club" target="_blank" className="link_color"> littledogslife.com   </a><img style={{ width: "20px" }} src="/images/littledogslife.jpeg" />
                                        &nbsp;</p>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <img src="/images/littledogslife.jpeg" width={'100%'} className="u-align-left u-image u-left-0 u-image-1" onClick={() => {
                                window.open("https://littledogslife.club", "_blank")
                            }} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-white u-section-3 margin-10" id="sec-e5d1">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <img src="/images/dog_big_life.png"
                                width={'400'}
                                className="u-align-left u-image u-left-0 u-image-1"
                                onClick={() => {
                                    window.open("https://bigdogslife.app", "_blank")
                                }}
                            />
                        </div>
                        <div className='col-md-6 col-sm-12 text-right pt-5'>
                            <h3 className="u-text u-text-1 mt-5" style={{ cursor: 'pointer' }} onClick={() => {
                                window.open("https://bigdogslife.app", "_blank")
                            }}>Big Dogs Life</h3>
                            <h2 className="u-text u-text-black u-text-2"><b>Connect. Discover. Enjoy even more!
                            </b></h2>
                            <p className="u-text u-text-grey-dark-3 u-text-3">
                                Our 2nd proprietary app for big dog owners. A free exclusive community, a unique social network app and a personalized marketplace for big dog breed owners and all kinds of larger dogs!
                                <a href="https://bigdogslife.app" target="_blank" className="link_color"> bigdogslife.app   </a><img style={{ width: "20px" }} src="/images/dog_big_life.png" />

                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="u-clearfix u-white u-section-4" id="sec-8229">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12 col-sm-12'>
                            <h4 className="u-text u-text-1">DLB Opportunities</h4>
                            <h2 className="u-heading-font u-text u-text-black u-text-2 mt-4 mb-4">Non-Profit Appreciation Partnerships </h2>
                            <p>
                                We are huge believers, supporters, and fans of any non-profit or charity, that has been established to help our furry friends. It is amazing the work that you all do, and we want to applaud you and help you spread awareness! <br /><br />
                                Having been in non-profits operations and provided digital fundraising services for non-profits of all sizes in the past, our combined experience of our team understand the challenges that are faced on a daily basis to be successful for your cause. That is why here at Little Dogs Life we have created a partnership opportunity to help make it easier for you to get to where you want to be with a continual basis of support.
                            </p>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-8 col-lg-8'>
                            <img src='/images/non_profit.jpeg' width={'100%'} />
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <h3>Partnership Summary</h3>
                            <ul>
                                <li> LittleDogsLife™ App platform...</li>
                                <li>Showcase dogs in need of help depending on your needs</li>
                                <li>Mentions in-app and social media</li>
                                <li>Cause Marketing opportunities</li>
                                <li>Native blog articles link to your site</li>
                                {/* <!-- <li>Native blog articles in blog area</li> --> */}
                                <li>120k Annual Google Ad Grant upon approval</li>
                                <li>Crowdfunding Programs</li>
                                <li>Traditional presence at Little Dogs Life events worldwide</li>
                            </ul>
                            <p>To Apply: </p>
                            <p>Email <a href="mailto:hello@littledogslife.com">hello@littledogslife.com</a> for next steps. </p>
                        </div>
                    </div>
                </div>
                <br /><br /><br /><br />
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h4 className="u-heading-font u-text u-text-black u-text-2 mb-5"><b>Join the Pack</b></h4>
                            <p>
                                Want to be a part of Dogs Life Brands from the ground floor and earn special gifts, promotional credits and/or job or internship opportunities?
                                You'd be working alongside (remotely) an incredible team of progressive entrepreneurs, creators, developers, and of course little dog lovers!
                                Are you or do you know someone who is any of the following?
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 col-lg-4'>
                            <ul>
                                <li>An individual with a passion for bringing people  together in your community</li>
                                <li>Enjoy recommending your favorite spots in town that you bring your little dog to </li>
                                <li>Enjoy social media, be creative and spend your share of fun time online</li>
                                <li>Love sharing your creative side with your products for little dogs</li>
                                <li>Love to write about the breed you own or health & different topics about little dogs?</li>
                                <li>Are a dog product manufacturer or distributor</li>
                                <li>Run a dog service company or medical center for animals</li>
                            </ul>
                            <p>Contact us: </p>
                            <p> Email <a href="mailto:hello@littledogslife.com">hello@littledogslife.com</a> and let us know what you are interested in!</p>
                        </div>
                        <div className='col-md-8 col-lg-8'>
                            <img src='/images/dog_opportunity.jpeg' width={'100%'} />
                        </div>
                    </div>
                </div>

                <Paws />
            </section >



        </>
    )
}

export default Index