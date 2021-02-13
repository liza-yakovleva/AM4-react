import React, { Component } from "react"
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import '../common/style/reset.css'
import '../common/style/base.css'
import '../common/style/media.css'
class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Main />
        <Footer />
      </>
    )
  }
}
export default App