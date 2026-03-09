import "../styles/MainLayout.css";

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <main className="main-layout__content">{children}</main>
    </div>
  );
}

export default MainLayout;