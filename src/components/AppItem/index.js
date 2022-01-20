import './index.css'

const AppItem = props => {
  const {eachAppItem} = props
  const {appId, appName, imageUrl} = eachAppItem

  return (
    <li key={appId} className="app-item">
      <img alt={appName} src={imageUrl} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
