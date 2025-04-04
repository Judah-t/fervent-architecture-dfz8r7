// data.js
// Contains static data arrays/objects for the A+ Study Hub (excluding quiz questions).

const modulesData = [
  // Core 1: 220-1101
  {
    id: "1.0",
    name: "Mobile Devices",
    objectives: [
      {
        id: "1.1",
        title: "Install and configure laptop hardware and components.",
      },
      {
        id: "1.2",
        title: "Install components within the display of a laptop.",
      },
      { id: "1.3", title: "Use appropriate laptop features." },
      {
        id: "1.4",
        title:
          "Compare and contrast characteristics of various types of mobile devices.",
      },
      {
        id: "1.5",
        title:
          "Connect and configure accessories and ports for mobile devices.",
      },
      {
        id: "1.6",
        title:
          "Configure basic mobile device network connectivity and application support.",
      },
      {
        id: "1.7",
        title: "Configure and apply mobile device synchronization methods.",
      },
    ],
  },
  {
    id: "2.0",
    name: "Networking",
    objectives: [
      {
        id: "2.1",
        title:
          "Compare and contrast TCP and UDP ports, protocols, and their purposes.",
      },
      { id: "2.2", title: "Compare and contrast common networking hardware." },
      {
        id: "2.3",
        title: "Compare and contrast protocols for wireless networking.",
      },
      { id: "2.4", title: "Summarize services provided by networked hosts." },
      {
        id: "2.5",
        title: "Install and configure basic wired/wireless SOHO networks.",
      },
      {
        id: "2.6",
        title:
          "Compare and contrast Internet connection types, network types, and their features.",
      },
      { id: "2.7", title: "Use appropriate networking tools." },
      {
        id: "2.8",
        title: "Identify basic network troubleshooting methodology.",
      },
    ],
  },
  {
    id: "3.0",
    name: "Hardware",
    objectives: [
      {
        id: "3.1",
        title: "Explain basic cable types, features, and their purposes.",
      },
      { id: "3.2", title: "Identify common connector types." },
      { id: "3.3", title: "Install RAM types." },
      { id: "3.4", title: "Select, install and configure storage devices." },
      {
        id: "3.5",
        title: "Install and configure motherboards, CPUs, and add-on cards.",
      },
      {
        id: "3.6",
        title: "Explain the purpose and uses of various peripheral types.",
      },
      { id: "3.7", title: "Summarize power supply types and features." },
      {
        id: "3.8",
        title:
          "Select and configure appropriate components for a custom PC configuration.",
      },
      { id: "3.9", title: "Install and configure common devices." },
      {
        id: "3.10",
        title: "Configure SOHO multifunction devices/printers and settings.",
      },
      { id: "3.11", title: "Install and maintain various print technologies." },
    ],
  },
  {
    id: "4.0",
    name: "Virtualization and Cloud Computing",
    objectives: [
      { id: "4.1", title: "Summarize cloud computing concepts." },
      { id: "4.2", title: "Summarize aspects of client-side virtualization." },
    ],
  },
  {
    id: "5.0",
    name: "Hardware and Network Troubleshooting",
    objectives: [
      {
        id: "5.1",
        title: "Apply the troubleshooting methodology to resolve PC problems.",
      },
      {
        id: "5.2",
        title:
          "Given a scenario, troubleshoot problems related to motherboards, RAM, CPUs, and power.",
      },
      {
        id: "5.3",
        title: "Given a scenario, troubleshoot hard drives and RAID arrays.",
      },
      {
        id: "5.4",
        title:
          "Given a scenario, troubleshoot video, projector, and display issues.",
      },
      {
        id: "5.5",
        title:
          "Given a scenario, troubleshoot common mobile device issues while adhering to appropriate procedures.",
      },
      { id: "5.6", title: "Given a scenario, troubleshoot printers." },
      {
        id: "5.7",
        title:
          "Given a scenario, troubleshoot common wired and wireless network problems.",
      },
    ],
  },
];

