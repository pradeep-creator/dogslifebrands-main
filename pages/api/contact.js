import axios from "axios"

const handler = async (req, res) =>  {
    try {
        let url = process.env.API_URL
        url = url + "/api/contact/dogslife-brands"
        let {body} = req
        let payload = {
            name: body.name,
            phone: body.phone,
            email: body.email,
            message: body.message,
            site_recaptcha: body.site_recaptcha
        }
        await axios.post(url, payload)
        return res.status(200).json({
            message: "success"
        })
    } catch (error) {
        return res.status(500).json({
            message: "server error"
        })
    }
}

export default handler