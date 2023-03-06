import { Link } from "react-router-dom";
import "./Header.scss";

export interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <div className='header-container'>
      <Link to={"/"}>
        <h1 className='title'>{props.title}</h1>
      </Link>
      <Link to={"/free-parking-spot"}>
        <h1 className='parking-space-free'>Free the Parking spot</h1>
      </Link>
    </div>
  );
};

export default Header;
