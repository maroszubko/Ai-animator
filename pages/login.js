import { useRouter } from 'next/router';
import { useState } from 'react';
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const handleLogin = async () => {
    if (!email) return;
    // call API to register
    await fetch('/api/usersCount', { method: 'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({ email }) });
    router.push('/dashboard');
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Prihlásenie</h1>
      <input className="border p-3 rounded-xl mb-4 w-64" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl" onClick={handleLogin}>Pokračovať</button>
    </div>
  );
}
