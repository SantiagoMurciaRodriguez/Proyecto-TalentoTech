import pandas as pd
import matplotlib.pyplot as plt
from PIL import Image
import os

DATA_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../data'))

def generar_gif_barras():
    # Gráfico de barras: Women Entrepreneurship Index por país
    df = pd.read_csv(os.path.join(DATA_DIR, 'women_entrepreneurship.csv'), sep=';')
    grouped = df[['Country', 'Women Entrepreneurship Index']].sort_values('Women Entrepreneurship Index', ascending=False)
    frames = []
    for i in range(3, len(grouped) + 1, 3):
        plt.figure(figsize=(12, 6))
        plt.bar(grouped['Country'][:i], grouped['Women Entrepreneurship Index'][:i], color='purple')
        plt.title('Índice de Emprendimiento Femenino por País')
        plt.xlabel('País')
        plt.ylabel('Women Entrepreneurship Index')
        plt.xticks(rotation=90)
        plt.tight_layout()
        fname = f'barras_{i}.png'
        plt.savefig(fname)
        img = Image.open(fname)
        frames.append(img.copy())
        img.close()
        plt.close()
        os.remove(fname)
    gif_path = os.path.join(DATA_DIR, 'grafico_barras.gif')
    frames[0].save(gif_path, save_all=True, append_images=frames[1:], duration=500, loop=0)

def generar_gif_torta():
    # Gráfico de torta: cantidad de entidades por localidad
    df = pd.read_csv(os.path.join(DATA_DIR, 'emprendimiento_social.csv'), sep=';', encoding='latin1')
    localidad_counts = df['Localidad'].value_counts()
    localidades = localidad_counts.index.tolist()
    cantidades = localidad_counts.values.tolist()
    frames = []
    for i in range(3, len(localidades) + 1, 3):
        plt.figure(figsize=(8, 8))
        plt.pie(cantidades[:i], labels=localidades[:i], autopct='%1.1f%%', startangle=140)
        plt.title('Proporción de entidades por localidad')
        plt.tight_layout()
        fname = f'torta_{i}.png'
        plt.savefig(fname)
        img = Image.open(fname)
        frames.append(img.copy())
        img.close()
        plt.close()
        os.remove(fname)
    gif_path = os.path.join(DATA_DIR, 'grafico_torta.gif')
    frames[0].save(gif_path, save_all=True, append_images=frames[1:], duration=700, loop=0)

def generar_gif_area():
    # Gráfico de área: comparación de Entrepreneurship Index y Women Entrepreneurship Index por país
    df = pd.read_csv(os.path.join(DATA_DIR, 'women_entrepreneurship.csv'), sep=';')
    df = df.sort_values('Country')
    frames = []
    for i in range(3, len(df) + 1, 3):
        plt.figure(figsize=(12, 6))
        plt.stackplot(
            df['Country'][:i],
            df['Entrepreneurship Index'][:i],
            df['Women Entrepreneurship Index'][:i],
            labels=['Entrepreneurship Index', 'Women Entrepreneurship Index'],
            colors=['#ff9999', '#66b3ff']
        )
        plt.title('Comparación de Emprendimiento e Innovación por País')
        plt.xlabel('País')
        plt.ylabel('Índice')
        plt.legend(loc='upper left')
        plt.xticks(rotation=90)
        plt.tight_layout()
        fname = f'area_{i}.png'
        plt.savefig(fname)
        img = Image.open(fname)
        frames.append(img.copy())
        img.close()
        plt.close()
        os.remove(fname)
    gif_path = os.path.join(DATA_DIR, 'grafico_area.gif')
    frames[0].save(gif_path, save_all=True, append_images=frames[1:], duration=400, loop=0)

def generar_todos_los_gifs():
    generar_gif_barras()
    generar_gif_torta()
    generar_gif_area()

if __name__ == "__main__":
    generar_todos_los_gifs()