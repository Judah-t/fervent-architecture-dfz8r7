// questions.js
// Contains the expanded question bank for the CompTIA A+ Study Hub quizzes.

const quizQuestions = [
  // --- Domain 1.0: Mobile Devices ---
  {
    objectiveId: "1.1",
    question: "Which type of RAM is most commonly found in modern laptops?",
    options: ["DIMM", "SO-DIMM", "RIMM", "SIMM"],
    correctAnswer: 1,
    explanation:
      "SO-DIMM (Small Outline Dual In-line Memory Module) is the standard RAM form factor used in laptops due to its smaller size.",
  },
  {
    objectiveId: "1.1",
    question:
      "When installing a new SO-DIMM module in a laptop, how should you align it with the slot?",
    options: [
      "Align the notch on the module with the key in the slot",
      "Force it until it clicks",
      "Install it backwards first",
      "It doesn't matter",
    ],
    correctAnswer: 0,
    explanation:
      "Laptop RAM slots and modules are keyed with a notch to ensure correct orientation. Aligning this notch is crucial for proper installation.",
  },
  {
    objectiveId: "1.1",
    question:
      "You need to replace a 2.5-inch SATA hard drive in a laptop with an SSD. Which SSD form factor is most likely a direct replacement?",
    options: ["M.2 SATA", "M.2 NVMe", "2.5-inch SATA", "mSATA"],
    correctAnswer: 2,
    explanation:
      "A 2.5-inch SATA SSD has the same physical dimensions and uses the same SATA connector as a traditional 2.5-inch laptop HDD, making it a direct replacement.",
  },
  {
    objectiveId: "1.2",
    question:
      "What component provides illumination for an LCD screen in older laptops?",
    options: ["Inverter", "Backlight (CCFL)", "LED", "Digitizer"],
    correctAnswer: 1,
    explanation:
      "Older LCD screens used Cold Cathode Fluorescent Lamps (CCFLs) as backlights, which require an inverter to supply high voltage AC power.",
  },
  {
    objectiveId: "1.2",
    question:
      "You are replacing a laptop screen that uses LED backlighting. Which component is NOT typically required for this type of display?",
    options: ["LED panel", "Video cable", "Inverter", "Bezel"],
    correctAnswer: 2,
    explanation:
      "LED backlights don't require a high-voltage AC inverter like CCFL backlights do.",
  },
  {
    objectiveId: "1.2",
    question: "Where is the Wi-Fi antenna typically located in a laptop?",
    options: [
      "Around the keyboard",
      "Near the battery",
      "Inside the display bezel",
      "Under the touchpad",
    ],
    correctAnswer: 2,
    explanation:
      "To get the best signal reception, Wi-Fi antennas are usually routed up into the display bezel, surrounding the screen.",
  },
  {
    objectiveId: "1.3",
    question:
      "Which laptop feature allows you to quickly disable wireless connections?",
    options: [
      "Screen orientation lock",
      "Airplane mode",
      "Docking station connector",
      "Touchpad toggle",
    ],
    correctAnswer: 1,
    explanation:
      "Airplane mode is a feature that disables all wireless radios (Wi-Fi, Bluetooth, Cellular) on a device.",
  },
  {
    objectiveId: "1.3",
    question:
      "What type of laptop input device replaces a mouse and is typically found below the keyboard?",
    options: ["Trackball", "Touchpad", "Pointing stick", "Digitizer"],
    correctAnswer: 1,
    explanation:
      "A touchpad is the flat, touch-sensitive surface used for cursor control on most laptops.",
  },
  {
    objectiveId: "1.4",
    question:
      "Which mobile device type typically offers the largest screen size?",
    options: ["Smartphone", "Tablet", "E-reader", "Wearable device"],
    correctAnswer: 1,
    explanation:
      "Tablets generally have larger screens compared to smartphones, e-readers, or wearables.",
  },
  {
    objectiveId: "1.4",
    question:
      "Which characteristic primarily distinguishes an e-reader from a tablet?",
    options: [
      "Touchscreen capability",
      "Wireless connectivity",
      "Use of E Ink display technology",
      "Ability to install apps",
    ],
    correctAnswer: 2,
    explanation:
      "E-readers commonly use E Ink (electrophoretic ink) displays, which mimic paper, offer long battery life, and are easy to read in direct sunlight, unlike typical tablet LCD/OLED screens.",
  },
  {
    objectiveId: "1.5",
    question:
      "Which port is commonly used to connect external displays to modern laptops and mobile devices, supporting both video and data?",
    options: ["VGA", "USB-A", "Thunderbolt/USB-C", "Micro USB"],
    correctAnswer: 2,
    explanation:
      "USB-C ports, especially those supporting Thunderbolt or DisplayPort Alternate Mode, are versatile connectors for displays, data, and power.",
  },
  {
    objectiveId: "1.5",
    question:
      "What technology allows short-range wireless communication often used for mobile payments and pairing devices by tapping them together?",
    options: [
      "Bluetooth",
      "Infrared (IR)",
      "NFC (Near Field Communication)",
      "Wi-Fi Direct",
    ],
    correctAnswer: 2,
    explanation:
      "NFC enables very short-range (a few centimeters) communication, commonly used for contactless payments and quick device pairing.",
  },
  {
    objectiveId: "1.6",
    question: "What protocol is used for secure email retrieval?",
    options: ["POP3", "IMAPS", "SMTP", "HTTP"],
    correctAnswer: 1,
    explanation:
      "IMAPS (IMAP Secure) uses SSL/TLS encryption (typically on port 993) for secure email retrieval, unlike standard IMAP (port 143) or POP3 (port 110).",
  },
  {
    objectiveId: "1.6",
    question:
      "To configure a mobile device to receive email using IMAP over SSL, which port number should typically be used?",
    options: ["110", "143", "993", "995"],
    correctAnswer: 2,
    explanation:
      "IMAPS (IMAP Secure) uses port 993 by default for SSL/TLS encrypted connections.",
  },
  {
    objectiveId: "1.6",
    question:
      "A user wants to share their phone's cellular internet connection with their laptop via USB. What is this feature called?",
    options: ["Hotspot", "Tethering", "Bluetooth PAN", "Wi-Fi Direct"],
    correctAnswer: 1,
    explanation:
      "Tethering allows a device to share its internet connection with another device, often via USB, Wi-Fi hotspot, or Bluetooth.",
  },
  {
    objectiveId: "1.7",
    question:
      "Which method synchronizes mobile device data like contacts and calendars directly with a cloud service like Google or iCloud?",
    options: [
      "USB tethering",
      "Cloud synchronization",
      "Bluetooth pairing",
      "NFC transfer",
    ],
    correctAnswer: 1,
    explanation:
      "Cloud synchronization allows mobile devices to automatically back up and sync data over the internet with services like iCloud, Google Drive, or OneDrive.",
  },
  {
    objectiveId: "1.7",
    question:
      "What type of data is LEAST likely to be synchronized between a mobile device and a desktop computer?",
    options: ["Contacts", "Application files", "Calendar events", "Email"],
    correctAnswer: 1,
    explanation:
      "While some application data might sync via the cloud, the actual installed application files/executables are typically not synchronized between mobile and desktop platforms.",
  },

  // --- Domain 2.0: Networking ---
  {
    objectiveId: "2.1",
    question: "Which protocol operates on TCP port 22 by default?",
    options: ["HTTP", "HTTPS", "FTP", "SSH"],
    correctAnswer: 3,
    explanation:
      "SSH (Secure Shell) uses TCP port 22 for secure remote command-line access and file transfers.",
  },
  {
    objectiveId: "2.1",
    question:
      "Which protocol is connectionless and often used for streaming media or DNS lookups?",
    options: ["TCP", "UDP", "IP", "ICMP"],
    correctAnswer: 1,
    explanation:
      "UDP (User Datagram Protocol) is connectionless, meaning it doesn't establish a session before sending data, making it faster but less reliable than TCP. It's suitable for applications where speed is critical and occasional packet loss is acceptable.",
  },
  {
    objectiveId: "2.1",
    question: "Which port is typically used for DNS queries?",
    options: ["80", "443", "53", "25"],
    correctAnswer: 2,
    explanation:
      "DNS (Domain Name System) primarily uses UDP port 53 for name resolution queries. TCP port 53 is used for zone transfers.",
  },
  {
    objectiveId: "2.1",
    question:
      "Which port number is associated with the Remote Desktop Protocol (RDP)?",
    options: ["22", "143", "443", "3389"],
    correctAnswer: 3,
    explanation:
      "RDP uses TCP port 3389 by default for remote desktop connections to Windows machines.",
  },
  {
    objectiveId: "2.1",
    question: "Which protocol is used for securely browsing websites?",
    options: ["HTTP", "HTTPS", "FTP", "SMTP"],
    correctAnswer: 1,
    explanation:
      "HTTPS (HTTP Secure) uses encryption (SSL/TLS) over TCP port 443 to secure web traffic.",
  },
  {
    objectiveId: "2.2",
    question:
      "What device operates at Layer 3 (Network Layer) of the OSI model and makes forwarding decisions based on IP addresses?",
    options: ["Hub", "Switch", "Router", "Access Point"],
    correctAnswer: 2,
    explanation:
      "Routers operate at Layer 3 and use IP addresses to determine the best path for data packets between different networks.",
  },
  {
    objectiveId: "2.2",
    question:
      "Which device primarily operates at Layer 2 of the OSI model and forwards frames based on MAC addresses?",
    options: ["Router", "Switch", "Hub", "Modem"],
    correctAnswer: 1,
    explanation:
      "Switches operate at Layer 2 (Data Link Layer) and use MAC addresses to intelligently forward traffic only to the intended destination port within a local network segment.",
  },
  {
    objectiveId: "2.2",
    question: "What is the primary function of a modem?",
    options: [
      "Route traffic between networks",
      "Modulate and demodulate signals for transmission over phone or cable lines",
      "Connect multiple devices within a LAN",
      "Provide wireless access",
    ],
    correctAnswer: 1,
    explanation:
      "A modem (Modulator/Demodulator) converts digital signals from a computer into analog signals suitable for transmission over analog lines (like DSL or cable) and vice-versa.",
  },
  {
    objectiveId: "2.2",
    question:
      "Which network device repeats a signal out all ports except the one it arrived on, operating at Layer 1?",
    options: ["Switch", "Router", "Hub", "Bridge"],
    correctAnswer: 2,
    explanation:
      "Hubs are simple Layer 1 devices that regenerate and repeat signals out all ports, creating a single collision domain.",
  },
  {
    objectiveId: "2.3",
    question: "Which wireless security protocol is considered the most secure?",
    options: ["WEP", "WPA", "WPA2", "WPS"],
    correctAnswer: 2,
    explanation:
      "WPA2 (Wi-Fi Protected Access 2), especially using AES encryption, is currently the most secure widely adopted standard for Wi-Fi networks. WPA3 is newer and even stronger but WPA2 is the expected A+ answer for 'most secure' common standard.",
  },
  {
    objectiveId: "2.3",
    question:
      "Which IEEE 802.11 standard operates exclusively in the 5 GHz frequency band and offers high speeds?",
    options: ["802.11b", "802.11g", "802.11n", "802.11ac"],
    correctAnswer: 3,
    explanation:
      "802.11ac (Wi-Fi 5) operates primarily in the 5 GHz band and offers significantly higher throughput compared to older standards like b, g, or n (which can operate in 2.4 GHz).",
  },
  {
    objectiveId: "2.3",
    question: "What does the term 'SSID' refer to in wireless networking?",
    options: [
      "Security protocol",
      "Network name",
      "Encryption key",
      "MAC address",
    ],
    correctAnswer: 1,
    explanation:
      "The SSID (Service Set Identifier) is the public name of a wireless network that devices scan for and connect to.",
  },
  {
    objectiveId: "2.4",
    question:
      "What type of server assigns IP addresses automatically to clients on a network?",
    options: ["DNS Server", "DHCP Server", "File Server", "Web Server"],
    correctAnswer: 1,
    explanation:
      "A DHCP (Dynamic Host Configuration Protocol) server automates the process of assigning IP addresses, subnet masks, default gateways, and DNS server information to network clients.",
  },
  {
    objectiveId: "2.4",
    question:
      "Which network service resolves fully qualified domain names (FQDNs) like 'www.google.com' into IP addresses?",
    options: ["DHCP", "DNS", "WINS", "NAT"],
    correctAnswer: 1,
    explanation:
      "DNS (Domain Name System) is responsible for translating human-readable domain names into the numerical IP addresses computers use to communicate.",
  },
  {
    objectiveId: "2.5",
    question:
      "In a SOHO network, what device commonly combines the functions of a router, switch, and wireless access point?",
    options: [
      "Modem",
      "Firewall appliance",
      "Wireless router",
      "Managed switch",
    ],
    correctAnswer: 2,
    explanation:
      "Consumer-grade wireless routers typically integrate routing, switching (usually 4-port), and Wi-Fi access point capabilities into a single device for SOHO environments.",
  },
  {
    objectiveId: "2.5",
    question:
      "When configuring a SOHO wireless router, what setting should be changed from the default to enhance security?",
    options: [
      "DHCP range",
      "SSID",
      "Administrator password",
      "Firmware version",
    ],
    correctAnswer: 2,
    explanation:
      "Leaving the default administrator password unchanged is a major security risk. It should always be changed to a strong, unique password.",
  },
  {
    objectiveId: "2.6",
    question:
      "Which Internet connection type typically offers the highest potential speeds but has limited availability?",
    options: ["DSL", "Cable", "Fiber Optic", "Satellite"],
    correctAnswer: 2,
    explanation:
      "Fiber Optic connections transmit data using light pulses through glass fibers, offering significantly higher bandwidth and lower latency compared to DSL, Cable, or Satellite, but its deployment is less widespread.",
  },
  {
    objectiveId: "2.6",
    question:
      "Which network type covers a large geographical area, such as a city or country?",
    options: ["LAN", "WAN", "PAN", "MAN"],
    correctAnswer: 1,
    explanation:
      "A WAN (Wide Area Network) connects networks over large distances, often using leased lines or public infrastructure like the internet.",
  },
  {
    objectiveId: "2.7",
    question:
      "Which command-line tool is used to test network connectivity between two hosts by sending ICMP echo requests?",
    options: ["ipconfig", "ping", "tracert", "netstat"],
    correctAnswer: 1,
    explanation:
      "`ping` sends ICMP echo request packets to a target host and waits for echo replies to determine reachability and round-trip time.",
  },
  {
    objectiveId: "2.7",
    question:
      "Which command-line utility in Windows displays the route taken by packets across an IP network to a destination host?",
    options: ["ping", "ipconfig", "tracert", "netstat"],
    correctAnswer: 2,
    explanation:
      "`tracert` (Trace Route) displays the sequence of routers (hops) packets traverse to reach a network host.",
  },
  {
    objectiveId: "2.7",
    question:
      "What tool is used to terminate twisted-pair network cables into a patch panel or keystone jack?",
    options: ["Crimper", "Punchdown tool", "Cable tester", "Tone generator"],
    correctAnswer: 1,
    explanation:
      "A punchdown tool is used to securely insert individual wires from a network cable into the Insulation Displacement Connectors (IDCs) found in patch panels and keystone jacks.",
  },
  {
    objectiveId: "2.8",
    question:
      "A user reports they cannot access the internet, but can access local network resources. What is the most likely cause?",
    options: [
      "Incorrect IP address",
      "Faulty network cable",
      "Incorrect default gateway setting",
      "Wireless adapter disabled",
    ],
    correctAnswer: 2,
    explanation:
      "The default gateway is the router's IP address used to reach external networks (like the internet). If it's misconfigured, local traffic works, but internet traffic fails.",
  },
  {
    objectiveId: "2.8",
    question:
      "If a user receives an IP address in the 169.254.x.x range, what is the likely problem?",
    options: [
      "Duplicate IP address conflict",
      "Cannot reach the DHCP server",
      "Incorrect DNS server configured",
      "Firewall blocking traffic",
    ],
    correctAnswer: 1,
    explanation:
      "An address in the 169.254.0.0/16 range indicates Automatic Private IP Addressing (APIPA), which means the client failed to obtain an IP address from a DHCP server.",
  },

  // --- Domain 3.0: Hardware ---
  {
    objectiveId: "3.1",
    question:
      "Which cable type uses an F-connector and is commonly used for cable television and cable internet?",
    options: ["UTP", "STP", "Coaxial", "Fiber Optic"],
    correctAnswer: 2,
    explanation:
      "Coaxial cable, particularly RG-6, is used for CATV and cable modem connections and typically terminates with an F-type connector.",
  },
  {
    objectiveId: "3.1",
    question:
      "What type of network cable consists of four pairs of twisted copper wires and is commonly used for Ethernet?",
    options: [
      "Coaxial",
      "Fiber Optic",
      "UTP (Unshielded Twisted Pair)",
      "Serial",
    ],
    correctAnswer: 2,
    explanation:
      "UTP cable is the standard for Ethernet LANs, utilizing twisted pairs to reduce interference.",
  },
  {
    objectiveId: "3.1",
    question:
      "Which cable category rating supports speeds up to 10 Gbps over reasonable distances?",
    options: ["Cat 3", "Cat 5", "Cat 5e", "Cat 6a"],
    correctAnswer: 3,
    explanation:
      "Category 6a (Augmented Cat 6) is designed to reliably support 10 Gbps Ethernet speeds up to 100 meters.",
  },
  {
    objectiveId: "3.2",
    question:
      "What type of connector is used for modern Ethernet network cables?",
    options: ["RJ11", "RJ45", "BNC", "Molex"],
    correctAnswer: 1,
    explanation:
      "RJ45 is the standard connector for UTP (Unshielded Twisted Pair) Ethernet cables used in most wired networks.",
  },
  {
    objectiveId: "3.2",
    question:
      "Which connector type is commonly used for connecting internal SATA hard drives and SSDs?",
    options: [
      "Molex",
      "SATA data connector",
      "PATA (IDE) connector",
      "PCIe connector",
    ],
    correctAnswer: 1,
    explanation:
      "SATA drives use a distinct L-shaped data connector and a wider power connector.",
  },
  {
    objectiveId: "3.3",
    question:
      "What is the primary physical difference between DDR3 and DDR4 RAM modules?",
    options: [
      "Number of pins",
      "Notch position",
      "Module height",
      "Heat spreader design",
    ],
    correctAnswer: 1,
    explanation:
      "The keying notch on DDR4 modules is in a different position than on DDR3 modules, preventing them from being inserted into incompatible slots.",
  },
  {
    objectiveId: "3.3",
    question:
      "What happens if you install RAM modules with different speed ratings on a motherboard?",
    options: [
      "The system will not boot",
      "All modules will operate at the speed of the slowest installed module",
      "Each module operates at its own rated speed",
      "Only the fastest module will be recognized",
    ],
    correctAnswer: 1,
    explanation:
      "Motherboards typically force all installed RAM to run at the speed supported by the slowest module to ensure stability.",
  },
  {
    objectiveId: "3.4",
    question:
      "Which storage technology uses flash memory, has no moving parts, and offers faster performance than traditional HDDs?",
    options: ["HDD", "SSD", "Optical Drive", "Tape Drive"],
    correctAnswer: 1,
    explanation:
      "SSDs (Solid State Drives) use NAND flash memory chips for storage, resulting in faster read/write speeds, lower latency, and greater durability compared to mechanical HDDs.",
  },
  {
    objectiveId: "3.4",
    question:
      "Which interface provides the fastest data transfer rates for internal SSDs?",
    options: ["SATA 3", "PATA", "NVMe (via PCIe)", "USB 3.0"],
    correctAnswer: 2,
    explanation:
      "NVMe (Non-Volatile Memory Express) utilizes the PCIe bus directly, offering significantly higher bandwidth and lower latency than the SATA interface.",
  },
  {
    objectiveId: "3.4",
    question: "What is the capacity of a standard single-layer Blu-ray disc?",
    options: ["4.7 GB", "8.5 GB", "25 GB", "50 GB"],
    correctAnswer: 2,
    explanation:
      "A standard single-layer Blu-ray disc (BD-R or BD-ROM) holds approximately 25 GB of data.",
  },
  {
    objectiveId: "3.4",
    question:
      "Which RAID level provides disk striping without parity, offering increased performance but no fault tolerance?",
    options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
    correctAnswer: 0,
    explanation:
      "RAID 0 (Striping) writes data across multiple disks simultaneously for speed, but if one disk fails, all data is lost.",
  },
  {
    objectiveId: "3.4",
    question:
      "Which RAID level provides disk mirroring, creating an exact copy of data on two disks for redundancy?",
    options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
    correctAnswer: 1,
    explanation:
      "RAID 1 (Mirroring) duplicates data onto two or more drives, providing fault tolerance as the system can continue operating if one drive fails.",
  },
  {
    objectiveId: "3.5",
    question:
      "What motherboard form factor is commonly used in standard desktop PCs?",
    options: ["ATX", "Micro-ATX", "Mini-ITX", "All of the above"],
    correctAnswer: 3,
    explanation:
      "ATX is the standard full-size desktop form factor. Micro-ATX and Mini-ITX are smaller variations also commonly used in desktops, depending on the case size and desired features.",
  },
  {
    objectiveId: "3.5",
    question: "What component on the motherboard directly houses the CPU?",
    options: ["Chipset", "Expansion slot", "CPU socket", "BIOS chip"],
    correctAnswer: 2,
    explanation:
      "The CPU socket is the physical connector on the motherboard where the Central Processing Unit (CPU) is installed.",
  },
  {
    objectiveId: "3.5",
    question:
      "Which type of expansion slot offers the highest bandwidth for modern graphics cards?",
    options: ["PCI", "AGP", "PCIe x1", "PCIe x16"],
    correctAnswer: 3,
    explanation:
      "PCI Express (PCIe) x16 slots provide the most data lanes and highest bandwidth, making them the standard for high-performance graphics cards.",
  },
  {
    objectiveId: "3.6",
    question:
      "What type of peripheral is used primarily for capturing handwritten signatures or drawings?",
    options: [
      "Barcode scanner",
      "Digitizer/Drawing Tablet",
      "KVM switch",
      "NFC reader",
    ],
    correctAnswer: 1,
    explanation:
      "A digitizer, often part of a drawing tablet, captures pen input for digital drawing, annotation, or signature capture.",
  },
  {
    objectiveId: "3.6",
    question: "What does a KVM switch allow a user to do?",
    options: [
      "Connect multiple peripherals via one USB port",
      "Control multiple computers using a single keyboard, video monitor, and mouse",
      "Scan documents into a digital format",
      "Improve audio output quality",
    ],
    correctAnswer: 1,
    explanation:
      "A KVM (Keyboard, Video, Mouse) switch enables switching control between multiple computers using one set of input/output devices.",
  },
  {
    objectiveId: "3.7",
    question:
      "What does the '80 PLUS' certification on a power supply indicate?",
    options: [
      "Output wattage",
      "Number of connectors",
      "Energy efficiency",
      "Compatibility standard",
    ],
    correctAnswer: 2,
    explanation:
      "The 80 PLUS certification signifies that a power supply is at least 80% efficient at various load levels (20%, 50%, 100%), meaning less energy is wasted as heat.",
  },
  {
    objectiveId: "3.7",
    question:
      "What type of power connector is typically used for modern motherboards (ATX)?",
    options: ["4-pin Molex", "6-pin PCIe", "24-pin ATX", "8-pin EPS"],
    correctAnswer: 2,
    explanation:
      "Modern ATX motherboards primarily use a 24-pin main power connector, often accompanied by a separate 4-pin or 8-pin CPU power connector.",
  },
  {
    objectiveId: "3.8",
    question:
      "Which component is most critical for a high-performance gaming PC?",
    options: [
      "Large capacity HDD",
      "Dual monitors",
      "Powerful dedicated GPU",
      "TV tuner card",
    ],
    correctAnswer: 2,
    explanation:
      "Modern games rely heavily on graphics processing, making a powerful dedicated Graphics Processing Unit (GPU) the most crucial component for gaming performance.",
  },
  {
    objectiveId: "3.8",
    question:
      "A user needs a computer primarily for running multiple virtual machines simultaneously. Which two components should be prioritized?",
    options: [
      "High-end GPU and SSD",
      "Fast CPU (many cores) and large amount of RAM",
      "Large monitor and mechanical keyboard",
      "Blu-ray drive and sound card",
    ],
    correctAnswer: 1,
    explanation:
      "Virtualization is CPU and RAM intensive. A CPU with multiple cores can handle multiple VMs, and ample RAM is needed to allocate sufficient memory to each VM.",
  },
  {
    objectiveId: "3.9",
    question:
      "Which type of printer uses a powder-based medium and a fuser assembly?",
    options: ["Inkjet", "Laser", "Thermal", "Impact"],
    correctAnswer: 1,
    explanation:
      "Laser printers use toner (a dry powder) which is electrostatically attracted to a drum, transferred to paper, and then permanently bonded using heat and pressure from a fuser assembly.",
  },
  {
    objectiveId: "3.9",
    question:
      "Which peripheral device converts printed documents into digital files?",
    options: ["Printer", "Scanner", "Monitor", "Projector"],
    correctAnswer: 1,
    explanation:
      "A scanner captures images of physical documents or photos and converts them into digital formats.",
  },
  {
    objectiveId: "3.10",
    question: "What does 'duplexing' refer to in the context of printers?",
    options: [
      "Printing in color",
      "Printing on both sides of the page",
      "Connecting via network",
      "Scanning multiple pages automatically",
    ],
    correctAnswer: 1,
    explanation:
      "Duplex printing is the ability of a printer to automatically print on both sides of a sheet of paper.",
  },
  {
    objectiveId: "3.10",
    question:
      "Which printer configuration setting controls the density of dots used to create an image, affecting print quality?",
    options: ["Orientation", "Paper size", "Resolution (DPI)", "Collation"],
    correctAnswer: 2,
    explanation:
      "Resolution, measured in Dots Per Inch (DPI), determines the level of detail in the printed output. Higher DPI generally means higher quality.",
  },
  {
    objectiveId: "3.11",
    question: "What is a common maintenance task for thermal printers?",
    options: [
      "Replacing ink cartridges",
      "Cleaning the print heads",
      "Replacing toner",
      "Cleaning the heating element",
    ],
    correctAnswer: 3,
    explanation:
      "Thermal printers use a heated printhead to create images on special thermal paper. Residue can build up on the heating element, requiring periodic cleaning with isopropyl alcohol.",
  },
  {
    objectiveId: "3.11",
    question:
      "What is the process of applying heat and pressure to melt toner onto paper in a laser printer called?",
    options: ["Charging", "Exposing", "Developing", "Fusing"],
    correctAnswer: 3,
    explanation:
      "The fuser assembly uses heat and pressure to permanently bond the toner particles to the paper fibers.",
  },

  // --- Domain 4.0: Virtualization and Cloud Computing ---
  {
    objectiveId: "4.1",
    question:
      "Which cloud computing model provides access to virtualized hardware resources (compute, storage, networking) over the internet?",
    options: ["SaaS", "PaaS", "IaaS", "DaaS"],
    correctAnswer: 2,
    explanation:
      "IaaS (Infrastructure as a Service) provides the fundamental building blocks (virtual machines, storage, networks) that users can rent and manage.",
  },
  {
    objectiveId: "4.1",
    question:
      "What cloud characteristic allows users to scale resources up or down automatically based on demand?",
    options: [
      "Rapid elasticity",
      "On-demand self-service",
      "Resource pooling",
      "Measured service",
    ],
    correctAnswer: 0,
    explanation:
      "Rapid elasticity allows cloud resources to be provisioned and released, often automatically, to scale quickly with demand.",
  },
  {
    objectiveId: "4.1",
    question:
      "Which cloud model involves software applications being delivered over the internet on a subscription basis?",
    options: ["IaaS", "PaaS", "SaaS", "Hybrid Cloud"],
    correctAnswer: 2,
    explanation:
      "SaaS (Software as a Service) provides access to ready-to-use software applications hosted by a vendor (e.g., Microsoft 365, Google Workspace).",
  },
  {
    objectiveId: "4.1",
    question:
      "What type of cloud deployment model involves a mix of on-premises infrastructure and public cloud services?",
    options: [
      "Private Cloud",
      "Public Cloud",
      "Community Cloud",
      "Hybrid Cloud",
    ],
    correctAnswer: 3,
    explanation:
      "A hybrid cloud combines private cloud infrastructure (on-premises or hosted) with public cloud services, allowing data and applications to be shared between them.",
  },
  {
    objectiveId: "4.2",
    question:
      "What software component manages the creation and operation of virtual machines on a host computer?",
    options: ["Guest OS", "Hypervisor", "Virtual CPU", "Host OS"],
    correctAnswer: 1,
    explanation:
      "A hypervisor (also known as a Virtual Machine Monitor or VMM) is the software or firmware that creates, runs, and manages virtual machines.",
  },
  {
    objectiveId: "4.2",
    question:
      "What type of hypervisor runs directly on the host computer's hardware without an underlying operating system?",
    options: [
      "Type 1 (Bare-metal)",
      "Type 2 (Hosted)",
      "Container",
      "Emulator",
    ],
    correctAnswer: 0,
    explanation:
      "Type 1 hypervisors (e.g., VMware ESXi, Microsoft Hyper-V Server) run directly on the hardware, offering better performance and stability for enterprise environments.",
  },
  {
    objectiveId: "4.2",
    question:
      "What resource is most likely to be a bottleneck when running multiple virtual machines on a host with limited hardware?",
    options: [
      "Network bandwidth",
      "RAM",
      "Hard drive speed",
      "Monitor resolution",
    ],
    correctAnswer: 1,
    explanation:
      "Each virtual machine requires its own allocation of RAM. Insufficient physical RAM on the host system is a common performance bottleneck when running many VMs.",
  },

  // --- Domain 5.0: Hardware and Network Troubleshooting ---
  {
    objectiveId: "5.1",
    question:
      "According to the CompTIA troubleshooting methodology, what is the FIRST step?",
    options: [
      "Establish a theory of probable cause",
      "Identify the problem",
      "Test the theory",
      "Document findings",
    ],
    correctAnswer: 1,
    explanation:
      "The first step is always to gather information from the user and system to clearly identify the symptoms and scope of the problem.",
  },
  {
    objectiveId: "5.1",
    question:
      "After establishing a theory of probable cause, what is the next step in the troubleshooting methodology?",
    options: [
      "Identify the problem",
      "Test the theory to determine cause",
      "Establish a plan of action",
      "Verify full system functionality",
    ],
    correctAnswer: 1,
    explanation:
      "Once you have a likely theory (hypothesis), you must test it to confirm whether it is the actual cause of the problem.",
  },
  {
    objectiveId: "5.1",
    question:
      "During which step of the troubleshooting methodology would you typically escalate the problem if you cannot resolve it?",
    options: [
      "Identify the problem",
      "Establish a theory",
      "Test the theory",
      "Establish a plan of action or escalate",
    ],
    correctAnswer: 3,
    explanation:
      "If testing theories doesn't lead to a solution, the next step involves creating a plan based on confirmed findings or escalating the issue to someone with more expertise.",
  },
  {
    objectiveId: "5.2",
    question:
      "A computer fails to boot, and you hear a specific pattern of beeps. What component is likely indicating an error?",
    options: [
      "Hard drive",
      "Operating system",
      "Power supply",
      "Motherboard/BIOS",
    ],
    correctAnswer: 3,
    explanation:
      "Beep codes emitted during the POST (Power-On Self-Test) are generated by the motherboard's BIOS/UEFI to indicate hardware failures before video is initialized.",
  },
  {
    objectiveId: "5.2",
    question:
      "A PC powers on, fans spin, but there is no display and no beep codes. Which component is a likely suspect?",
    options: ["Hard drive", "RAM", "Operating System", "Network Card"],
    correctAnswer: 1,
    explanation:
      "Faulty or improperly seated RAM is a common cause of a 'no POST, no video' situation. The system fails basic initialization before beep codes can be generated.",
  },
  {
    objectiveId: "5.2",
    question:
      "If a computer is experiencing random shutdowns or reboots, especially under load, what hardware component should be investigated first?",
    options: [
      "RAM",
      "CPU overheating / Power supply issue",
      "Hard drive failure",
      "Incorrect BIOS settings",
    ],
    correctAnswer: 1,
    explanation:
      "Overheating (CPU or GPU) or an insufficient/failing power supply unit (PSU) are common causes of unexpected shutdowns and reboots, particularly when the system demands more power.",
  },
  {
    objectiveId: "5.3",
    question:
      "A user reports slow performance when accessing files. Which tool would be most helpful in diagnosing a potential hard drive issue?",
    options: [
      "CHKDSK / SMART diagnostics",
      "Task Manager (CPU usage)",
      "ipconfig",
      "Device Manager",
    ],
    correctAnswer: 0,
    explanation:
      "CHKDSK checks the file system integrity, while SMART (Self-Monitoring, Analysis, and Reporting Technology) diagnostics read the drive's internal health status, both useful for storage issues.",
  },
  {
    objectiveId: "5.3",
    question:
      "A computer makes a loud clicking or grinding noise during operation, and the OS fails to boot. What is the most likely failed component?",
    options: [
      "CPU Fan",
      "Power Supply Fan",
      "Case Fan",
      "Mechanical Hard Disk Drive (HDD)",
    ],
    correctAnswer: 3,
    explanation:
      "Loud clicking or grinding noises are classic symptoms of a physical failure within a mechanical hard drive, often involving the read/write heads or platter motor.",
  },
  {
    objectiveId: "5.4",
    question:
      "An image on an LCD screen appears dim or faint, even with brightness turned up. What is the most likely component failure?",
    options: [
      "Video card",
      "Backlight or Inverter",
      "RAM",
      "Screen resolution setting",
    ],
    correctAnswer: 1,
    explanation:
      "A failing backlight (CCFL or LED) or, in the case of older CCFL displays, a failing inverter, is the most common cause of a dim screen.",
  },
  {
    objectiveId: "5.4",
    question:
      "A monitor displays images with incorrect colors. What is the first thing to check?",
    options: [
      "Video card drivers",
      "Monitor cable connection",
      "Monitor settings (color calibration)",
      "RAM modules",
    ],
    correctAnswer: 1,
    explanation:
      "A loose or damaged monitor cable (VGA, DVI, HDMI, DisplayPort) is a frequent cause of color issues or distorted display. Ensure it's securely connected at both ends.",
  },
  {
    objectiveId: "5.5",
    question:
      "A smartphone battery is draining much faster than usual. What is a likely cause?",
    options: [
      "Weak cellular signal",
      "GPS constantly active",
      "App running in the background",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Poor signal (causing the radio to use more power), GPS usage, and rogue background apps are all common causes of rapid battery drain on mobile devices.",
  },
  {
    objectiveId: "5.5",
    question:
      "A user's smartphone touchscreen is unresponsive. What troubleshooting step should be attempted first?",
    options: [
      "Replace the screen",
      "Perform a factory reset",
      "Restart the device",
      "Update the operating system",
    ],
    correctAnswer: 2,
    explanation:
      "A simple restart often resolves temporary software glitches that can cause touchscreen unresponsiveness. It should be the first step before more drastic measures.",
  },
  {
    objectiveId: "5.6",
    question:
      "A laser printer is producing pages with ghost images (faint copies of previous prints). What component is most likely failing?",
    options: ["Fuser assembly", "Toner cartridge", "Drum", "Transfer roller"],
    correctAnswer: 2,
    explanation:
      "Ghosting is often caused by the photosensitive drum not being fully cleaned or discharged after the previous image was transferred, leading to residual toner being picked up again.",
  },
  {
    objectiveId: "5.6",
    question:
      "An inkjet printer is printing pages with missing lines or streaks. What is the most likely cause?",
    options: [
      "Low toner",
      "Clogged print head nozzles",
      "Paper jam",
      "Incorrect paper type",
    ],
    correctAnswer: 1,
    explanation:
      "Dried ink can clog the tiny nozzles on an inkjet print head, preventing ink from spraying correctly and causing streaks or missing lines. Running a cleaning cycle often helps.",
  },
  {
    objectiveId: "5.7",
    question:
      "A user cannot connect to the wireless network. They have confirmed the SSID and password are correct. What should be checked NEXT?",
    options: [
      "Check if the wireless adapter is enabled",
      "Reinstall the operating system",
      "Replace the router",
      "Check the DNS server address",
    ],
    correctAnswer: 0,
    explanation:
      "It's common for users to accidentally disable the wireless adapter via a physical switch or function key combination. This is a simple check before more complex troubleshooting.",
  },
  {
    objectiveId: "5.7",
    question:
      "A user reports intermittent connectivity issues on a wired network connection. Which tool would be most useful for checking the physical connection?",
    options: ["ping", "ipconfig", "Cable tester", "Wi-Fi analyzer"],
    correctAnswer: 2,
    explanation:
      "A cable tester can check for physical faults in the network cable itself, such as broken wires, shorts, or incorrect pinouts, which can cause intermittent connection problems.",
  },
];

// Log confirmation after defining the array
console.log(`Questions loaded: ${quizQuestions.length} questions available.`);
