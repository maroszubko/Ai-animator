import fs from 'fs';
import path from 'path';
const DATA_FILE = path.resolve('./users.json');
function readUsers(){ try{ return JSON.parse(fs.readFileSync(DATA_FILE,'utf8')) }catch(e){ return [] } }
function writeUsers(users){ fs.writeFileSync(DATA_FILE, JSON.stringify(users || [])) }
export default function handler(req,res){
  if (req.method === 'GET'){
    const users = readUsers();
    res.status(200).json({ count: users.length });
  } else if (req.method === 'POST'){
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'no email' });
    const users = readUsers();
    if (!users.includes(email)) users.push(email);
    writeUsers(users);
    res.status(200).json({ ok:true, count: users.length });
  } else res.status(405).end();
}
