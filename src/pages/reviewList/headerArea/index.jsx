import { Descriptions } from 'antd';
import { USER_NAME_TEXT } from "../../../common/constant";
import "./header-area.less";

const prefixCls = "headerArea";

export default function HeaderArea (props) {
  const { userNameText = USER_NAME_TEXT, userName, userIdText = "用户id", userId, companySiteText = "公司网站", companySite, companyQualificationText = "公司资质", companyQualification, careerFirstText = "一级行业", careerFirst, careerSecondText = "二级行业", careerSecond, userTypeText = "用户类型", userType, annotationsText = "批注", annotations } = props;

  return (
      <div className={prefixCls}>
        <Descriptions bordered>
          <Descriptions.Item label={userNameText}>{userName}</Descriptions.Item>
          <Descriptions.Item label={userIdText}>{userId}</Descriptions.Item>
          <Descriptions.Item label={companySiteText}>{companySite}</Descriptions.Item>
          <Descriptions.Item label={companyQualificationText}>{companyQualification}</Descriptions.Item>
          <Descriptions.Item label={careerFirstText}>{careerFirst}</Descriptions.Item>
          <Descriptions.Item label={careerSecondText}>{careerSecond}</Descriptions.Item>
          <Descriptions.Item label={userTypeText}>{userType}</Descriptions.Item>
          <Descriptions.Item label={annotationsText} span={3}>{annotations}</Descriptions.Item>
        </Descriptions>
      </div>
  )
}