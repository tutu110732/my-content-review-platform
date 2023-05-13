import { useEffect, useState } from "react";
import {Modal, Space, Table} from 'antd';
import ActionArea from "./components/actionArea";
import data from "../../../mock/reviewListDataAll";
import dataNew from "../../../mock/reviewListDataAllNew";
import "./review-list-area.less";

const prefixCls = "reviewListArea";
export default function ReviewListArea (props) {
  const [ showModalType, setShowModalType ] = useState("");
  const [ selectedRowKeys, setSelectedRowKeys ] = useState([]);
  const [ listData, setListData ] = useState([]);
  const [ pageLink, setPageLink ] = useState("");
  const [ userId, setUserId ] = useState("");
  const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = Modal;

  useEffect(() => {
    const { listData: listDataRes, pageLink, userId } = data.result;
    setListData(listDataRes);
    setPageLink(pageLink);
    setUserId(userId);
    setSelectedRowKeys([]);
  }, []);

  const onAcceptOption = (id) => {
    if (hasSelected) {
      setShowModalType("success");
    } else {
      setShowModalType("empty");
    }
  }

  const onRejectOption = () => {
    if (hasSelected) {
      setShowModalType("rejectItem");
    } else {
      setShowModalType("empty");
    }
  }

  const onAcceptAccount = () => {
    setShowModalType("acceptAccount");
  }

  const onRefuseAccount = () => {
    setShowModalType("rejectAccount");
  }

  const setInit = (next) => {
    if (next) {
      setListData(dataNew.result.listData);
    } else {
      setListData([...listData]);
    }
    setSelectedRowKeys([]);
  }

  const onRejectItem = (id) => {
    console.log(id + "rejected");
  }

  const listHeader = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '描述',
      dataIndex: 'describe',
      key: 'describe',
      render: (_, record) => <div style={{maxWidth: "300px"}}>{record.describe}</div>,
    },

    {
      title: '图片',
      dataIndex: 'images',
      key: 'images',
      render: (_, record) => (<div className={"imagesItemContainer"}>
        {record.images.map(item => {
          return <div className="imagesItem" style={{backgroundImage: `url(${item})`} } />
        })}
      </div>)
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
          <div className={"btnContainer"}>
            <Space size="middle">
              <span class="reviewButton" onClick={() => {onAcceptOption(record.id)}}>通过</span>
              <span class="reviewButton" onClick={() => {onRejectOption(record.id)}}>拒绝</span>
            </Space>
          </div>
      ),
    },
    // {
    //   title: '落地页',
    //   dataIndex: 'pageLink',
    //   key: 'dataIndex',
    //   render: (_, record) => (
    //       <div className={"pageLinkContainer"}>
    //         <span className="pageLinkUrl">{record.pageLink}</span>
    //         <iframe id="zxb" className="pageLinkIframe" src={record.pageLink} width={"300px"}/>
    //       </div>
    //   ),
    //   onCell: (_, index) => ({
    //     colSpan: 10,
    //   }),
    // }
  ];

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("newSelectedRowKeys: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-header`}>
          <ActionArea
              setInit={setInit}
              onAcceptOption={onAcceptOption}
              onRejectOption={onRejectOption}
              onAcceptAccount={onAcceptAccount}
              onRefuseAccount={onRefuseAccount}
          />
        </div>
        <div className={`${prefixCls}-content`}>
          <div className={`${prefixCls}-content-table`}>
            <Table
                rowKey={record => {return record.title}}
                rowSelection={rowSelection}
                columns={listHeader}
                dataSource={listData}
            />
          </div>
          <div className={`${prefixCls}-content-appendix`}>
            <div className={`${prefixCls}-content-appendix-title`}>落地页</div>
            <div className={`${prefixCls}-content-appendix-content`}>
              <div className={`${prefixCls}-content-appendix-content-main`}>
                <span className="pageLinkUrl">{pageLink.slice(0, 80)}</span>
                <iframe id="zxb" className="pageLinkIframe" src={pageLink} width={"300px"} height={"1000px"}/>
              </div>
              <div className={`${prefixCls}-content-appendix-content-button`}>
                <div className="reviewButton" onClick={() => {onAcceptAccount(userId)}}>通过</div>
                <div className="reviewButton" style={{marginTop: "100px"}} onClick={() => {onRefuseAccount(userId)}}>拒绝</div>
              </div>
            </div>
          </div>
        </div>
        {showModalType === "success" && <InternalPanel type="success" style={{ position: "absolute", width: 260, height: 150, left: "500px", zIndex: 999 }} onOk={() => setShowModalType("")}>
          成功发送请求——通过所选
        </InternalPanel>}
        {showModalType === "rejectItem" && <InternalPanel type="error" style={{ position: "absolute", width: 260, height: 150, left: "500px", zIndex: 999 }} onOk={() => setShowModalType("")}>
          成功发送请求——拒绝账户
        </InternalPanel>}
        {showModalType === "acceptAccount" && <InternalPanel type="success" style={{ position: "absolute", width: 260, height: 150, left: "500px", zIndex: 999 }} onOk={() => setShowModalType("")}>
          成功发送请求——通过账户：{userId}
        </InternalPanel>}
        {showModalType === "rejectAccount" && <InternalPanel type="error" style={{ position: "absolute", width: 260, height: 150, left: "500px", zIndex: 999 }} onOk={() => setShowModalType("")}>
          成功发送请求——拒绝账户：{userId}
        </InternalPanel>}
        {showModalType === "empty" && <InternalPanel
            type="confirm"
            style={{ position: "absolute", width: 260, height: 150, left: "500px", zIndex: 999 }}
            onOk={() => setShowModalType("")}
            onCancel={() => setShowModalType("")}
        >
          未选中任何数据
        </InternalPanel>}
      </div>
  )
}