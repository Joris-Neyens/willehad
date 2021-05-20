import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import localStorage from "localStorage";
import NProgress from "nprogress";


export default function AdminLayout({ children }) {
    
    const [loading, setLoading] = useState(true)
  
  const router = useRouter();

    useEffect(() => {
        NProgress.start();
      
    const auth = localStorage.getItem("auth");
    const parsedAuth = JSON.parse(auth);

        if (!parsedAuth) {
        
            router.push("/admin")
            NProgress.done();
        } else {
            NProgress.done();
      setLoading(false)
    }

  }, []);

  if (!loading) {
    return <div>{children}</div>;
  } else {
      
    return <>loading</> 
  };
}
