import { Link } from "react-router-dom";
import { Li, List } from "../generic/list/style";
import { Wrapper } from "./styles";

const Sidebar = () => {
  return (
    <Wrapper>
      <List>
        <Li>
          <Link to='/'>
            <i className='fas fa-dove'></i>
          </Link>
        </Li>
        <Li>
          <Link to='/'>
            <i className='fas fa-home'></i>
          </Link>
        </Li>
        <Li>
          <Link to='/search'>
            <i className='fas fa-search'></i>
          </Link>
        </Li>
        <Li>
          <Link to='/notification'>
            <i className='fas fa-bell'></i>
          </Link>
        </Li>
        <Li>
          <Link to='/message'>
            <i className='fas fa-envelope'></i>
          </Link>
        </Li>
        <Li>
          <Link to='/profile'>
            <i className='fas fa-user-tie'></i>
          </Link>
        </Li>
        <Li>
          <Link to='/login'>
            <i className='fas fa-sign-out-alt'></i>
          </Link>
        </Li>
      </List>
    </Wrapper>
  );
};

export default Sidebar;
