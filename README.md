# Arcovel (Deep Ledger)

Arcovel is a technical research companion that ingests documents, maps knowledge coverage, and synthesizes physics-compliant canonical specifications using Gemini.

## Features

- **Ingest**: Support for PDF, DOCX, TXT, MD, CSV, etc.
- **Knowledge Graph**: Dashboard visualization of entities and claims.
- **Deep Research**: Canonical Spec generation using Gemini 2.0 reasoning models.
- **Notebook**: Interactive Python environment (Pyodide WASM + Local Kernel).
- **Backend**: FastAPI service for Arxiv search and heavy simulations.

## Quick Start

### Frontend

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

### Backend (Python)

The backend is required for Arxiv search, heavy simulations, and the "Local Kernel" notebook runtime.

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # Windows: .venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the server:
   ```bash
   uvicorn app:app --reload --port 8000
   ```

**Docker**:
You can also run the backend using Docker:
```bash
cd backend
docker build -t arcovel-backend .
docker run -p 8000:8000 arcovel-backend
```

## Environment Variables

Copy `backend/.env.example` to `backend/.env` to configure:
- `CORS_ORIGINS`: Comma-separated list of allowed origins (e.g., `http://localhost:5173`).