const flashcardsData = [
  // Sample Flashcard Data with optional 'icon' field
  {
    term: "SO-DIMM",
    definition:
      "Small Outline Dual In-line Memory Module: A smaller RAM module type used primarily in laptops and compact PCs.",
    objectiveId: "1.1",
    icon: "memory-stick",
  },
  {
    term: "LCD",
    definition:
      "Liquid Crystal Display: A flat-panel display technology common in laptops and monitors.",
    objectiveId: "1.2",
    icon: "monitor",
  },
  {
    term: "LED Backlight",
    definition:
      "Light Emitting Diode Backlight: Modern illumination source for LCD panels, more energy-efficient and thinner than CCFL.",
    objectiveId: "1.2",
    icon: "lightbulb",
  },
  {
    term: "Inverter",
    definition:
      "Laptop component that converts DC power to AC power required by older CCFL backlights.",
    objectiveId: "1.2",
    icon: "zap-off",
  }, // zap-off as representation
  {
    term: "Airplane Mode",
    definition:
      "A setting on mobile devices that disables all wireless communication radios (Cellular, Wi-Fi, Bluetooth, NFC, GPS).",
    objectiveId: "1.3",
    icon: "plane",
  },
  {
    term: "USB-C",
    definition:
      "A versatile, reversible connector standard supporting data (USB 3.x, Thunderbolt), video (DisplayPort Alt Mode), and power delivery.",
    objectiveId: "1.5",
    icon: "usb",
  }, // Generic usb icon
  {
    term: "IMAP",
    definition:
      "Internet Message Access Protocol (Port 143/993): Protocol for retrieving email, leaving messages on the server.",
    objectiveId: "1.6",
    icon: "mail",
  },
  {
    term: "POP3",
    definition:
      "Post Office Protocol 3 (Port 110/995): Protocol for retrieving email, typically downloading messages and removing them from the server.",
    objectiveId: "1.6",
    icon: "mail-minus",
  },
  {
    term: "SMTP",
    definition:
      "Simple Mail Transfer Protocol (Port 25/587/465): Protocol for sending email.",
    objectiveId: "1.6",
    icon: "mail-plus",
  },
  {
    term: "Synchronization",
    definition:
      "The process of keeping data consistent across multiple devices or locations (e.g., syncing contacts between phone and cloud).",
    objectiveId: "1.7",
    icon: "refresh-cw",
  },
  {
    term: "TCP",
    definition:
      "Transmission Control Protocol: Connection-oriented protocol providing reliable, ordered, and error-checked delivery of data.",
    objectiveId: "2.1",
    icon: "arrow-right-left",
  },
  {
    term: "UDP",
    definition:
      "User Datagram Protocol: Connectionless protocol providing fast but unreliable data transmission.",
    objectiveId: "2.1",
    icon: "send",
  },
  {
    term: "SSH",
    definition:
      "Secure Shell (TCP Port 22): Protocol for secure remote login and other secure network services.",
    objectiveId: "2.1",
    icon: "terminal-square",
  },
  {
    term: "DNS",
    definition:
      "Domain Name System (UDP Port 53): Protocol/Service that translates domain names (www.google.com) into IP addresses.",
    objectiveId: "2.4",
    icon: "book-open",
  },
  {
    term: "DHCP",
    definition:
      "Dynamic Host Configuration Protocol (UDP Ports 67/68): Protocol/Service that automatically assigns IP addresses and network configuration to clients.",
    objectiveId: "2.4",
    icon: "network",
  },
  {
    term: "Access Point (AP)",
    definition:
      "Networking hardware device that allows Wi-Fi devices to connect to a wired network.",
    objectiveId: "2.2",
    icon: "wifi",
  },
  {
    term: "Router",
    definition:
      "Networking device that forwards data packets between computer networks (operates at Layer 3).",
    objectiveId: "2.2",
    icon: "route",
  },
  {
    term: "Switch",
    definition:
      "Networking device that connects devices together on a computer network using packet switching to forward data to the destination device (operates at Layer 2).",
    objectiveId: "2.2",
    icon: "switch-camera",
  }, // Using switch-camera as proxy
  {
    term: "WPA2",
    definition:
      "Wi-Fi Protected Access 2: A security protocol used to secure wireless networks, commonly using AES encryption.",
    objectiveId: "2.3",
    icon: "shield-check",
  },
  {
    term: "Fiber Optic",
    definition:
      "Network cabling that uses glass or plastic threads (fibers) to transmit data as light pulses.",
    objectiveId: "2.6",
    icon: "activity",
  }, // Representing light pulse
  {
    term: "ping",
    definition:
      "Command-line utility to test the reachability of a host on an IP network.",
    objectiveId: "2.7",
    icon: "radio-tower",
  },
  {
    term: "ipconfig/ifconfig",
    definition:
      "Command-line utility to display current TCP/IP network configuration values (ipconfig for Windows, ifconfig for Linux/macOS).",
    objectiveId: "2.7",
    icon: "list",
  },
  {
    term: "Coaxial Cable",
    definition:
      "Type of electrical cable often used for cable TV and internet, featuring an inner conductor surrounded by insulation, shielding, and an outer jacket.",
    objectiveId: "3.1",
    icon: "tv",
  },
  {
    term: "RJ45",
    definition:
      "Registered Jack 45: Standard connector type for Ethernet network cables.",
    objectiveId: "3.2",
    icon: "plug",
  }, // Generic plug
  {
    term: "RAM",
    definition:
      "Random Access Memory: Volatile computer memory used for active programs and data.",
    objectiveId: "3.3",
    icon: "memory-stick",
  },
  {
    term: "SSD",
    definition:
      "Solid State Drive: Storage device using flash memory; faster and more durable than HDDs.",
    objectiveId: "3.4",
    icon: "save",
  }, // Generic save/storage
  {
    term: "NVMe",
    definition:
      "Non-Volatile Memory Express: Interface specification for accessing SSDs attached via the PCIe bus, offering higher speeds than SATA.",
    objectiveId: "3.4",
    icon: "hard-drive",
  }, // Representing fast drive
  {
    term: "ATX",
    definition:
      "Advanced Technology eXtended: The most common motherboard and power supply form factor standard for desktop PCs.",
    objectiveId: "3.5",
    icon: "layout-template",
  },
  {
    term: "PCIe",
    definition:
      "Peripheral Component Interconnect Express: High-speed serial computer expansion bus standard.",
    objectiveId: "3.5",
    icon: "puzzle",
  }, // Representing add-on card
  {
    term: "Laser Printer",
    definition:
      "Printer type using toner, a drum, and a fuser to create high-quality prints quickly.",
    objectiveId: "3.11",
    icon: "printer",
  },
  {
    term: "IaaS",
    definition:
      "Infrastructure as a Service: Cloud model providing virtualized computing resources over the internet.",
    objectiveId: "4.1",
    icon: "server",
  },
  {
    term: "SaaS",
    definition:
      "Software as a Service: Cloud model providing access to software applications over the internet.",
    objectiveId: "4.1",
    icon: "app-window",
  },
  {
    term: "Hypervisor",
    definition:
      "Software or firmware that creates, runs, and manages virtual machines (VMs). Type 1 (bare-metal) and Type 2 (hosted).",
    objectiveId: "4.2",
    icon: "layers",
  },
  {
    term: "POST",
    definition:
      "Power-On Self-Test: Diagnostic testing sequence run by the BIOS/UEFI when a computer starts.",
    objectiveId: "5.2",
    icon: "power",
  },
  {
    term: "SMART",
    definition:
      "Self-Monitoring, Analysis, and Reporting Technology: Monitoring system included in storage drives to detect and report on various indicators of reliability.",
    objectiveId: "5.3",
    icon: "activity-heartbeat",
  }, // Representing health check
];

