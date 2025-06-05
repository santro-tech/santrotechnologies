import NavbarWithTopSection from './NavbarWithTopSection';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <NavbarWithTopSection /> {/* ✅ Use the enhanced version */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
