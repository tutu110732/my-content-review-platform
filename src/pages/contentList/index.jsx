import { useState } from "react";
import SearchArea from "./components/searchArea";
import ContentListArea from "./components/contentListArea";
import "./content-list.less";

const prefixCls = "contentList";

export default function ContentList() {
  const [ searchParams, setSearchParams ] = useState({});
  const getSearch = (params) => {
    setSearchParams(params);
  }
  return <div className={prefixCls}>
    <SearchArea getSearch={getSearch} />
    <ContentListArea searchParams={searchParams} />
  </div>
}