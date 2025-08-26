import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-documentation/chimoney/chimoney-api-beginner-endpoints",
    },
    {
      type: "category",
      label: "Info",
      items: [
        {
          type: "doc",
          id: "api-documentation/chimoney/get-list-of-supported-mobile-money-codes",
          label: "Get list of supported mobile money codes",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
