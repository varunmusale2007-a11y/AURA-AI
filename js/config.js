/**
 * NOVA AI — Frontend Configuration
 * 
 * For Public Cloud Deployment (e.g. Vercel):
 * - To connect to your cloud backend, set API_URL below (e.g., "https://your-nova-backend.onrender.com")
 * - If left empty (""), the app will use same-origin relative API paths (/api/...)
 * - Users can also dynamically set/change their backend URL via the in-app "NETWORK" modal
 */

window.__ENV__ = window.__ENV__ || {
  // Remote Python Backend API Base URL (leave "" for auto/relative or specify full URL)
  API_URL: ""
};
