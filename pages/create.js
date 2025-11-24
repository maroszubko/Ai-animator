import { useState } from 'react';
export default function Create(){
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [output, setOutput] = useState(null);

  const handleUpload = (e) => {
    const f = e.target.files[0];
    if (f) {
      setFile(f);
      setPreview(URL.createObjectURL(f));
    }
  };

  const runAnimate = async () => {
    if (!file) return;
    setProcessing(true);
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('/api/animate', { method: 'POST', body: form });
    const data = await res.json();
    setProcessing(false);
    setOutput(data.url);
  };

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-4 text-center">AI Animátor (High-end demo)</h1>
      <input type="file" className="mb-4" onChange={handleUpload} />
      {preview && <img src={preview} alt="preview" className="w-64 mb-4 border rounded-xl" />}
      {file && !processing && <button className="bg-blue-600 text-white px-6 py-3 rounded-xl" onClick={runAnimate}>Spustiť AI animáciu</button>}
      {processing && <p className="mt-4 text-xl">Spracováva sa…</p>}
      {output && (
        <div className="mt-8">
          <h2 className="text-xl mb-2">Výstup:</h2>
          <img src={output} className="w-64 border rounded-xl" />
        </div>
      )}
    </div>
  )
}
