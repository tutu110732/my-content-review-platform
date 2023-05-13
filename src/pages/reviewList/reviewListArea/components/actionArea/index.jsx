import "./action-area.less";

const prefixCls = "actionArea";
export default function ActionArea (props) {
  const { setInit, onAcceptOption, onRejectOption, onAcceptAccount, onRefuseAccount } = props;

  const onPending = () => {
    onNextItemClick(false);
  }

  const onNextItemClick = (next) => {
    setInit(next);
  }
  return (<div className={prefixCls}>
    <div className={`${prefixCls}-left`}>
      <div
          className={`${prefixCls}-button ${prefixCls}-button-accept`}
          onClick={onAcceptOption}
      >
        通过所选
      </div>
      <div
          className={`${prefixCls}-button ${prefixCls}-button-refuse`}
          onClick={onRejectOption}
      >
        拒绝所选
      </div>
      <div
          className={`${prefixCls}-button ${prefixCls}-button-accept`}
          onClick={onAcceptAccount}
      >
        通过账户
      </div>
      <div
          className={`${prefixCls}-button ${prefixCls}-button-refuse`}
          onClick={onRefuseAccount}
      >
        拒绝账户
      </div>
    </div>
    <div className={`${prefixCls}-right`}>
      <div
        className={`${prefixCls}-button ${prefixCls}-button-normal`}
        onClick={onPending}
      >
        搁置
      </div>
      <div
          className={`${prefixCls}-button ${prefixCls}-button-normal`}
          onClick={() => onNextItemClick(true)}
      >
        下一个任务
      </div>
    </div>
  </div>)
}