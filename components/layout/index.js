
import React, {Component} from 'react'
import NavBar from './navbar'
import Footer from './footer'

class Index extends Component{
    render(){
      return(
        <>
          <NavBar/>
           {this.props.children}
          <Footer/>
        </>
      )
    }
  }
  
  export default Index