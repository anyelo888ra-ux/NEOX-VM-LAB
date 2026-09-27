# 🖥️ NEOX VM LAB

**NEOX VM LAB** es el laboratorio web del escritorio NEOX. La versión actual **0.2.0** permite probar la experiencia de escritorio, aplicaciones simuladas y una terminal controlada desde el navegador.

> ⚠️ **Estado:** laboratorio experimental. No es un sistema operativo de producción ni una VM real.

## ✨ Versión 0.2

- 🖥️ Escritorio NEOX
- 📋 Menú Start
- 📌 Barra de tareas
- 📁 Explorador de archivos virtual
- 💻 Terminal interactiva simulada
- 📊 Monitor del sistema
- ⚙️ Configuración
- ⏱️ Reloj
- 📱 Interfaz adaptable

### Terminal

Comandos disponibles:

`help` · `apps` · `status` · `version` · `clear`

Los comandos son internos del Web Lab y no ejecutan comandos del sistema anfitrión.

## 🏗️ Arquitectura

```text
NEOX VM LAB
├── Desktop
├── Window Manager
├── Start Menu
├── Taskbar
├── File Explorer
├── Terminal Simulator
├── System Monitor
└── Settings
```

## 🧪 Próximas etapas

### Web Lab
- [x] Shell de escritorio
- [x] Ventanas
- [x] Start Menu
- [x] Taskbar
- [x] Sistema de aplicaciones
- [x] Terminal simulada
- [x] Monitor del sistema
- [ ] Arrastrar/redimensionar ventanas
- [ ] Sistema de archivos virtual persistente

### System Lab
- [ ] Usuarios y perfiles
- [ ] Almacenamiento virtual
- [ ] API interna
- [ ] Red simulada
- [ ] Centro de seguridad

### VM Lab
- [ ] Integración con el instalador NEOX
- [ ] Pruebas en VM
- [ ] Imagen experimental

La construcción de ISO se mantiene separada en **Neox-VM-Lab-isos** mientras se diseña primero el sistema de instalación.

## 🗂️ Repositorios

| Repositorio | Propósito |
|---|---|
| `Neox-VM-Lab` | Escritorio NEOX |
| `Neox-VM-Lab-Servers` | Entorno de servidores |
| `Neox-VM-Lab-isos` | ISO e instalador experimental |

## 📜 Licencia

MIT License