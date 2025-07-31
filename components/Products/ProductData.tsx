import { Blog } from "@/types/blog";

const ProductData: any[] = [
  {
    id: 1,
    title: "PLINE II",
    description:
      "PLINE is a device that transmits Ethernet or RS485 communication by superimposing it on AC100V/AC200V power lines.",
    category: "Communication",
    image: "/images/products/pline.png",
    content: (
      <div>
        <h3 className="text-xl font-semibold mb-2">About PLINE II</h3>
        <p className="mb-4">
          PLINE II is an industrial communication device that enables data transmission via 2-wire Ethernet/RS485. Designed for high reliability in industrial environments, PLINE II supports easy installation, flexible configuration, and long-distance communication. It is ideal for factory automation, monitoring, and modern industrial system integration.
        </p>
        <h4 className="text-lg font-semibold mb-1">Key Features</h4>
        <ul className="list-disc ml-6 mb-4">
          <li>2-wire Ethernet/RS485 communication</li>
          <li>Industrial-grade reliability</li>
          <li>Easy installation and configuration</li>
          <li>Long-distance communication capability</li>
        </ul>
        <h4 className="text-lg font-semibold mb-1">Applications</h4>
        <p className="mb-4">
          Used in factory automation, monitoring systems, machine integration, and various other industrial applications requiring stable and efficient data communication.
        </p>
        <h4 className="text-lg font-semibold mb-1">Technical Specifications</h4>
        <ul className="list-disc ml-6 mb-4">
          <li>Protocol: Ethernet/RS485</li>
          <li>Transmission distance: Up to 1200 meters</li>
          <li>Operating temperature: -20°C to 60°C</li>
          <li>Dimensions: 120 x 80 x 35 mm</li>
        </ul>
        <h4 className="text-lg font-semibold mb-1">Advantages</h4>
        <p className="mb-4">
          PLINE II offers a cost-effective solution for industrial communication without compromising reliability and performance. With a compact design and advanced features, this device is a top choice for modernizing your industrial systems.
        </p>
        <h4 className="text-lg font-semibold mb-1">User Testimonial</h4>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 dark:text-gray-300 mb-4">
          "Since using PLINE II, our factory monitoring system has become more stable and easier to integrate with other devices."
        </blockquote>
        <p className="mb-2">
          For more information, please contact our sales team or download the product brochure from TOHO's official website.
        </p>
      </div>
    ),
    features: [
      "2-wire Ethernet/RS485 communication",
      "Industrial grade reliability",
      "Easy installation and configuration",
      "Long-distance communication capability",
    ],
    specs: "Industrial Communication Device",
  },
  {
    id: 2,
    title: "TOLINE",
    description:
      "TOLINE multiplex transmission device is a simple communication that transmits many signals over a pair of wires, and supports various systems in the automotive and material handling industries.",
    category: "Communication",
    image: "/images/products/toline.jpg",
    content: (
      <div>
        <h3 className="text-xl font-semibold mb-2">About TOLINE</h3>
        <p className="mb-4">
          TOLINE is a multi-transmission device for industrial data communication that supports various protocols and applications. With reliable transmission capability and high compatibility, TOLINE is ideal for system integration, data collection, and signal transmission in complex industrial environments.
        </p>
        <h4 className="text-lg font-semibold mb-1">Key Features</h4>
        <ul className="list-disc ml-6 mb-4">
          <li>Multi-transmission capability</li>
          <li>Industrial data communication</li>
          <li>Reliable signal transmission</li>
          <li>Compatible with various protocols</li>
        </ul>
        <h4 className="text-lg font-semibold mb-1">Applications</h4>
        <p className="mb-4">
          Ideal for system integration, machine data collection, and signal transmission in industrial environments that require high flexibility and reliability.
        </p>
        <h4 className="text-lg font-semibold mb-1">Technical Specifications</h4>
        <ul className="list-disc ml-6 mb-4">
          <li>Protocol: Multi-protocol support</li>
          <li>Transmission distance: Up to 1500 meters</li>
          <li>Operating temperature: -10°C to 70°C</li>
          <li>Dimensions: 130 x 85 x 40 mm</li>
        </ul>
        <h4 className="text-lg font-semibold mb-1">Advantages</h4>
        <p className="mb-4">
          TOLINE provides a flexible and reliable data communication solution for various industrial needs, supporting operational efficiency and productivity.
        </p>
        <h4 className="text-lg font-semibold mb-1">User Testimonial</h4>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 dark:text-gray-300 mb-4">
          "TOLINE makes machine-to-machine integration in our factory easier and very stable for data transmission."
        </blockquote>
        <p className="mb-2">
          Contact our sales team for the best solution consultation or download the technical document on the TOHO website.
        </p>
      </div>
    ),
    features: [
      "Multi-transmission capability",
      "Industrial data communication",
      "Reliable signal transmission",
      "Compatible with various protocols",
    ],
    specs: "Multi-Transmission Device",
  },
];

export default ProductData;