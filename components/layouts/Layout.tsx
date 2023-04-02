import Header from '../modules/headers/Header';

const Layout = ({ children, className = '' }) => {
  return (
    <div className={`${className} relative min-h-screen`}>
      <div>
        <Header />
        <div className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8'>{children}</div>
      </div>
    </div>
  );
};
export default Layout;
