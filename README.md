
# Abstract 

The designed and built application is a travel agency website that provides the ability to request quotes for hotels (currently only Decameron hotels) and offers information about the company, including how to verify its authenticity and legality. Additionally, it utilizes technologies such as React, React Router, Docker, and Google Cloud in the construction and deployment process.

- Live Site URL: (https://bit.ly/AterrizaAPP)

# Code and Context
## 1. Docker Automation with GitHub Actions:

A workflow has been created in GitHub Actions that triggers on each push to the main branch. This workflow performs the build of a Docker image, authentication with Google Cloud, configuration of Docker for Google Cloud, and ultimately, pushes the image to Google Cloud's Container Registry.
(https://github.com/AndresF-SanchezG/aterriza-application/blob/main/.github/workflows/docker-image.yml)

## 2. Dockerfile:

Dockerfile that sets up the application environment, installs dependencies, builds the application, and serves it on port 3000.
(https://github.com/AndresF-SanchezG/aterriza-application/blob/main/Dockerfile)

## 3. App(React)

Main component that wraps the application with the quotation context provider.
Configuration of routes using React Router for different pages of the application.
(https://github.com/AndresF-SanchezG/aterriza-application/blob/main/src/pages/App/index.jsx)

## 4. Context

A React context to manage the state related to quotations.
(https://github.com/AndresF-SanchezG/aterriza-application/blob/main/src/Context/index.jsx)

## 5. Home
Main page displaying a basic layout with a navigation Navbar, a logo, cards, and a footer.
(https://github.com/AndresF-SanchezG/aterriza-application/blob/main/src/pages/Home/index.jsx)

## 6. Card Componet

A React card component that displays two sections (Hotels and Experiences(Construction Component)) with images and links to specific routes using React Router.
(https://github.com/AndresF-SanchezG/aterriza-application/blob/main/src/Components/Card/index.jsx)

## 7. Form

A component that gathers information to quote hotel services, such as the city, the hotel, dates, and the quantity of adults and children.
(https://github.com/AndresF-SanchezG/aterriza-application/blob/main/src/Components/Formulario/index.jsx)

# Backend

The backend of this project is done with Python for data extraction and processing logic.


## 1. Configuration and Middleware:

Imports necessary classes and functions from FastAPI, pandas, datetime, os, and CORS middleware.
Configures the FastAPI object.
Sets up CORS configuration to allow requests from "http://localhost:3000".

## 2. Data Loading:

Reads an Excel file named 'Libro1.xlsx' into a DataFrame named dataFrameHoteles.
Creates an empty DataFrame df_usuarios to store user information.

## 3. File Handling:

Defines functions to save and delete files.

## 4. Routes and HTML Responses:

Defines a main route ("/") that returns an HTML page with a form for uploading Excel files.
Defines a route to handle file uploads ("/upload/") that deletes the existing file and saves the new Excel file.

## 5. API Routes:

/api/mostrar_usuarios: Displays registered users in HTML format.
/api/cotizar: Processes provided data to generate quotes based on information in the dataFrameHoteles DataFrame.
/api/guardar_usuario: Saves user information in the df_usuarios DataFrame.
![python-home]



## 6. Server Execution:

Runs the FastAPI server using uvicorn on the host "0.0.0.0" and port 5000.

# Code and Context
from fastapi import FastAPI, HTTPException, File, UploadFile
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from datetime import datetime
import os

app = FastAPI()

origins = ["http://104.198.178.240:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

dataFrameHoteles = pd.read_excel('./Libro1.xlsx')
df_usuarios = pd.DataFrame(columns=['nombre', 'email', 'contacto', 'Hotel', 'Habitación', 'cant_adultos', 'cant_niños', 'valor_adultos', 'valor_niños', 'Desde', 'Hasta*', 'valor_total', 'cant_total'])
# print(dataFrameHoteles)


dataFrameHoteles['Desde'] = pd.to_datetime(dataFrameHoteles['Desde'])
dataFrameHoteles['Hasta*'] = pd.to_datetime(dataFrameHoteles['Hasta*'])

def save_uploaded_file(file: UploadFile, destination: str):
    with open(destination, "wb") as file_object:
        file_object.write(file.file.read())

def delete_file(file_path: str):
    if os.path.exists(file_path):
        os.remove(file_path)

@app.get("/", response_class=HTMLResponse)
async def index():
    return """
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto+Mono:wght@400;500&family=Roboto+Slab:wght@500;600&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="" type="text/css">
        <title>Plenty APP</title>
    </head>
    <body>
        <div class="container">
            <h1>ATERRIZA APP - MODULO ADMINISTRATIVO</h1>
            <h3>Sección: Carga de Facturas</h3>
            <div class="view">
                <h4></h4>
                <form action="/upload" method="post" enctype="multipart/form-data">
                    <input type="file" name="excel_file" accept=".xls, .xlsx">
                    <input type="submit" value="Subir Excel">
                </form>
            </div>
        </div>
    </body>
    </html>
    """

@app.post("/upload/")
async def upload_file(excel_file: UploadFile = File(...)):
    # Eliminar el archivo existente si hay uno
    delete_file("Libro1.xlsx")

    # Guardar el nuevo archivo
    save_uploaded_file(excel_file, "Libro1.xlsx")
    
    return {"filename": excel_file.filename}

@app.get("/api/mostrar_usuarios", response_class=HTMLResponse)
async def mostrar_usuarios():
    global df_usuarios

    # Convertir el DataFrame a HTML
    usuarios_html = df_usuarios.to_html()

    # Crear la respuesta HTML
    html_content = f"""
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Usuarios Registrados</title>
    </head>
    <body>
        <h1>Usuarios Registrados</h1>
        {usuarios_html}
    </body>
    </html>
    """

    return HTMLResponse(content=html_content)



@app.post("/api/cotizar")
def cotizar(data: dict):

    # Obtener los datos proporcionados
    hotel = data.get('hotel', '')
    fecha_entrada = data.get('fecha_entrada', '')
    fecha_salida = data.get('fecha_salida', '')
    cantidad_adultos = data.get('cantidad_adultos', 0)
    cantidad_ninos = data.get('cantidad_ninos', 0)

    # Validar y sanitizar los datos según sea necesario

    # Definir las fechas de entrada y salida
    fecha_desde = datetime.strptime(fecha_entrada, '%Y-%m-%d')
    fecha_hasta = datetime.strptime(fecha_salida, '%Y-%m-%d')

    # Filtrar por Hotel y fechas
    filtro = (dataFrameHoteles['Hotel'] == hotel) & (dataFrameHoteles['Desde'] <= fecha_hasta) & (dataFrameHoteles['Hasta*'] >= fecha_desde)
    df_filtrado = dataFrameHoteles[filtro].copy()

    
    # Calcular la nueva columna cant_dias utilizando .apply
    df_filtrado['cant_dias'] = df_filtrado.apply(lambda row: (min(row['Hasta*'], fecha_hasta) - max(row['Desde'], fecha_desde)).days + 1, axis=1)

    # Identificar la última fila de cada grupo de habitaciones y restar 1 solo a esa fila
    last_rows = df_filtrado.duplicated(subset='Habitación', keep='last')
    df_filtrado.loc[df_filtrado.index.isin(last_rows[last_rows == False].index), 'cant_dias'] -= 1

    # Agregar las columnas cant_adultos y cant_niños con valores proporcionados
    df_filtrado['cant_adultos'] = int(cantidad_adultos)
    df_filtrado['cant_niños'] = int(cantidad_ninos)

    # Corregir la condición para calcular valor_adultos correctamente
    df_filtrado['valor_adultos'] = df_filtrado.apply(lambda row: row['cant_dias'] * row['Sencilla'] * row['cant_adultos'] if row['cant_adultos'] == 1 and row['cant_niños'] == 0 else row['cant_dias'] * row['Doble/Adicional'] * row['cant_adultos'], axis=1)

    # Corregir la condición para calcular valor_niños correctamente
    df_filtrado['valor_niños'] = df_filtrado.apply(lambda row: row['cant_dias'] * row['Niño'] * row['cant_niños'] if row['cant_niños'] > 0 and row['cant_adultos'] > 0 else 0, axis=1)

    # Obtener el resultado como un DataFrame con las nuevas columnas
    resultado_df = df_filtrado[['Hotel', 'Habitación', 'Desde', 'Hasta*', 'Descuento', 'Sencilla', 'Doble/Adicional', 'Niño', 'cant_adultos', 'cant_niños', 'valor_adultos', 'valor_niños']]

    # Agrupar solo por Habitación y sumar las columnas relevantes
    resumen_totalizado = resultado_df.groupby(['Hotel', 'Habitación']).agg({
        'cant_adultos': 'first',  # Tomar el primer valor, ya que todos son iguales
        'cant_niños': 'first',   # Tomar el primer valor, ya que todos son iguales
        'valor_adultos': 'sum',
        'valor_niños': 'sum',
        'Desde': lambda x: fecha_entrada,   # Utilizar fecha_entrada para todas las filas agrupadas
        'Hasta*': lambda x: fecha_salida    # Utilizar fecha_salida para todas las filas agrupadas
    }).reset_index()
    

    # Calcular el valor_total como la suma de valor_adultos y valor_niños
    resumen_totalizado['valor_total'] = resumen_totalizado['valor_adultos'] + resumen_totalizado['valor_niños']

    resumen_totalizado['cant_adultos'] = resumen_totalizado['cant_adultos'].astype(int)
    resumen_totalizado['cant_niños'] = resumen_totalizado['cant_niños'].astype(int)
    resumen_totalizado['valor_adultos'] = resumen_totalizado['valor_adultos'].astype(int)
    resumen_totalizado['valor_niños'] = resumen_totalizado['valor_niños'].astype(int)
    resumen_totalizado['valor_total'] = resumen_totalizado['valor_total'].astype(int)

    # Agregar una nueva columna que sume cant_adultos y cant_niños
    resumen_totalizado['cant_total'] = resumen_totalizado['cant_adultos'] + resumen_totalizado['cant_niños']


    # Imprimir el nuevo DataFrame resumen_totalizado
    # print(resultado_df)
    # print(resumen_totalizado)
  

    # Convertir el DataFrame resumen_totalizado a un diccionario JSON
    resultado_json = resumen_totalizado.to_dict(orient='records')

    return {'resultado': resultado_json}

@app.post("/api/guardar_usuario")
async def guardar_usuario(data: dict):
    global df_usuarios

    solicitud_cotizacion = {
        'nombre': data['nombre'],
        'email': data['email'],
        'contacto': data['contacto'],
        'Hotel': data['eleccionUsuario']['Hotel'],
        'Habitación': data['eleccionUsuario']['Habitación'],
        'cant_adultos': data['eleccionUsuario']['cant_adultos'],
        'cant_niños': data['eleccionUsuario']['cant_niños'],
        'valor_adultos': data['eleccionUsuario']['valor_adultos'],
        'valor_niños': data['eleccionUsuario']['valor_niños'],
        'Desde': pd.to_datetime(data['eleccionUsuario']['Desde']).strftime('%d/%m/%Y'),
        'Hasta*': pd.to_datetime(data['eleccionUsuario']['Hasta*']).strftime('%d/%m/%Y'),
        'valor_total': data['eleccionUsuario']['valor_total'],
        'cant_total': data['eleccionUsuario']['cant_total'],
    }

    # Agregar la nueva solicitud al DataFrame global de usuarios
    df_usuarios = pd.concat([df_usuarios, pd.DataFrame([solicitud_cotizacion])], ignore_index=True)
    print(df_usuarios)

    return {"mensaje": "Datos recibidos y procesados correctamente"}

if __name__ == '__main__':
    import uvicorn
  
    uvicorn.run(app, host="0.0.0.0", port=5000)










