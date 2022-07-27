const data = [
  {
    name: "Raw",
    id: "raw",
    items: [
      {
        id: "raw-1",
        value: "Raw 1",
        linkage: ["sd-1", "sd-2"]
      },
      {
        id: "raw-2",
        value: "Raw 2",
        linkage: ["sd-2", "sd-3"]
      },
      {
        id: "raw-3",
        value: "Raw 3"
      },
      {
        id: "raw-4",
        value: "Raw 4"
      },
      {
        id: "raw-5",
        value: "Raw 5"
      }
    ]
  },
  {
    name: "Standardisation",
    id: "standard",
    items: [
      {
        id: "sd-1",
        value: "Std 1",
        linkage: ["ps-1", "ps-2"]
      },
      {
        id: "sd-2",
        value: "Std 2",
        linkage: ["ps-2", "ps-3"]
      },
      {
        id: "sd-3",
        value: "Std 3"
      },
      {
        id: "sd-4",
        value: "Std 4"
      },
      {
        id: "sd-5",
        value: "Std 5"
      }
    ]
  },

  {
    name: "Presentation",
    id: "presentation",
    items: [
      {
        id: "ps-1",
        value: "Pst 1",
        linkage: ["mart-1", "mart-2"]
      },
      {
        id: "ps-2",
        value: "Pst 2",
        linkage: ["mart-2", "mart-3"]
      },
      {
        id: "ps-3",
        value: "Pst 3"
      }
    ]
  },

  {
    name: "Data Mart",
    id: "mart",
    items: [
      {
        id: "mart-1",
        value: "Mrt 1"
      },
      {
        id: "mart-2",
        value: "Mrt 2"
      },
      {
        id: "mart-3",
        value: "Mrt 3"
      }
    ]
  }
];

export default data;
