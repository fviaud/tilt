# Build l'image depuis le dossier frontend
docker_build(
    'localhost:5000/frontend',
    context='./frontend',
    dockerfile='./frontend/dockerfile',
    live_update=[
        sync('./frontend/', '/usr/share/nginx/html/'),
    ],
)

# Déployer le manifest Kubernetes
k8s_yaml('frontend.yml')
k8s_yaml('backend.yml')


