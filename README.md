# AI Animator Starter

This repository contains a one-click friendly starter for a high-end AI animation web app.

**What's inside**
- Next.js frontend (React + Tailwind)
- Simple serverless API stubs (auth counter, upload/animate stub)
- FastAPI Docker worker blueprint for GPU-based AI processing
- Dockerfile + docker-compose for worker
- README with deployment steps

## One-click deploy (frontend)
1. Push this repository to GitHub.
2. In Vercel, choose 'Import Project' and select this repo (or click the 'Deploy to Vercel' badge if you add it).
3. Add environment variables from `.env.example` in Vercel.

## Run locally
- Frontend:
  - `npm install`
  - `npm run dev`
- Worker (demo blueprint):
  - `cd worker`
  - `python3 -m venv .venv && source .venv/bin/activate`
  - `pip install -r requirements.txt`
  - `uvicorn worker_server:app --host 0.0.0.0 --port 8001`

## Notes
- This starter uses a simulated AI endpoint in `/pages/api/animate` (serverless stub). Replace with your GPU worker by setting `AI_WORKER_URL` in `.env`.
- Stripe placeholders are included; add your keys in Vercel env.

Enjoy — the project is ready to be customized and connected to real ML workers.
