import { ReactNode } from "react";

const orderStyles = {
  "0": "order-0",
  "-1": "-order-1",
}

const sizeStyles = {
  sm: "min-h-[312px]",
  md: "min-h-[438px] md:min-h-fit",
  lg: "min-h-[600px]",
};

interface Props {
  size: "sm" | "md" | "lg";
  bgImageStyle?: string;
  order?: "0" | "-1";
  children?: ReactNode;
}

function BrandItem({ size, bgImageStyle, order = "0", children }: Props) {
  const baseStyles = `h-[1px] min-h-[312px] bg-cover bg-center bg-no-repeat overflow-hidden md:h-auto ${orderStyles[order]}`;

  return (
    <div className={`${baseStyles} ${sizeStyles[size]} ${bgImageStyle}`}>
      {children}
    </div>
  );
}

BrandItem.defaultProps = {
  bgImageStyle: "",
  order: "0",
  children: undefined,
};

export default BrandItem;
