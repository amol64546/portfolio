import seatunnelImage from '@/assets/project-seatunnel.jpg';
import eventImage from '@/assets/project-event.jpg';
import ecomImage from '@/assets/ecom.png';
import paymentImage from '@/assets/payment.png';
import camundaImage from '@/assets/camunda.png';
import engagementImage from '@/assets/engagement.png';
import aclImage from '@/assets/acl.png';
import quarkusImage from '@/assets/quarkus.png';
import codeguruImage from '@/assets/codeguru.png';

export type Project = {
  title: string;
  description: string;
  image: string;
  dataAiHint: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projectsData: Project[] = [
  {
    title: 'Event Streaming Service',
    description: 'Event Streaming Service for streaming real time data from kafka to client using server sent event protocal.',
    image: eventImage.src,
    dataAiHint: 'server sent events',
    tags: ['Java', 'Spring-Boot', 'Spring WebFlux', 'Apache Kafka', 'MongoDB'],
    // liveUrl: '#',
    repoUrl: 'https://github.com/amol64546/server-sent-event',
  },
  {
    title: 'Engagement Service',
    description: 'Built a reactive SMS and Email notification system with Spring WebFlux. Integrated Twilio Comms and Sendgrid to enable reliable delivery. Developed dynamic message templating.',
    image: engagementImage.src,
    dataAiHint: 'notification service',
    tags: ['Java', 'Spring Boot', 'Apache Kafka', 'Twilio'],
    // liveUrl: '#',
    repoUrl: 'https://github.com/amol64546/engagement-project',
  },
  {
    title: 'Payment service',
    description: 'Service for making wallet to wallet transfer. Different payment gateway are integrated like Paypal, Razorpay, Authorize.net, Stripe.',
    image: paymentImage.src,
    dataAiHint: 'payment service',
    tags: ['Java','Spring Boot','Razerpay','Paypal','Stripe','Authorize.net'],
    // liveUrl: '#',
    repoUrl: 'https://github.com/amol64546/payment-project',
  },
  {
    title: 'Codeguru',
    description: 'Designed and deployed a FastAPI service to scan Python GitHub repositories, extracting function, level metadata for FaaS automation. ',
    image: codeguruImage.src,
    dataAiHint: 'faas service',
    tags: ['Python', 'FastApi', 'Astroid'],
    // liveUrl: '#',
    repoUrl: 'https://github.com/amol64546/codeguru',
  },
  {
    title: 'Apache Seatunnel',
    description: 'Apache Seatunnel Deployement, Load testing, Implementing wrapper arround it and testing all of its connectors for source, sink and transform. Apache Seatunnel is an distributed data migration, synchronisation and transformation platform.',
    image: seatunnelImage.src,
    dataAiHint: 'ETL Tool',
    tags: ['Apache-Seatunnel', 'React', 'JavaScript', 'CSS'],
    liveUrl: 'https://amol64546.github.io/seatunnel-web/',
    repoUrl: 'https://github.com/amol64546/seatunnel-web',
  },
  {
    title: 'Access control layer',
    description: 'Central Access control layer service for all microservices. Provided access for read, write and execute of different contructs.',
    image: aclImage.src,
    dataAiHint: 'authorization layer',
    tags: ['Java', 'Spring-Boot', 'SpiceDB', 'TiDB', 'Redis','Apache Kafka'],
    // liveUrl: '#',
    // repoUrl: '#',
  },
  {
    title: 'BPMN Service',
    description: 'Camunda is an open-source platform for process automation and workflow management. API orchestration service which automate the process by combining multiple APIs for automation a task. Implemented process deployment and execution feature by leaveraging camunda repository and runtime service.',
    image: camundaImage.src,
    dataAiHint: 'camunda orchestration',
    tags: ['Java', 'Spring-Boot', 'Camunda'],
    // liveUrl: '#',
    repoUrl: 'https://github.com/amol64546/Camunda-Application',
  },
  {
    title: 'Quarkus Service for optimized Get APIs',
    description: 'Java service using Quarkus framework which is cloud native. Boost performance of APIs due to compile time binding of beans.',
    image: quarkusImage.src,
    dataAiHint: 'get api service',
    tags: ['Java', 'Quarkus','MongoDB'],
    // liveUrl: '#',
    repoUrl: 'https://github.com/amol64546/Quarkus-Mongo',
  },
  {
    title: 'Bada Bazaar',
    description: 'A backend e-commerce project made using Java Spring Boot based on Spring MVC Architecture. This Spring Boot application allows customers to order products, add to cart, checkout cart and filter products by category features.',
    image: ecomImage.src,
    dataAiHint: 'online shopping',
    tags: ['Java', 'Spring-Boot', 'Spring-Security', 'Postgres', 'Redis'],
    // liveUrl: '#',
    repoUrl: 'https://github.com/amol64546/BadaBazaar',
  }
];
