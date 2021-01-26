
const makeServerServices = (api) => ({
  getRamInfo: (machine) => api.post(`/ram`,machine),
  getCpuInfo: (machine) => api.post(`/cpu`,machine),
  getHdInfo: (machine) => api.post(`/hard-drive`,machine),
  getNetInfo: (machine) => api.post(`/network`,machine),
  getLogs: (machine) => api.post(`/logs`,machine),

});


export {
  makeServerServices
};
