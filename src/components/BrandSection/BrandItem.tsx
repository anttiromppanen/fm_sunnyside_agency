import { ReactNode } from "react";

const sizeStyles = {
  sm: "min-h-[312px]",
  md: "min-h-[438px]",
  lg: "min-h-[600px]",
};

interface Props {
  size: "sm" | "md" | "lg";
  bgImageStyle?: string;
  children?: ReactNode;
}

function BrandItem({ size, bgImageStyle, children }: Props) {
  const baseStyles = "h-[1px] min-h-[312px] bg-contain bg-center bg-no-repeat";

  return (
    <div className={`${baseStyles} ${sizeStyles[size]} ${bgImageStyle}`}>
      {children}
    </div>
  );
}

BrandItem.defaultProps = {
  bgImageStyle: "",
  children: undefined,
};

export default BrandItem;
