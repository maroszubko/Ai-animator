import Link from 'next/link'
export default function Home(){
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">AI Animator — High-end Starter</h1>
      <p className="text-lg mb-6 max-w-xl">
        Premeň fotku na animáciu jedným klikom. Tento starter obsahuje frontend, API stubs a worker blueprint.
      </p>
      <div className="flex gap-4">
        <Link href="/create"><a className="bg-blue-600 text-white px-6 py-3 rounded-xl">Vytvoriť animáciu</a></Link>
        <Link href="/login"><a className="bg-gray-900 text-white px-6 py-3 rounded-xl">Prihlásiť sa</a></Link>
      </div>
    </div>
  )
}