const resourcesData = {
  commonPorts: [
    {
      port: "20, 21",
      protocol: "TCP",
      purpose: "FTP (File Transfer Protocol)",
    },
    {
      port: "22",
      protocol: "TCP",
      purpose: "SSH (Secure Shell) / SFTP (Secure FTP)",
    },
    {
      port: "23",
      protocol: "TCP",
      purpose: "Telnet (insecure remote console)",
    },
    {
      port: "25",
      protocol: "TCP",
      purpose: "SMTP (Simple Mail Transfer Protocol - sending email)",
    },
    { port: "53", protocol: "UDP/TCP", purpose: "DNS (Domain Name System)" },
    {
      port: "67, 68",
      protocol: "UDP",
      purpose: "DHCP (Dynamic Host Configuration Protocol)",
    },
    {
      port: "80",
      protocol: "TCP",
      purpose: "HTTP (Hypertext Transfer Protocol - web)",
    },
    {
      port: "110",
      protocol: "TCP",
      purpose: "POP3 (Post Office Protocol v3 - receiving email)",
    },
    {
      port: "143",
      protocol: "TCP",
      purpose: "IMAP (Internet Message Access Protocol - receiving email)",
    },
    {
      port: "161, 162",
      protocol: "UDP",
      purpose: "SNMP (Simple Network Management Protocol)",
    },
    {
      port: "389",
      protocol: "TCP/UDP",
      purpose: "LDAP (Lightweight Directory Access Protocol)",
    },
    {
      port: "443",
      protocol: "TCP",
      purpose: "HTTPS (HTTP Secure - encrypted web)",
    },
    {
      port: "445",
      protocol: "TCP",
      purpose: "SMB/CIFS (Server Message Block - Windows file sharing)",
    },
    {
      port: "587/465",
      protocol: "TCP",
      purpose: "SMTP with TLS/SSL (Secure email sending)",
    },
    { port: "993", protocol: "TCP", purpose: "IMAPS (IMAP Secure)" },
    { port: "995", protocol: "TCP", purpose: "POP3S (POP3 Secure)" },
    { port: "3389", protocol: "TCP", purpose: "RDP (Remote Desktop Protocol)" },
    {
      port: "137-139",
      protocol: "TCP/UDP",
      purpose: "NetBIOS (Older Windows networking)",
    },
  ],
  acronymGlossary: [
    { acronym: "AC", definition: "Alternating Current" },
    { acronym: "AP", definition: "Access Point" },
    { acronym: "API", definition: "Application Programming Interface" },
    { acronym: "APIPA", definition: "Automatic Private IP Addressing" },
    { acronym: "BIOS", definition: "Basic Input/Output System" },
    { acronym: "CPU", definition: "Central Processing Unit" },
    { acronym: "DC", definition: "Direct Current" },
    { acronym: "DHCP", definition: "Dynamic Host Configuration Protocol" },
    { acronym: "DIMM", definition: "Dual In-line Memory Module" },
    { acronym: "DNS", definition: "Domain Name System" },
    { acronym: "DSL", definition: "Digital Subscriber Line" },
    { acronym: "FTP", definition: "File Transfer Protocol" },
    { acronym: "GPU", definition: "Graphics Processing Unit" },
    { acronym: "HDD", definition: "Hard Disk Drive" },
    { acronym: "HDMI", definition: "High-Definition Multimedia Interface" },
    { acronym: "HTML", definition: "Hypertext Markup Language" },
    { acronym: "HTTP", definition: "Hypertext Transfer Protocol" },
    { acronym: "HTTPS", definition: "HTTP Secure" },
    { acronym: "IaaS", definition: "Infrastructure as a Service" },
    { acronym: "ICMP", definition: "Internet Control Message Protocol" },
    { acronym: "IP", definition: "Internet Protocol" },
    { acronym: "ISP", definition: "Internet Service Provider" },
    { acronym: "LAN", definition: "Local Area Network" },
    { acronym: "LCD", definition: "Liquid Crystal Display" },
    { acronym: "LED", definition: "Light Emitting Diode" },
    { acronym: "MAC", definition: "Media Access Control (address)" },
    { acronym: "NAT", definition: "Network Address Translation" },
    { acronym: "NFC", definition: "Near Field Communication" },
    { acronym: "NIC", definition: "Network Interface Card" },
    { acronym: "NTFS", definition: "New Technology File System" },
    { acronym: "NVMe", definition: "Non-Volatile Memory Express" },
    { acronym: "OS", definition: "Operating System" },
    { acronym: "PaaS", definition: "Platform as a Service" },
    { acronym: "PC", definition: "Personal Computer" },
    {
      acronym: "PCIe",
      definition: "Peripheral Component Interconnect Express",
    },
    { acronym: "POST", definition: "Power-On Self-Test" },
    { acronym: "PSU", definition: "Power Supply Unit" },
    { acronym: "RAID", definition: "Redundant Array of Independent Disks" },
    { acronym: "RAM", definition: "Random Access Memory" },
    { acronym: "RDP", definition: "Remote Desktop Protocol" },
    { acronym: "ROM", definition: "Read-Only Memory" },
    { acronym: "SaaS", definition: "Software as a Service" },
    { acronym: "SATA", definition: "Serial AT Attachment" },
    { acronym: "SLA", definition: "Service Level Agreement" },
    { acronym: "SMB", definition: "Server Message Block" },
    { acronym: "SMTP", definition: "Simple Mail Transfer Protocol" },
    { acronym: "SO-DIMM", definition: "Small Outline DIMM" },
    { acronym: "SOHO", definition: "Small Office/Home Office" },
    { acronym: "SSD", definition: "Solid State Drive" },
    { acronym: "SSH", definition: "Secure Shell" },
    { acronym: "SSID", definition: "Service Set Identifier" },
    { acronym: "TCP", definition: "Transmission Control Protocol" },
    { acronym: "UDP", definition: "User Datagram Protocol" },
    { acronym: "UEFI", definition: "Unified Extensible Firmware Interface" },
    { acronym: "UPS", definition: "Uninterruptible Power Supply" },
    { acronym: "URL", definition: "Uniform Resource Locator" },
    { acronym: "USB", definition: "Universal Serial Bus" },
    { acronym: "UTP", definition: "Unshieldied Twisted Pair" },
    { acronym: "VGA", definition: "Video Graphics Array" },
    { acronym: "VM", definition: "Virtual Machine" },
    { acronym: "VPN", definition: "Virtual Private Network" },
    { acronym: "WAN", definition: "Wide Area Network" },
    { acronym: "WEP", definition: "Wired Equivalent Privacy" },
    {
      acronym: "Wi-Fi",
      definition: "Wireless Fidelity (IEEE 802.11 standards)",
    },
    { acronym: "WPA", definition: "Wi-Fi Protected Access" },
    { acronym: "WPA2", definition: "Wi-Fi Protected Access 2" },
  ],
};

console.log("data.js loaded.");
