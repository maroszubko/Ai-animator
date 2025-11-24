FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY worker_server.py .
CMD ["uvicorn", "worker_server:app", "--host", "0.0.0.0", "--port", "8001"]
