import { LeftOutlined } from "@ant-design/icons";

export interface IPrevArrowProps {
  className?: string;
  style?: any;
  onClick?: () => void;
}

export default function PrevArrow(props: IPrevArrowProps) {
  const { className, style, onClick } = props;

  return <LeftOutlined className={className} style={{ ...style, fontSize: 20, color: "black" }} onClick={onClick} />;
}
