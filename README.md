docker login -u prudnikov21

dckr_pat_f_1q5nU6T_mFkPeN1SWdMhBLglY

docker build -t prudnikov21/chat-ui:latest .
docker push prudnikov21/chat-ui:latest

docker pull prudnikov21/chat-ui:latest

openapi -i http://localhost:5000/openapi.json -o src/client/backend.ts
