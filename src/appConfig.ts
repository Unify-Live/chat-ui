export function getBackendUrl() {
  if (window.location.hostname === "localhost") {
    return "http://localhost:5000";
  };
  return "https://dev-backend-api.unify-live.com";
}
