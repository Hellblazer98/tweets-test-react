import { CgTwitter } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Header } from './AppBar.styled';


export const AppBar = () => {


    return (
        <Header>
            <NavLink to="/">
                <CgTwitter size='30'></CgTwitter>
            </NavLink>
            <Navigation/>
        </Header>

    );
};