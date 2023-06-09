import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push("/");
        }, 3000);
    },[])

    return ( 
        <div className="not-found">
            <h1>Oooops...</h1>
            <h3>This page does not exist</h3>
            <p>Go back to <Link href="/">Home page</Link></p>
        </div>
     );
}
 
export default NotFound;