export const mockExercises = [
  {
    id: 1,
    name: "Jamping Jacks",
    ImgId_By_Youtube: "Vuu5OJvlQV4",
    description:
      "A bodyweight exercise to strengthen the chest, shoulders, and triceps.",
    demo_url:
      "https://i.pinimg.com/originals/57/cc/e0/57cce0afa73a4b4c9c8c139d08aec588.gif",
    video_tutorial_url:
      "https://www.youtube.com/embed/Vuu5OJvlQV4?si=kXEwhCngVY0GQhhB",
    execution_steps: ["Lie face down", "Push body up", "Lower body"],
    types: [{ id: 1, name: "Strength" }],
    goals: [{ id: 1, name: "Build Muscle" }],
    muscleGroups: [
      { id: 1, name: "Chest" },
      { id: 2, name: "Triceps" },
    ],
  },
  {
    id: 2,
    name: "Plank",
    ImgId_By_Youtube: "-hSma-BRzoo",

    description:
      "A lower body exercise to strengthen quads, hamstrings, and glutes.",
    demo_url:
      "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/plank-1457045584.gif?crop=1xw:1xh;center,top&resize=1200:*",
    video_tutorial_url:
      "https://www.youtube.com/embed/-hSma-BRzoo?si=sEMHx2ttEY3HWoUH",
    execution_steps: [
      "Stand with feet shoulder-width apart",
      "Lower hips",
      "Return to standing",
    ],
    types: [{ id: 2, name: "Workout" }],
    goals: [{ id: 2, name: "Improve Stamina" }],
    muscleGroups: [
      { id: 3, name: "Quads" },
      { id: 4, name: "Glutes" },
    ],
  },
  {
    id: 3,
    name: "Plank Rolls",
    ImgId_By_Youtube: "adDGcsdu8WY",
    description:
      "A lower body exercise to strengthen quads, hamstrings, and glutes.",
    demo_url:
      "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/plankrollingsideplank-1472131261.gif",
    video_tutorial_url:
      "https://www.youtube.com/embed/adDGcsdu8WY?si=4QeJdl8VLg430P7-",
    execution_steps: [
      "Stand with feet shoulder-width apart",
      "Lower hips",
      "Return to standing",
    ],
    types: [{ id: 2, name: "Endurance" }],
    goals: [{ id: 2, name: "Improve Stamina" }],
    muscleGroups: [
      { id: 3, name: "Quads" },
      { id: 4, name: "Glutes" },
    ],
  },
];
export const mockGoals = [
  {
    id: 1,
    name: "Build Muscle",
    description: "Increase muscle mass and strength",
  },
  {
    id: 2,
    name: "Improve Stamina",
    description: "Enhance endurance and cardiovascular health",
  },
];

export const mockIntensities = [
  { id: 1, name: "Moderate", description: "Balanced workout intensity" },
  { id: 2, name: "High", description: "Intense workout for advanced users" },
];

export const mockAchievements = [
  {
    id: 1,
    name: "First Workout",
    description: "Completed your first workout",
    badge_url: "http://example.com/badges/first_workout.png",
  },
  {
    id: 2,
    name: "5-Day Streak",
    description: "Achieved a 5-day workout streak",
    badge_url: "http://example.com/badges/5_day_streak.png",
  },
];

export const mockExerciseTypes = [
  { id: 1, name: "Strength", default_duration: 30 },
  { id: 2, name: "Endurance", default_duration: 45 },
];

export const mockMuscleGroups = [
  { id: 1, name: "Chest" },
  { id: 2, name: "Triceps" },
  { id: 3, name: "Quads" },
  { id: 4, name: "Glutes" },
];
export const mockNotifications = [
  {
    id: 1,
    user_id: "user_id_123",
    title: "New Achievement Unlocked!",
    message: "You completed your first workout.",
    created_at: "2025-07-20T10:00:00Z",
    read: false,
    icon_url: "http://example.com/badge1.png",
  },
  {
    id: 2,
    user_id: "user_id_123",
    title: "Streak Update",
    message: "You've reached a 5-day streak!",
    created_at: "2025-07-19T15:30:00Z",
    read: true,
    icon_url: null,
  },
];
