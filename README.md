# Simulador de Trading

Este proyecto es un simulador de trading que permite a los usuarios comprar y vender acciones de diferentes compañías. Incluye un gráfico de precios en tiempo real, un panel de control para realizar transacciones y una tarjeta de débito que muestra el saldo disponible, las ganancias brutas, los impuestos y el saldo neto después de impuestos.

## Características

- **Gráfico de Precios en Tiempo Real**: Visualiza los cambios de precios de las acciones en tiempo real.
- **Compra y Venta de Acciones**: Realiza transacciones de compra y venta de acciones.
- **Tarjeta de Débito**: Muestra el saldo disponible, las ganancias brutas, los impuestos y el saldo neto después de impuestos.
- **Selección de Acciones**: Elige entre diferentes acciones para realizar transacciones.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Recharts**: Biblioteca de gráficos para React.
- **Tailwind CSS**: Framework de CSS para diseño rápido y moderno.
- **React Icons**: Biblioteca de iconos para React.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Dario3111/Trading_app.git
   cd Trading_app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia la aplicación:

   ```bash
   npm start
   ```

4. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en funcionamiento.

## Uso

1. **Selecciona una Acción**: Usa los botones en la parte inferior para seleccionar la acción que deseas comprar o vender.
2. **Compra y Venta**: Usa los botones de "Comprar" y "Vender" para realizar transacciones.
3. **Tarjeta de Débito**: Observa cómo cambia tu saldo, ganancias brutas, impuestos y saldo neto después de cada transacción.

## Ecuación Matemática del Gráfico

El gráfico de precios se genera dinámicamente sin una tabla de datos. Cada 2 segundos, se genera un nuevo precio aleatorio utilizando la siguiente ecuación:

\[ \text{nuevoPrecio} = \text{precioActual} + (\text{Math.random()} - 0.5) \times 20 \]

Esta ecuación aplica un cambio aleatorio al precio actual, asegurando que el nuevo precio no sea menor que 1. El gráfico se actualiza automáticamente para mostrar los nuevos datos.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Crea un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de [mi perfil de GitHub](https://github.com/Dario3111).

---

¡Gracias por usar el Simulador de Trading!
