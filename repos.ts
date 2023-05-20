const repos: Repo[] = [
  {
    name: 'Patch',
    fullname: 'RedHatInsights/patchman-ui',
  },
  {
    name: 'Vulnerability',
    fullname: 'RedHatInsights/vulnerability-ui',
  },
  {
    name: 'Dashboard',
    fullname: 'RedHatInsights/insights-dashboard',
  },
  {
    name: 'Inventory',
    fullname: 'RedHatInsights/insights-inventory-frontend',
  },
  {
    name: 'Compliance',
    fullname: 'RedHatInsights/compliance-frontend',
  },
  {
    name: 'Advisor',
    fullname: 'RedHatInsights/insights-advisor-frontend',
  },
  {
    name: 'Vuln4Shift',
    fullname: 'RedHatInsights/vuln4shift-frontend',
  },
  {
    name: 'Remediations',
    fullname: 'RedHatInsights/insights-remediations-frontend',
  },
  {
    name: 'Frontend-Components',
    fullname: 'RedHatInsights/frontend-components',
  },
  {
    name: 'OCP-Advisor',
    fullname: 'RedHatInsights/ocp-advisor-frontend',
  },
  {
    name: 'Drift',
    fullname: 'RedHatInsights/drift-frontend',
  },
  {
    name: 'Malware',
    fullname: 'RedHatInsights/malware-detection-frontend',
  },
  {
    name: 'Tasks',
    fullname: 'RedHatInsights/tasks-frontend',
  },
];

export default repos;

type Repo = {
  name: string;
  fullname: string;
};
