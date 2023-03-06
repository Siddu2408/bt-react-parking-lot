import "./Button.scss";

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
  color: string;
  variant: string;
  isDisabled: boolean;
}

const Button = ({
  onClick,
  children,
  className,
  color,
  variant,
  isDisabled,
}: ButtonProps) => {
  const buttonClass = `btn ${className} ${variant} ${color}`;
  return (
    <button disabled={isDisabled} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "default",
  variant: "contained",
};

export default Button;
