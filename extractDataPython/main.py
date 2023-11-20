from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
from datetime import datetime

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Tu DataFrame
dataFrameHoteles = pd.read_excel('./Libro1.xlsx')

# Convertir las columnas de fechas
dataFrameHoteles['Desde'] = pd.to_datetime(dataFrameHoteles['Desde'])
dataFrameHoteles['Hasta*'] = pd.to_datetime(dataFrameHoteles['Hasta*'])

@app.route('/', methods=['GET'])
def home():
    return '¡Hola! Esta es la página de inicio.'

@app.route('/api/cotizar', methods=['POST'])
def cotizar():
    data = request.get_json()

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
    df_filtrado = dataFrameHoteles[filtro].copy()  # Agregar .copy() para evitar el SettingWithCopyWarning

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

    # Imprimir el nuevo DataFrame resumen_totalizado
    print(resultado_df)
    print(resumen_totalizado)

    # Convertir el DataFrame resumen_totalizado a un diccionario JSON
    resultado_json = resumen_totalizado.to_dict(orient='records')

    return jsonify({'resultado': resultado_json})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)












