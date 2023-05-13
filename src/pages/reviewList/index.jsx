import HeaderArea from "./headerArea";
import ReviewListArea from "./reviewListArea";
import data from "../../mock/reviewListDataAll";

const getUserId = () => {
  const urlArr = window.location.href.split("?");
  const paramsStr = urlArr[1];
  const userIdArr = paramsStr.split("=");
  return userIdArr[1];
}
export default function ReviewList() {
  const { result, success } = data;
  if (!result || !success) {
    return null;
  }
  const userId = getUserId();
  console.log("userIdReq: ", userId);
  const { headerData, listData, pageLink } = result;
  return (<div>
    <HeaderArea {...headerData} />
    {/*<ActionArea />*/}
    <ReviewListArea listData={listData} pageLink={pageLink} userId={userId} />
  </div>)
}