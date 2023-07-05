export const priceCardData = [
  {
    price: "400,000",
    description: "Total budget you own",
    bgColor: "white",
    id: 1,
  },
  {
    price: "400,000",
    description: "Spent month-to-date",
    bgColor: "bg-slate-200",
    id: 2,
  },
  {
    price: "400,000",
    description: "Forcasted till month end",
    bgColor: "bg-green-200",
    id: 3,
  },
];

export const tableDataArray = [
  {
    title: "Buckets you own",
    columns: [
      {
        header: "Name",
        accessorKey: "name",
        dataCss: "text-blue-400",
      },
      {
        header: "Budget",
        accessorKey: "budget",
      },
      {
        header: "Spend",
        accessorKey: "spend",
      },
      {
        header: "Forecast",
        accessorKey: "forecast",
      },
    ],
    data: [
      {
        name: "ACME Corp",
        budget: "$ 200,000",
        spend: "$ 173,762",
        forecast: "$ 205,049",
      },
      {
        name: "Raman Inc",
        budget: "$ 200,000",
        spend: "$ 124,762",
        forecast: "$ 293,049",
      },
    ],
    id:"t1"
  },
  {
    title: "Approvals assigned to you",
    columns: [
      {
        header: "Bucket Name",
        accessorKey: "name",
        dataCss: "text-blue-400",
      },
      {
        header: "Current Budget",
        accessorKey: "budget",
      },
      {
        header: "Requested Budget",
        accessorKey: "requestedBudget",
      },
      {
        header: "Requested By",
        accessorKey: "requestedBy",
        dataCss: "text-blue-400",
      },
      {
        header: "",
        accessorKey: "action",
      },
    ],
    data: [
      {
        name: "ACME Corp",
        budget: "$ 200,000",
        requestedBudget: "$ 250,762",
        requestedBy: "Joe Hilfinger"
      },
    ],
    id:"t2"
  },
  {
    title: "Buckets you are member of",
    columns: [
      {
        header: "Name",
        accessorKey: "name",
        dataCss: "text-blue-400",
      },
      {
        header: "Budget",
        accessorKey: "budget",
      },
      {
        header: "Spend",
        accessorKey: "spend",
      },
      {
        header: "Forecast",
        accessorKey: "forecast",
      },
    ],
    data: [
      {
        name: "Longate",
        budget: "$ 200,000",
        spend: "$ 173,762",
        forecast: "$ 205,049",
      },
    ],
    id:"t3"
  },
];
