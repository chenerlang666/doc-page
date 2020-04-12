module.exports = {
  someSidebar: {
    Projects: ['project1', 'project2', 'project3', 'project4',
      {
        type: 'category',
        label: 'Information Retrieval',
        items: ['ir-homework-1', 'ir-homework-2', 'ir-homework-3'],
      },
    ],
    WiFi: [
      'wifi-on-chain',
      // {
      //   type: 'category',
      //   label: 'Getting Started',
      //   items: ['wifi-poa', 'wifi-dapp', 'wifi-script', 'wifi-dog', 'wifi-sqm'],
      // }
    ],
    Community: [{
      type:'link', 
      label:'CAN Studio',
      href: 'https://SUSTech-CANStudio.github.io'
      },
    ],
    Features: ['mdx', 'style'],
  },
};
