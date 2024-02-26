// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-nav-container">
              <h1 className="left-nav-h1">Left Navbar Menu</h1>
              <ul>
                <li className="left-nav-p1">Item 1 </li>
                <li className="left-nav-p1">Item 2 </li>
                <li className="left-nav-p1">Item 3 </li>
                <li className="left-nav-p1">Item 4 </li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h2 className="left-nav-h1">Content</h2>
              <p className="content-p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-nav-container">
              <h1 className="left-nav-h1">Right Navbar </h1>
              <div className="right-con1">
                <p className="right-nav-p1">Ad 1 </p>
              </div>
              <div className="right-con1">
                <p className="right-nav-p1">Ad 2 </p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
