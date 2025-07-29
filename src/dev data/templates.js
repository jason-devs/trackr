const workoutTemplates = [
  {
    name: "Push 1",
    exercises: [
      {
        name: "Bench Press",
        sets: 4,
        repRange: [6, 8],
        reference: "https://example.com/bench-press",
      },
      {
        name: "Incline Dumbbell Press",
        sets: 3,
        repRange: [8, 10],
        reference: "",
      },
      {
        name: "Overhead Shoulder Press",
        sets: 3,
        repRange: [10, 12],
        reference: "https://example.com/overhead-shoulder-press",
      },
      { name: "Tricep Dips", sets: 3, repRange: [12, 15], reference: "" },
    ],
  },
  {
    name: "Push 2",
    exercises: [
      { name: "Incline Bench Press", sets: 4, repRange: [6, 8], reference: "" },
      {
        name: "Flat Dumbbell Press",
        sets: 3,
        repRange: [8, 10],
        reference: "https://example.com/flat-dumbbell-press",
      },
      { name: "Arnold Press", sets: 3, repRange: [10, 12], reference: "" },
      {
        name: "Overhead Tricep Extension",
        sets: 3,
        repRange: [12, 15],
        reference: "https://example.com/overhead-tricep-extension",
      },
    ],
  },
  {
    name: "Pull 1",
    exercises: [
      {
        name: "Pull-Ups",
        sets: 4,
        repRange: [6, 8],
        reference: "https://example.com/pull-ups",
      },
      { name: "Barbell Row", sets: 3, repRange: [8, 10], reference: "" },
      {
        name: "Face Pulls",
        sets: 3,
        repRange: [10, 12],
        reference: "https://example.com/face-pulls",
      },
      { name: "Bicep Curls", sets: 3, repRange: [12, 15], reference: "" },
    ],
  },
  {
    name: "Pull 2",
    exercises: [
      { name: "Chin-Ups", sets: 4, repRange: [6, 8], reference: "" },
      {
        name: "T-Bar Row",
        sets: 3,
        repRange: [8, 10],
        reference: "https://example.com/t-bar-row",
      },
      { name: "Rear Delt Flys", sets: 3, repRange: [10, 12], reference: "" },
      {
        name: "Hammer Curls",
        sets: 3,
        repRange: [12, 15],
        reference: "https://example.com/hammer-curls",
      },
    ],
  },
  {
    name: "Legs 1",
    exercises: [
      {
        name: "Squats",
        sets: 4,
        repRange: [6, 8],
        reference: "https://example.com/squats",
      },
      { name: "Romanian Deadlifts", sets: 3, repRange: [8, 10], reference: "" },
      {
        name: "Walking Lunges",
        sets: 3,
        repRange: [10, 12],
        reference: "https://example.com/walking-lunges",
      },
      { name: "Calf Raises", sets: 3, repRange: [12, 15], reference: "" },
    ],
  },
  {
    name: "Legs 2",
    exercises: [
      { name: "Front Squats", sets: 4, repRange: [6, 8], reference: "" },
      {
        name: "Deadlifts",
        sets: 3,
        repRange: [8, 10],
        reference: "https://example.com/deadlifts",
      },
      { name: "Step-Ups", sets: 3, repRange: [10, 12], reference: "" },
      {
        name: "Seated Calf Raises",
        sets: 3,
        repRange: [12, 15],
        reference: "https://example.com/seated-calf-raises",
      },
    ],
  },
];

export default workoutTemplates;
