const AppItem = (props) => {
  const { appDetails } = props;
  const { imageUrl, appName, category } = appDetails;
  return (
    <li className="m-4 gap-3 flex flex-col justify-center items-center bg-white rounded-2xl p-3 h-[120px]">
      <img src={imageUrl} alt={appName} className="w-16 h-12" />
      <p className="text-sm">{appName}</p>
    </li>
  );
};
export default AppItem;
