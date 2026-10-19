
# Laboratorul 3 — Docker. Exemple practice

## Scopul lucrării

Am studiat crearea imaginilor și containerelor Docker,
publicarea imaginilor în Docker Hub, utilizarea rețelelor
și volumelor Docker și rularea aplicațiilor în Kubernetes.

## Tehnologii utilizate

- Docker Desktop
- Node.js
- Express
- Docker Hub
- Git și GitHub
- Kubernetes și Minikube

## Exemple realizate

### Ex1 — Primul server Node.js

Am creat un server care afișează un mesaj și hostname-ul
containerului.

Portul containerului: 8081  
Portul local: 4000

### Ex2 — Al doilea server Node.js

Am creat un al doilea server, cu o rută principală și
o rută `/info` care returnează date JSON.

Portul containerului: 8082  
Portul local: 4001

### Ex3 — Server propriu

Am creat o aplicație proprie cu rutele `/` și `/student`.

Portul containerului: 8083  
Portul local: 4002

## Comenzi Docker

Am utilizat comenzile pentru construirea, listarea,
inspectarea, etichetarea și publicarea imaginilor, precum
și pentru crearea, pornirea, oprirea și ștergerea containerelor.

## Rețea Docker

Am creat o rețea bridge, am conectat două containere,
am verificat comunicarea dintre ele și am testat
deconectarea și reconectarea.

## Volume Docker

Am creat un volum, am salvat un fișier în acesta și
am verificat persistența datelor după ștergerea containerului.
Am demonstrat și copierea unui fișier într-un container.

## Kubernetes

Am creat Deployment-uri și Service-uri pentru cele trei
imagini publicate în Docker Hub și am verificat accesul
la aplicații.

## Concluzie

Am exersat ciclul complet de lucru cu aplicațiile
containerizate: construirea imaginilor, rularea
containerelor, publicarea imaginilor, gestionarea
rețelelor și volumelor și implementarea în Kubernetes.
