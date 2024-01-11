import PngComponent from '../../components/pngtojpg'
import CanonicalURL from '../../components/CanonicalURL';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Convert Your PNG To JPG in Free',
    description: 'Convert Your PNG To JPG in Free',
  }

 
export default function PDFTOJPG() {
  
  return (
    
    <div><Header />
           <CanonicalURL />
            <div><PngComponent /></div>
            <Footer />
    </div>
  );
}