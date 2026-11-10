export type Client = {
  name: string;
  agent: string;
  tone: string;
  goal: string;
  knowledgeBase: string;
  live: boolean;
  leadsByDay: number[];
  chatsByDay: number[];
};

export type Lead = {
  name: string;
  contact: string;
  interest: string;
  clientIndex: number;
  status: "Qualified" | "In progress";
  time: string;
};

export const clients: Client[] = [
  {
    name: "Brightside Dental",
    agent: "Mia",
    tone: "Warm and calm",
    goal: "Book a first visit",
    knowledgeBase: "4 documents",
    live: true,
    leadsByDay: [3, 4, 2, 5, 3, 6, 4, 5, 7, 4, 6, 5, 8, 6],
    chatsByDay: [11, 13, 9, 15, 12, 18, 13, 16, 21, 13, 17, 15, 22, 18],
  },
  {
    name: "Harbor Homes",
    agent: "Zain",
    tone: "Confident and concise",
    goal: "Book a viewing",
    knowledgeBase: "6 documents",
    live: true,
    leadsByDay: [2, 1, 3, 2, 4, 3, 2, 4, 3, 5, 3, 4, 5, 4],
    chatsByDay: [9, 7, 11, 8, 13, 10, 8, 14, 11, 16, 11, 13, 15, 13],
  },
  {
    name: "Peak Fitness",
    agent: "Sam",
    tone: "Energetic",
    goal: "Sell trial memberships",
    knowledgeBase: "3 documents",
    live: true,
    leadsByDay: [1, 2, 1, 3, 2, 2, 3, 2, 4, 3, 2, 3, 4, 3],
    chatsByDay: [6, 8, 5, 10, 7, 8, 9, 7, 12, 10, 8, 9, 12, 10],
  },
  {
    name: "Oakwood Legal",
    agent: "Lena",
    tone: "Formal",
    goal: "Qualify enquiries",
    knowledgeBase: "2 documents",
    live: false,
    leadsByDay: Array(14).fill(0),
    chatsByDay: Array(14).fill(0),
  },
];

export const leads: Lead[] = [
  {
    name: "Ayesha Khan",
    contact: "ayesha@example.com",
    interest: "Teeth whitening",
    clientIndex: 0,
    status: "Qualified",
    time: "12 min ago",
  },
  {
    name: "Daniel Reyes",
    contact: "+92 300 555 0142",
    interest: "3 bed apartment, DHA",
    clientIndex: 1,
    status: "Qualified",
    time: "48 min ago",
  },
  {
    name: "Hira Siddiqui",
    contact: "hira@example.com",
    interest: "Trial membership",
    clientIndex: 2,
    status: "Qualified",
    time: "1 h ago",
  },
  {
    name: "Omar F.",
    contact: "",
    interest: "Braces consultation",
    clientIndex: 0,
    status: "In progress",
    time: "2 h ago",
  },
  {
    name: "Sarah Mitchell",
    contact: "sarah@example.com",
    interest: "Viewing this week",
    clientIndex: 1,
    status: "Qualified",
    time: "3 h ago",
  },
  {
    name: "Bilal A.",
    contact: "+92 321 555 0188",
    interest: "Monthly plan pricing",
    clientIndex: 2,
    status: "Qualified",
    time: "5 h ago",
  },
  {
    name: "Nadia Rauf",
    contact: "nadia@example.com",
    interest: "Root canal",
    clientIndex: 0,
    status: "Qualified",
    time: "6 h ago",
  },
];

export function total(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0);
}
