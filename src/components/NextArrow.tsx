import { RightOutlined } from "@ant-design/icons";

export interface INextArrowProps {
  className?: string;
  style?: any;
  onClick?: () => void;
}

export default function NextArrow(props: INextArrowProps) {
  const { className, style, onClick } = props;
  return <RightOutlined className={className} style={{ ...style, fontSize: 20, color: "black" }} onClick={onClick} />;
}
