// Write your code here
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './index.css'

const Layout = props => {
  console.log(props)
  return (
    <div className="layout-main-container">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Layout
