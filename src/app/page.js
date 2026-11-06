import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Profile from '@/modules/profile';
import Footer from './components/Footer/Footer';

/**
 * Page composition root.
 * app/ owns the layout shell; the profile feature lives in modules/.
 */
export default function Page() {
  return (
    <>
      <Background />
      <div id="top" className="page">
        <Header />
        <main>
          <Profile />
        </main>
        <Footer />
      </div>
    </>
  );
}
