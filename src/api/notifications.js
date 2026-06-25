export async function fetchNotifications() {
  return {
    notifications: [
      {
        id: 1,
        type: "Placement",
        message: "TCS Hiring Drive",
        timestamp: "2026-06-25"
      },
      {
        id: 2,
        type: "Result",
        message: "Mid Exam Results Published",
        timestamp: "2026-06-24"
      },
      {
        id: 3,
        type: "Event",
        message: "Hackathon Registration Open",
        timestamp: "2026-06-23"
      }
    ]
  };
}