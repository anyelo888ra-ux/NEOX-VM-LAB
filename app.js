const area=document.getElementById('window-area');
const start=document.getElementById('start-menu');
const startButton=document.getElementById('start-button');
const clock=document.getElementById('clock');
const taskbarApps=document.getElementById('taskbar-apps');

const system={cpu:12,ram:1.2,disk:8.4,network:'ONLINE'};
const openWindows=new Map();

const apps={
  files:{title:'Explorador de archivos',body:'<div class="file-list">📁 Documents<br>📁 Downloads<br>📁 Projects<br>📄 README.md<br>📄 neox.conf</div>'},
  terminal:{title:'Terminal',body:'<div class="terminal"><div id="terminal-output">NEOX Terminal 0.2<br>Escribe <b>help</b> para comenzar.</div><form class="terminal-form"><span>neox@desktop:~$</span><input autocomplete="off" aria-label="Comando"></form></div>'},
  monitor:{title:'Monitor del sistema',body:'<div class="monitor-grid"><div class="stat"><span>CPU</span><b id="m-cpu">12%</b></div><div class="stat"><span>RAM</span><b id="m-ram">1.2 GB</b></div><div class="stat"><span>DISK</span><b id="m-disk">8.4 GB</b></div><div class="stat"><span>NETWORK</span><b class="ok">ONLINE</b></div></div>'},
  settings:{title:'Configuración',body:'<div class="setting">🖥️ Sistema<br><small>NEOX VM LAB Web Lab 0.2</small></div><div class="setting">🌐 Red<br><small>Estado: simulado</small></div><div class="setting">🧪 Modo<br><small>Experimental</small></div>'}
};

function focusWindow(name){
  const item=openWindows.get(name);
  if(!item)return;
  document.querySelectorAll('.window').forEach(w=>w.classList.remove('active'));
  item.win.classList.add('active');
  item.win.hidden=false;
  item.win.focus();
}

function openApp(name){
  const app=apps[name];
  if(!app)return;
  if(openWindows.has(name)){focusWindow(name);return;}

  const win=document.createElement('article');
  win.className='window active';
  win.innerHTML='<div class="titlebar"><strong>'+app.title+'</strong><button class="close" aria-label="Cerrar">×</button></div><div class="content">'+app.body+'</div>';

  const task=document.createElement('button');
  task.className='taskbar-app';
  task.textContent=app.title;

  const close=()=>{
    const item=openWindows.get(name);
    if(item?.timer)clearInterval(item.timer);
    openWindows.delete(name);
    win.remove();
    task.remove();
  };

  win.querySelector('.close').onclick=close;
  win.addEventListener('mousedown',()=>focusWindow(name));
  task.onclick=()=>focusWindow(name);
  taskbarApps.appendChild(task);
  area.appendChild(win);
  openWindows.set(name,{win,task});
  win.tabIndex=0;
  win.focus();

  if(name==='terminal')setupTerminal(win);
  if(name==='monitor')setupMonitor(win);
}

function setupTerminal(win){
  const output=win.querySelector('#terminal-output');
  const form=win.querySelector('.terminal-form');
  const input=form.querySelector('input');

  const print=t=>{
    output.innerHTML+='<br>'+String(t).replaceAll('<','&lt;');
    output.scrollTop=output.scrollHeight;
  };

  form.addEventListener('submit',e=>{
    e.preventDefault();
    const raw=input.value;
    const c=raw.trim().toLowerCase();
    if(!c)return;
    print('neox@desktop:~$ '+raw);
    input.value='';

    if(c==='help'){print('help • apps • status • version • clear');return;}
    if(c==='apps'){print('files • terminal • monitor • settings');return;}
    if(c==='status'){print('CPU: '+system.cpu+'% | RAM: '+system.ram+' GB | DISK: '+system.disk+' GB | NETWORK: '+system.network);return;}
    if(c==='version'){print('NEOX VM LAB Web Lab 0.2.0');return;}
    if(c==='clear'){output.innerHTML='';return;}
    print('Comando no disponible en el Web Lab.');
  });
}

function setupMonitor(win){
  const update=()=>{
    const cpu=10+Math.floor(Math.random()*10);
    win.querySelector('#m-cpu').textContent=cpu+'%';
  };
  update();
  const item=openWindows.get('monitor');
  if(item)item.timer=setInterval(()=>{
    if(!document.body.contains(win)){clearInterval(item.timer);return;}
    update();
  },2000);
}

document.querySelectorAll('[data-app]').forEach(b=>b.addEventListener('click',()=>{
  start.hidden=true;
  openApp(b.dataset.app);
}));
startButton.onclick=()=>start.hidden=!start.hidden;

setInterval(()=>clock.textContent=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),1000);
clock.textContent=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});