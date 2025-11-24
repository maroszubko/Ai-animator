import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function Dashboard(){
  const [count,setCount]=useState(0);
  useEffect(()=>{fetch('/api/usersCount').then(r=>r.json()).then(d=>setCount(d.count))},[]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Tvoja nástenka</h1>
      <p className="text-lg mb-4">Registrovaní používatelia: {count}</p>
      <Link href="/create"><a className="bg-blue-600 text-white px-6 py-3 rounded-xl">Vytvoriť animáciu</a></Link>
    </div>
  )
}
