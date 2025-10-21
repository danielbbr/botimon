# botimon

a network device monitoring browser app for local networks. scan and manage devices connected to your local network.

## features

- scan local network devices using nmap
- identify device vendors by mac address
- modern web interface built with react and vite
- node.js backend with sqlite database
- docker compose for easy deployment
- persistent data storage

## quick start

```bash
# start the application
sudo ./botimon.sh start

# view all options
./botimon.sh --help
```

## access

- frontend: http://localhost
- backend api: http://localhost:3001
- default login: admin123

## requirements

- docker and docker compose
- sudo access for network scanning

## configuration

copy `env.example` to `.env` and adjust settings as needed:

```bash
cp env.example .env
```
## development

the application consists of:

- `backend/` - node.js api server
- `frontend/` - react frontend with vite
- `docker-compose.yml` - container orchestration
- `botimon.sh` - management script
