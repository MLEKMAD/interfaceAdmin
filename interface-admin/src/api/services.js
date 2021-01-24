
const makeServerServices = (api) => ({
  getRamInfo: () => api.get(`/ram`),
  getCpuInfo: () => api.get(`/cpu`),
  getHdInfo: () => api.get(`/network`),
  getNetInfo: () => api.get(`/network`),
  getLogs: () => api.get(`/logs`),

});


export {
 
  makeServerServices
};
