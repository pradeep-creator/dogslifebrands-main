import axios from 'axios'
import { createRef, Fragment, useState } from 'react'
import Layout from '../components/layout'
import ReCAPTCHA from "react-google-recaptcha";
import { baseUrl, message } from "../lib/enum"
import NavBarLink from '../components/layout/navLinks'
import Paws from '../components/common/paws'

export default function Index() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [body, setBody] = useState("")
    const [loader, setLoader] = useState(false)

    const recaptchaRef = createRef()

    const _clearState = () => {
        setName("")
        setEmail("")
        setPhone("")
        setBody("")
        // recaptchaRef.current
        setLoader(false)
        window.location.reload()
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        try {


            if (loader) {
                return
            }

            const recaptchaValue = recaptchaRef.current.getValue();
            if (!recaptchaValue) {
                return alert("please select recaptcha")
            }
            setLoader(true)
            let pyload = {
                name, email, phone, message: body, site_recaptcha: recaptchaValue
            }
            await axios.post(baseUrl() + "/api/contact", pyload)
            alert(message.success)
            _clearState()
        } catch (error) {
            alert(message.serverError)
            setLoader(false)
        }
    }

    return (
        <Fragment>
            <Layout>
                <section >
                    <div className='main-menu inner-page' style={{ position: 'relative' }}>
                        <NavBarLink />
                    </div>
                </section>
                <section className="u-clearfix u-white u-section-4" id="sec-8229">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-container-style u-expanded-width u-group u-group-1">
                            <div className="u-container-layout u-valign-middle u-container-layout-1">
                                <div style={{ display: "flex", textAlign: 'center' }}>
                                    <div style={{ flex: "33.33%" }}><img style={{ width: "75%" }} src="/images/dog_2.png" /></div>
                                    <div style={{ flex: "33.33%" }}><img style={{ width: "70%" }} src="/images/logo.png" /></div>
                                    <div style={{ flex: "33.33%" }}><img style={{ width: "75%" }} src="/images/dog_5.png" /></div>
                                </div>
                                <div className="u-heading-font u-text u-text-black u-text-2">
                                    <div className="container">
                                        <form onSubmit={onSubmit}>
                                            <input type="hidden" name="site_recaptcha" id="recaptcha" className="recaptcha" value="" />
                                            <label htmlFor="fname">Name</label>
                                            <input value={name} type="text" id="fname" required name="firstname" placeholder="Your name.." onChange={e => setName(e.target.value)} />

                                            <label htmlFor="email">Email</label>
                                            <input value={email} type="email" id="email" required name="email" placeholder="Your email.." onChange={e => setEmail(e.target.value)} />

                                            <label htmlFor="phone">Phone</label>
                                            <input value={phone} type="text" id="phone" required name="phone" placeholder="Your phone.." onChange={e => setPhone(e.target.value)} />

                                            <label htmlFor="message">Message</label>
                                            <textarea value={body} id="message" required name="message" placeholder="Write something.."
                                                style={{ height: "200px" }} onChange={e => setBody(e.target.value)}></textarea>

                                            <ReCAPTCHA
                                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
                                                ref={recaptchaRef}
                                                onChange={e => {
                                                    // console.log(e)
                                                }}
                                            />

                                            <input type="submit" value={loader ? "Wait..." : "Submit"} />
                                        </form>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <Paws />

                </section>
            </Layout>

        </Fragment>
    )
}
