
const makeStatisticsService = (api) => ({
  getStatistics: (filter) => api.get(`/statistics`, { params: filter }),
  getPublicationsPerTeam: (filter) => api.get(`/team-publications`, { params: filter }),

});


export {
 
  makeStatisticsService
};
