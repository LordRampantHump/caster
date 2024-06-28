# Caster: React + Express + Vite + Vhost

# Install

### Clone

```BASH
git clone https://github.com/LordRampantHump/caster
npm install
```

### Modify

```BASH
cd caster
nano .env
```

### .env

```TXT
APP='caster'
LOGS='_logs'
VERSION='0.0.1'
STATE='dev'
DOMAIN='domain.dev'
SESSION_SECRET='YOUR SESSION SECRET'
PORT='80'

```

### Modify Hosts

```BASH
sudo nano /etc/hosts
```

### /etc/hosts

```TXT
127.0.0.1   domain.dev
127.0.0.1   api.domain.dev
```
