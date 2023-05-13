import { useState, useEffect } from "react";
import { Table, Space } from 'antd';
import data from "../../../../mock/contentListDataAll";
import dataNew from "../../../../mock/contentListDataAllNew";
import "./content-list-area.less";

const prefixCls = "contentListArea";

export default function ContentListArea (props) {
  const { searchParams } = props;
  const [ listData, setListData ] = useState([]);

  useEffect(() => {
    // 这里用于粗糙地模拟异步请求
    const { listData: listDataRes } = data.result;
    setListData(listDataRes);
    console.log("searchParams.userName: ", searchParams.userName);
    if (searchParams.userName === "tutu") {
      const { listData: listDataResNew } = dataNew.result;
      setListData(listDataResNew);
    }
  }, [searchParams]);

  const onCancelItem = (userName) => {
    // 此处正常情况下应该向后端发送请求，此处为模拟展示效果，直接前端进行处理。
    const getUserNameIndex = listData.findIndex(item => item.userName === userName);
    const listDataCopy = listData;
    listDataCopy.splice(getUserNameIndex, 1);
    setListData([...listDataCopy]);
  }

  const listHeader = [
    {
      title: '用户名',
      dataIndex: 'userName',
      key: 'userName',
      sorter: {
        // 这一块的处理根据实际场景应该还可以更精致一些
        compare: (a, b) => a.userName.localeCompare(b.userName),
        multiple: 4,
      },
    },
    {
      title: '产品线',
      dataIndex: 'productPipeline',
      key: 'productPipeline',
      sorter: {
        // 这一块的处理根据实际场景应该还可以更精致一些
        compare: (a, b) => a.productPipeline.localeCompare(b.productPipeline),
        multiple: 3,
      },
    },
    {
      title: '行业',
      dataIndex: 'career',
      key: 'career',
      sorter: {
        // 这一块的处理根据实际场景应该还可以更精致一些
        compare: (a, b) => a.career.localeCompare(b.career),
        multiple: 2,
      },
    },
    {
      title: '任务创建时间',
      dataIndex: 'taskCreateTime',
      key: 'taskCreateTime',
      sorter: {
        // 这一块的处理根据实际场景应该还可以更精致一些
        compare: (a, b) => a.taskCreateTime.localeCompare(b.taskCreateTime),
        multiple: 1,
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
          <Space size="middle">
            <span class="reviewButton" onClick={() => {
              window.location.href += "reviewList" + "?userId=" + record.userId;
            }}
            >审核</span>
            <span class="reviewButton" onClick={() => {onCancelItem(record.userName)}}>删除</span>
          </Space>
      ),
    },
  ];

  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    total: listData.length,
    pageSize: 10,
    showTotal: ((total) => {return `共 ${total} 条数据`})
  };

  return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-header`} />
        <div className={`${prefixCls}-content`}>
          <Table dataSource={listData} columns={listHeader} pagination={paginationProps} />
        </div>
      </div>
  );
}