
import Theme from '../styles/theme';
import '../components/Cursor/Cursor.css';

export default function App({ Component, pageProps }) {
   
  
 
  return (
    
    <>

      
      <Theme>
        
        <Component {...pageProps} />
        
      </Theme>
    </>
  );
}
 