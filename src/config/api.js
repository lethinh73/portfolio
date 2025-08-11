// API Configuration
const config = {
  // Get API base URL from environment variables
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.thinhsoft.com',
  
  // API Endpoints
  endpoints: {
    system: '/system',
    systemCpu: '/system/cpu',
    systemMemory: '/system/memory',
    systemDisk: '/system/disk',
    contact: '/contact',
  },
  
  // Get full API URL
  getApiUrl: (endpoint) => {
    return `${config.API_BASE_URL}${endpoint}`
  },
}

export default config
