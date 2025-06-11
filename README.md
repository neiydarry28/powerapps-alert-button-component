# powerapps-alert-button-component
Componente de código de boton de Alerta
# powerapps-alert-button-component

Componente de código de botón de Alerta para Power Apps.

## Descripción

Este componente permite agregar un botón personalizado con una alerta visual (badge) en aplicaciones de Power Apps. Es ideal para notificar al usuario sobre mensajes, tareas pendientes, nuevas actividades o cualquier evento que requiera atención inmediata. El componente mejora la experiencia de usuario al proporcionar una señal visual clara y configurable.

## Funcionalidades principales

- **Botón personalizable:** Permite cambiar el texto, color y tamaño del botón.
- **Badge de alerta:** Muestra un contador o punto de alerta sobre el botón, indicando la cantidad de notificaciones o simplemente la presencia de una alerta.
- **Eventos:** Permite ejecutar acciones personalizadas al hacer clic en el botón.
- **Visibilidad dinámica:** El badge puede mostrarse u ocultarse según condiciones definidas por el usuario.

## Propiedades configurables

El usuario puede modificar las siguientes propiedades desde Power Apps:

| Propiedad         | Descripción                                                    | Tipo      | Ejemplo           |
|-------------------|----------------------------------------------------------------|-----------|-------------------|
| `ButtonText`      | Texto que se muestra en el botón                               | Texto     | "Ver mensajes"    |
| `ShowBadge`       | Indica si se muestra el badge de alerta                        | Booleano  | true/false        |
| `BadgeCount`      | Número que se muestra en el badge (puede ser solo un punto)    | Número    | 5                 |
| `ButtonColor`     | Color de fondo del botón                                       | Color     | "#0078D4"         |
| `BadgeColor`      | Color del badge de alerta                                      | Color     | "#FF0000"         |
| `OnSelect`        | Acción a ejecutar al hacer clic en el botón                    | Acción    | Navegar, etc.     |

> **Nota:** Personaliza esta tabla según las propiedades reales de tu componente.

## Beneficios de uso

- **Mejora la experiencia de usuario:** El usuario recibe notificaciones visuales inmediatas y claras.
- **Fácil integración:** Se puede agregar a cualquier pantalla de Power Apps sin necesidad de código adicional.
- **Personalizable:** Se adapta a la identidad visual de tu aplicación.
- **Aumenta la interacción:** Motiva a los usuarios a revisar mensajes o tareas pendientes.

## Ejemplo de uso

1. Agrega el componente a tu aplicación desde el panel de componentes personalizados.
2. Configura las propiedades según tus necesidades:
   - Cambia el texto del botón a "Ver notificaciones".
   - Establece `BadgeCount` a la cantidad de alertas pendientes.
   - Personaliza los colores para que coincidan con tu marca.
3. Asigna una acción al evento `OnSelect`, por ejemplo, navegar a la pantalla de notificaciones.

## Requisitos

- Power Apps Studio
- Permisos para agregar componentes personalizados

## Instalación

1. Descarga o importa el componente en tu entorno de Power Apps.
2. Inserta el componente en la pantalla deseada.
3. Configura las propiedades desde el panel derecho.

## Licencia

[MIT](LICENSE)  
Puedes modificar y reutilizar este componente según tus necesidades.

---

¿Tienes dudas o sugerencias? ¡Abre un issue o contacta al autor!# powerapps-alert-button-component

Componente de código de botón de Alerta para Power Apps.

---

## Español

### Descripción

Este componente permite agregar un botón personalizado con una alerta visual (badge) en aplicaciones de Power Apps. Es ideal para notificar al usuario sobre mensajes, tareas pendientes, nuevas actividades o cualquier evento que requiera atención inmediata. El componente mejora la experiencia de usuario al proporcionar una señal visual clara y configurable.

### Funcionalidades principales

- **Botón personalizable:** Permite cambiar el texto, color y tamaño del botón.
- **Badge de alerta:** Muestra un contador o punto de alerta sobre el botón, indicando la cantidad de notificaciones o simplemente la presencia de una alerta.
- **Eventos:** Permite ejecutar acciones personalizadas al hacer clic en el botón.
- **Visibilidad dinámica:** El badge puede mostrarse u ocultarse según condiciones definidas por el usuario.

### Propiedades configurables

El usuario puede modificar las siguientes propiedades desde Power Apps:

