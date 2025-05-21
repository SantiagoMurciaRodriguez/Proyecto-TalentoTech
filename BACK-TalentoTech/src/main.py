from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
import os

DATA_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '../data'))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/grafico_barras")
def grafico_barras():
    gif_path = os.path.join(DATA_DIR, 'grafico_barras.gif')
    with open(gif_path, "rb") as f:
        return Response(content=f.read(), media_type="image/gif")

@app.get("/grafico_torta")
def grafico_torta():
    gif_path = os.path.join(DATA_DIR, 'grafico_torta.gif')
    with open(gif_path, "rb") as f:
        return Response(content=f.read(), media_type="image/gif")

@app.get("/grafico_area")
def grafico_area():
    gif_path = os.path.join(DATA_DIR, 'grafico_area.gif')
    with open(gif_path, "rb") as f:
        return Response(content=f.read(), media_type="image/gif")