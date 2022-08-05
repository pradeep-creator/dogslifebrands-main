
import { Fragment } from 'react'
import Layout from '../components/layout'
import NavBarLink from '../components/layout/navLinks'
import Content from '../components/common/content'

export default function Home() {
  return (
    <Fragment>
      <Layout>      
        <section >
         <NavBarLink/>
        </section>
        <Content/>
      </Layout>

    </Fragment>
  )
}
