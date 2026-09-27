# 🖥️ NEOX VM LAB

**NEOX VM LAB** es un proyecto experimental de sistema operativo de escritorio creado para ejecutarse principalmente en el navegador durante el desarrollo y, más adelante, como una imagen de prueba para máquinas virtuales.

> ⚠️ **Estado:** desarrollo temprano / laboratorio. No es un sistema operativo de producción.

## 🎯 Objetivo

Construir una experiencia de escritorio tipo sistema operativo alrededor de una interfaz web, manteniendo los componentes separados para poder probarlos antes de preparar una ISO.

## 🧩 Componentes planeados

- 🪟 Escritorio y sistema de ventanas
- 📋 Menú Start
- 📌 Barra de tareas
- 📁 Explorador de archivos
- 💻 Terminal
- ⚙️ Configuración
- 🌐 Navegador
- 🛒 App Store experimental
- 📊 Monitor del sistema
- 🖥️ VM Manager
- 🌐 Panel de red
- 🔔 Notificaciones
- 🔒 Centro de seguridad
- 👤 Perfiles de usuario
- 💾 Sistema de archivos virtual para el laboratorio

## 🏗️ Arquitectura inicial

```text
NEOX VM LAB
│
├── Desktop
├── Window Manager
├── Start Menu
├── Taskbar
├── File Explorer
├── Terminal
├── Settings
├── Browser
├── App Store
├── System Monitor
└── VM Manager
```

GitHub Pages puede servir esta interfaz, pero **no convierte la página en una máquina virtual real**. Las funciones que necesiten acceso al hardware o a un sistema invitado real deberán implementarse posteriormente mediante componentes apropiados.

## 🧪 Fases del proyecto

### Fase 1 — Web Lab
- [x] Crear repositorio
- [ ] Crear shell del escritorio
- [ ] Ventanas arrastrables
- [ ] Start Menu
- [ ] Taskbar
- [ ] Sistema de aplicaciones
- [ ] Terminal simulada
- [ ] Explorador de archivos virtual

### Fase 2 — System Lab
- [ ] Sistema de configuración
- [ ] Usuarios y perfiles locales
- [ ] Almacenamiento virtual
- [ ] Monitor del sistema
- [ ] Red simulada
- [ ] API interna entre componentes

### Fase 3 — VM Lab
- [ ] Definir formato de imagen de prueba
- [ ] Integración con el repositorio de ISOs
- [ ] Pruebas en VirtualBox
- [ ] Pruebas en VMware
- [ ] Documentación de instalación

### Fase 4 — Experimental ISO
Las imágenes arrancables se mantendrán separadas en **NEOX-VM-LAB-isos**.

> Las ISO serán exclusivamente experimentales y estarán destinadas a pruebas controladas en máquinas virtuales.

## 🗂️ Repositorios relacionados

| Repositorio | Propósito |
|---|---|
| `NEOX-VM-LAB` | Sistema operativo / escritorio |
| `NEOX-VM-LAB-Servers` | Edición orientada a servidores |
| `NEOX-VM-LAB-isos` | Construcción y almacenamiento de ISO experimentales |
| `gd-lite-web-opensorce` | Proyecto independiente de GDLite Web Edition |

## 🛠️ Desarrollo

La estructura del proyecto se irá construyendo por módulos. La prioridad es que cada módulo pueda probarse de forma independiente antes de integrarlo en el escritorio.

Cuando exista una versión web funcional, se podrá publicar mediante GitHub Pages.

## 📜 Licencia

Este proyecto utiliza la **MIT License**.

---

**NEOX VM LAB — Desktop OS Laboratory** 🖥️