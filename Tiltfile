# Build l'image depuis le dossier frontend
docker_build(
    'localhost:5000/frontend',
    context='./frontend',
    dockerfile='./frontend/dockerfile',
    live_update=[
        sync('./frontend', '/opt/app'),
        run('cd /opt/app && yarn install --immutable', trigger=['./frontend/package.json', './frontend/yarn.lock']),
    ],
)

# Déployer le manifest Kubernetes
k8s_yaml('atelier.yml')


