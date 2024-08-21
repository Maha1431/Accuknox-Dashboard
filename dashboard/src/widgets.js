const predefinedWidgets = {
    cspm: [
      {
        id: "widget-1",
        name: "Cloud Accounts",
        text: "",
        chartData: {
          connected: 5,
          notConnected: 5,
        },
      },
      {
        id: "widget-2",
        name: "Cloud Account Risk Assessment",
        text: "",
        chartData: {
          passed: 9482,
          failed: 2312,
          warning: 742,
          notAvailable: 56,
        },
      },
      {
        id: "widget-1001",
        name: "Cloud Accounts 2",
        text: "Random text for Overview of cloud accounts",
        chartData: {},
      },
      {
        id: "widget-1002",
        name: "Cloud Account Risk Assessment 2",
        text: "Random text for  Account Risk Assessment 2",
        chartData: {},
      },
    ],
    cwpp: [
      {
        id: "widget-1",
        name: "Top 5 Namespace Specific Alerts",
        text: "Random text for Top 5 Namespace Specific Alerts",
        chartData: {},
      },
      {
        id: "widget-2",
        name: "Workload Alerts",
        text: "Random text for Workload Alerts",
        chartData: {},
      },
      {
        id: "widget-1003",
        name: "Namespace Alerts 2",
        text: "Random text for Top 5 namespace alerts",
        chartData: {},
      },
      {
        id: "widget-1004",
        name: "Workload Status 2",
        text: "Current workload statuses",
        chartData: {},
      },
    ],
    image: [
      {
        id: "widget-1",
        name: "Image Risk Assessment",
        text: "",
        chartData: {
          total: 1470,
          critical: 39,
          high: 150,
          moderate: 200,
          normal: 481,
          safe: 600,
        },
      },
      {
        id: "widget-2",
        name: "Image Security Issues",
        text: "",
        chartData: {
          total: 31,
          critical: 2,
          high: 1,
          moderate: 5,
          normal: 10,
          safe: 13,
        },
      },
      {
        id: "widget-1005",
        name: "Vulnerabilities",
        text: "List of known vulnerabilities",
        chartData: {},
      },
      {
        id: "widget-1006",
        name: "Security Issues 2",
        text: "Details on security issues",
        chartData: {},
      },
    ],
    ticket: [
      { id: "widget-7", name: "Open Tickets", text: "Overview of open tickets" },
      {
        id: "widget-8",
        name: "Resolved Tickets",
        text: "List of resolved tickets",
        chartData: {},
      },
    ],
  };
  
  export default predefinedWidgets;