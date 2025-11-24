import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
export const config = { api: { bodyParser: false } };
export default async function handler(req,res){
  if (req.method !== 'POST') return res.status(405).end();
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'parse_error' });
    const file = files.file;
    const buffer = fs.readFileSync(file.filepath);
    const outDir = path.resolve('./public/demo-assets');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const outName = 'output-' + Date.now() + path.extname(file.originalFilename || 'jpg');
    const outPath = path.join(outDir, outName);
    fs.writeFileSync(outPath, buffer);
    // simulate processing delay
    await new Promise(r => setTimeout(r, 1200));
    res.status(200).json({ url: '/demo-assets/' + outName });
  });
}
