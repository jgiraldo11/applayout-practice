import Main from "./Main";
import NavList from "./NaveList";
import Footer from "./Footer";

export default function AppLayout({children}) {


return (
  <>
    <Main />
    <NavList />
    {children}
    <Footer />
  </>
);
}