docker login -u prudnikov21

dckr_pat\_\_8WRoa5Y5SfX51YPVpg1KRaTg14

docker build -t prudnikov21/crm-ui:latest .
docker push prudnikov21/crm-ui:latest

docker pull prudnikov21/crm-ui:latest
