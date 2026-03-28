# Wild Cheese

Sitio web estatico del torneo **Wild Cheese** para *League of Legends: Wild Rift*.
Incluye portada, estado de registro, reglas, composiciones tematicas, resultados y una
pagina de lista de espera.

## Estructura

- `index.html`: portada y accesos principales.
- `registro.html`: estado actual de inscripciones.
- `reglas.html`: reglas oficiales y descarga del PDF.
- `composiciones.html`: composiciones del torneo.
- `resultados.html`: cuadro del torneo y premios.
- `enviar.html`: formulario de lista de espera.
- `src/style.css`: estilos principales cargados por las paginas.
- `src/js/main.js`: menu movil, boton de volver arriba y ano dinamico del footer.
- `src/scss/main.scss`: fuente SCSS sincronizada con el CSS actual.

## Uso local

No hace falta un paso de build. Puedes:

1. Abrir `index.html` directamente en el navegador.
2. O levantar un servidor estatico, por ejemplo:

```bash
python3 -m http.server 8080
```

Despues abre `http://localhost:8080`.

## Notas

- Las imagenes estan en `img/`.
- El PDF de reglas esta en `doc/reglas.pdf`.
- El formulario usa `formsubmit.co`, asi que conviene revisar periodicamente el destino del correo.
