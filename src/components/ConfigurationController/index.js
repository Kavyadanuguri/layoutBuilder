// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onContentChange = event => {
        onToggleShowContent(event.target.checked)
      }

      const onLeftChange = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onRightChange = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="controller-container">
          <h1 className="controller-h1">Layout</h1>
          <div className="controller-list-container">
            <input
              onChange={onContentChange}
              checked={showContent}
              className="input1"
              type="checkbox"
              id="label1"
            />
            <label htmlFor="label1" className="controller-p1">
              Content
            </label>
          </div>
          <div className="controller-list-container">
            <input
              onChange={onLeftChange}
              checked={showLeftNavbar}
              className="input1"
              type="checkbox"
              id="label2"
            />
            <label htmlFor="label2" className="controller-p1">
              Left Navbar
            </label>
          </div>
          <div className="controller-list-container">
            <input
              id="label3"
              onChange={onRightChange}
              checked={showRightNavbar}
              className="input1"
              type="checkbox"
            />
            <label htmlFor="label3" className="controller-p1">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
