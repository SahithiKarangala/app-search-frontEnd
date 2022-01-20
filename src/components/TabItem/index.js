import './index.css'

const TabItem = props => {
  const {eachTabItem, selectedCategory, changeCategory} = props
  const {tabId, displayText} = eachTabItem

  const onSelected = () => {
    changeCategory(tabId)
  }

  return (
    <li
      key={tabId}
      onClick={onSelected}
      className={` ${
        selectedCategory === tabId ? 'selectedOn' : 'app-category'
      }`}
    >
      <button
        type="button"
        className={`${
          selectedCategory === tabId ? 'selectedButton' : 'unSelectedButton'
        }`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
