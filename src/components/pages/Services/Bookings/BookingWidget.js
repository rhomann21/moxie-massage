import { useEffect } from 'react';

const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = 'https://widgets.mindbodyonline.com/javascripts/healcode.js';
      script.async = true;
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };
  
  export default useScript;