| Propiedad         | Descripción                                                    | Tipo      | Ejemplo           |
|-------------------|----------------------------------------------------------------|-----------|-------------------|
| `ButtonText`      | Texto que se muestra en el botón                               | Texto     | "Ver mensajes"    |
| `ShowBadge`       | Indica si se muestra el badge de alerta                        | Booleano  | true/false        |
| `BadgeCount`      | Número que se muestra en el badge (puede ser solo un punto)    | Número    | 5                 |
| `ButtonColor`     | Color de fondo del botón                                       | Color     | "#0078D4"         |
| `BadgeColor`      | Color del badge de alerta                                      | Color     | "#FF0000"         |
| `OnSelect`        | Acción a ejecutar al hacer clic en el botón                    | Acción    | Navegar, etc.     |

> **Nota:** Personaliza esta tabla según las propiedades reales de tu componente.

### Beneficios de uso

- **Mejora la experiencia de usuario:** El usuario recibe notificaciones visuales inmediatas y claras.
- **Fácil integración:** Se puede agregar a cualquier pantalla de Power Apps sin necesidad de código adicional.
- **Personalizable:** Se adapta a la identidad visual de tu aplicación.
- **Aumenta la interacción:** Motiva a los usuarios a revisar mensajes o tareas pendientes.

### Ejemplo de uso

1. Agrega el componente a tu aplicación desde el panel de componentes personalizados.
2. Configura las propiedades según tus necesidades:
   - Cambia el texto del botón a "Ver notificaciones".
   - Establece `BadgeCount` a la cantidad de alertas pendientes.
   - Personaliza los colores para que coincidan con tu marca.
3. Asigna una acción al evento `OnSelect`, por ejemplo, navegar a la pantalla de notificaciones.

### Requisitos

- Power Apps Studio
- Permisos para agregar componentes personalizados

### Instalación

1. Descarga o importa el componente en tu entorno de Power Apps.
2. Inserta el componente en la pantalla deseada.
3. Configura las propiedades desde el panel derecho.

### Licencia

[MIT](LICENSE)  
Puedes modificar y reutilizar este componente según tus necesidades.

---

## English

### Description

This component allows you to add a custom button with a visual alert (badge) in Power Apps applications. It is ideal for notifying users about messages, pending tasks, new activities, or any event that requires immediate attention. The component enhances the user experience by providing a clear and configurable visual signal.

### Main Features

- **Customizable button:** Allows you to change the button's text, color, and size.
- **Alert badge:** Displays a counter or alert dot on the button, indicating the number of notifications or simply the presence of an alert.
- **Events:** Lets you execute custom actions when clicking the button.
- **Dynamic visibility:** The badge can be shown or hidden based on user-defined conditions.

### Configurable Properties

Users can modify the following properties from Power Apps:

| Property          | Description                                                    | Type      | Example           |
|-------------------|----------------------------------------------------------------|-----------|-------------------|
| `ButtonText`      | Text displayed on the button                                   | Text      | "View messages"   |
| `ShowBadge`       | Indicates if the alert badge is shown                          | Boolean   | true/false        |
| `BadgeCount`      | Number displayed in the badge (can be just a dot)              | Number    | 5                 |
| `ButtonColor`     | Button background color                                        | Color     | "#0078D4"         |
| `BadgeColor`      | Alert badge color                                              | Color     | "#FF0000"         |
| `OnSelect`        | Action to execute when clicking the button                     | Action    | Navigate, etc.    |

> **Note:** Customize this table according to your component's actual properties.

### Benefits

- **Improves user experience:** Users receive immediate and clear visual notifications.
- **Easy integration:** Can be added to any Power Apps screen without additional code.
- **Customizable:** Adapts to your application's visual identity.
- **Increases interaction:** Encourages users to check messages or pending tasks.

### Usage Example

1. Add the component to your app from the custom components panel.
2. Configure the properties as needed:
   - Change the button text to "View notifications".
   - Set `BadgeCount` to the number of pending alerts.
   - Customize the colors to match your brand.
3. Assign an action to the `OnSelect` event, for example, navigate to the notifications screen.

### Requirements

- Power Apps Studio
- Permissions to add custom components

### Installation

1. Download or import the component into your Power Apps environment.
2. Insert the component into the desired screen.
3. Configure the properties from the right panel.

### License

[MIT](LICENSE)  
You can modify and reuse this component as needed.

---

Do you have questions or suggestions? Open an issue or contact the author!