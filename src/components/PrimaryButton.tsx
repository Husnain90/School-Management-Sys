import React from 'react'

type Props = {
  border: string;
  backGroundColor: string;
  color:string
  children?: React.ReactNode;
  height: string;
  onClick?: () => void ;
  radius: string
  width: string;
  type:"submit" | "reset" | "button" | undefined;
  margin :string

}

const PrimaryButton:React.FC<Props> = (  {

    border,
    backGroundColor,
    children,
    height,
    onClick, 
    radius,
    width,
    type,
    color,
    margin

}
) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{
        backgroundColor: backGroundColor,
        color:color,
        border,
        borderRadius: radius,
        height,
        width,
        margin
      }}
    >{children}</button>
  );
}

export default PrimaryButton