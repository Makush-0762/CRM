import SideMenu from '../../components/side_menu/SideMenu';

export default function Layout({ children }) {
    return (
        <div className="layout">
            <SideMenu />
            {children}
        </div>
    );
}
