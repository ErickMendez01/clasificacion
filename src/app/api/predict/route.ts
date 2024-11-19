import { NextResponse } from "next/server";

// Manejar las solicitudes POST
export async function POST(req: Request) {
  try {
    // Extraer el cuerpo de la solicitud
    const body = await req.json();

    // Hacer la solicitud al backend Flask
    const flaskResponse = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // Verificar si Flask respondió correctamente
    if (!flaskResponse.ok) {
      throw new Error(`Error en Flask: ${flaskResponse.statusText}`);
    }

    // Obtener la respuesta JSON de Flask
    const data = await flaskResponse.json();

    // Devolver la respuesta a la solicitud original
    return NextResponse.json(data);
  } catch (error) {
    // Manejar errores y enviar una respuesta adecuada
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 }
    );
  }
}
