import { useState, useEffect } from "react";
import { Form, Input, DatePicker, Button } from "antd";
import './search-area.less';

const prefixCls = "searchArea";
export default function SearchArea (props) {
  const { userNameText = "用户名：", productPipelineText = "产品线：", careerText = "行业：", taskCreateTimeText = "任务创建时间：", searchBtnText = "搜索", getSearch } = props;
  const { RangePicker } = DatePicker;

  const [, forceUpdate] = useState({});

  const [ form ] = Form.useForm();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onSearchBtnClick = (values) => {
    getSearch(values);
  }

  return (
      <div className={prefixCls}>
        <Form form={form} layout="inline" onFinish={onSearchBtnClick}>
          <Form.Item label={userNameText} name="userName" style={{marginBottom : "24px"}}>
            <Input />
          </Form.Item>
          <Form.Item label={productPipelineText} name={productPipelineText}>
            <Input />
          </Form.Item>
          <Form.Item label={careerText} name={careerText}>
            <Input type={careerText} />
          </Form.Item>
          <Form.Item label={taskCreateTimeText} name={taskCreateTimeText} style={{marginBottom : "24px"}}>
            <RangePicker />
          </Form.Item>
          <Form.Item shouldUpdate>
            <Button type="primary" htmlType="submit">{searchBtnText}</Button>
          </Form.Item>
        </Form>
      </div>
  )
}