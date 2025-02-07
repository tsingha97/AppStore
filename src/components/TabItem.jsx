const TabItem = (props) => {
  const { tabDetails, onClickTabItem, isActive } = props;
  const { displayText, tabId } = tabDetails;
  const activeTabClass = isActive ? "font-bold" : "";
  return (
    <li
      className={`mr-4 cursor-pointer underline underline-offset-8 ${activeTabClass}`}
      onClick={() => onClickTabItem(tabId)}
    >
      {displayText}
    </li>
  );
};
export default TabItem;
