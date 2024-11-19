from flask import Flask, request, jsonify
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib
from flask_cors import CORS

# Inicializa la aplicación Flask
app = Flask(__name__)

# Permite solicitudes CORS desde el origen de tu aplicación Next.js
CORS(app, origins="http://localhost:3000")  # Cambia el puerto si es necesario

# Cargar el modelo entrenado desde un archivo
try:
    model = joblib.load('random_forest_model.pkl')
except Exception as e:
    print(f"Error al cargar el modelo: {e}")
    model = None

# Ruta para manejar la predicción
@app.route('/predict', methods=['POST'])
def predict():
    # Verificar si el modelo se cargó correctamente
    if model is None:
        return jsonify({'error': 'Modelo no cargado correctamente'}), 500
    
    try:
        # Obtener los datos en formato JSON
        data = request.get_json()
        
        # Imprimir los datos para verificar que se recibieron correctamente
        print("Datos recibidos:", data)
        
        # Columnas requeridas
        required_columns = ['Age', 'Marital Status', 'Education Level', 'Number of Children', 
                            'Smoking Status', 'Physical Activity Level', 'Employment Status', 
                            'Alcohol Consumption', 'Dietary Habits', 'Sleep Patterns', 
                            'History of Mental Illness', 'History of Substance Abuse', 'Family History of Depression']
        
        # Verificar que todas las columnas requeridas estén presentes
        for col in required_columns:
            if col not in data:
                return jsonify({'error': f'Falta columna: {col}'}), 400
        
        # Convertir los valores de los datos a enteros (ya que se envían como cadenas)
        for key in data:
            # Verifica si el valor es un número en formato de cadena y conviértelo a entero
            try:
                data[key] = int(data[key])
            except ValueError:
                # Si no puede convertir a entero, dejar el valor como está (puede ser texto)
                pass
        
        # Convertir los datos a un DataFrame para la predicción
        input_data = pd.DataFrame([data])
        
        # Predecir el resultado
        prediction = model.predict(input_data)
        
        # Determinar el resultado y devolverlo como JSON
        result = "Riesgo de depresión" if prediction[0] == 1 else "No hay riesgo de depresión"
        
        return jsonify({'result': result})
    
    except Exception as e:
        print(f"Error en la predicción: {e}")
        return jsonify({'error': 'Hubo un error al hacer la predicción'}), 500

# Ejecutar la aplicación en el puerto 5000
if __name__ == '__main__':
    app.run(debug=True)

