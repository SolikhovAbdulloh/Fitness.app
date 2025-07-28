import User from "../models/User";
import UserSettings from "../models/UserSettings";
import UserProgress from "../models/UserProgress";
import UserAchievement from "../models/UserAchievement";
import { historyItemComparator } from "../utils/utils";

// Mock ma'lumotlar
const mockUserSettings = {
  goal: { id: 1, name: "Build Muscle" },
  intensity: { id: 1, name: "Moderate" },
};

const mockUserProgress = {
  level: 1,
  level_progress: 50,
  streak: 3,
  highest_streak: 5,
};

const mockUserSchedule = ["Monday", "Wednesday", "Friday"];

const mockUserAchievements = [
  {
    id: 1,
    name: "First Workout",
    description: "Completed your first workout",
    earned_at: "2025-07-01",
  },
  {
    id: 2,
    name: "5-Day Streak",
    description: "Achieved a 5-day workout streak",
    earned_at: "2025-07-10",
  },
];

const mockUserAccumulatedStats = [
  { date: "2025-07-01", minutes: 30, calories: 200 },
  { date: "2025-07-02", minutes: 45, calories: 300 },
];

const mockUserHistory = [
  {
    type: "program",
    id: 1,
    name: "Beginner Program",
    completed_at: "2025-07-05",
  },
  {
    type: "routine",
    id: 1,
    name: "Morning Routine",
    completed_at: "2025-07-06",
  },
  ...mockUserAchievements,
];

// getUser (avvalgi mock ma'lumot saqlanadi)
export const getUser = async (user) => {
  if (!user || !user.id) {
    throw new Error("Foydalanuvchi ma'lumotlari mavjud emas");
  }

  const mockUser = {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    id: user.id,
    name: "Solikhov",
    email: user.email || "test@example.com",
    weight: 70,
    weight_unit: "kg",
    birthday: "1990-01-01",
    gender: "male",
    settings: mockUserSettings,
    schedule: mockUserSchedule,
    progress: mockUserProgress,
  };

  return mockUser;
};

const getUserSettings = async (id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    return new UserSettings(mockUserSettings.goal, mockUserSettings.intensity);

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_USER_SETTINGS_ROUTE}/${id}`
    );
    const data = await response.data.data;
    const goal = await getGoal(data.goal_id);
    const intensity = await getIntensity(data.intensity_id);
    return new UserSettings(goal, intensity);
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getUserProgress = async (id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    return new UserProgress(
      mockUserProgress.level,
      mockUserProgress.level_progress,
      mockUserProgress.streak,
      mockUserProgress.highest_streak
    );

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_USER_PROGRESS_ROUTE}/${id}`
    );
    const data = await response.data.data;
    const progress = new UserProgress(
      data.level,
      data.level_progress,
      data.streak,
      data.highest_streak
    );
    return progress;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};
// https://i.pinimg.com/originals/57/cc/e0/57cce0afa73a4b4c9c8c139d08aec588.gif

const createUser = async (userObj) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const user = new User();
    user.id = userObj.id;
    user.picture = userObj.picture || "123";
    user.birthday = userObj.birthday || "1990-01-01";
    user.gender = userObj.gender || "male";
    user.weight = userObj.weight || 70;
    user.weight_unit = userObj.weight_unit || "kg";
    user.settings = mockUserSettings;
    user.progress = mockUserProgress;
    user.schedule = userObj.schedule || mockUserSchedule;
    return user;

    // Asl kod:
    /*
    const user = new User();
    user.id = userObj.id;
    user.picture = userObj.picture;
    user.birthday = userObj.birthday;
    user.gender = userObj.gender;
    user.weight = userObj.weight;
    user.weight_unit = userObj.weight_unit;
    let response = await axiosClient.put(`${API_ROUTE}/${user.id}`, user);
    userObj.settings.user_id = user.id;
    response = await updateUserSettings(userObj.settings);
    user.settings = response;
    response = await getUserProgress(user.id);
    user.progress = response;
    response = await createUserSchedule(user.id, userObj.schedule);
    user.schedule = response;
    return user;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const updateUser = async (user_id, updatedUserObj) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const updatedUser = new User(
      user_id,
      updatedUserObj.name || "Solikhov",
      updatedUserObj.picture || "123",
      updatedUserObj.birthday || "1999-01-06",
      updatedUserObj.gender || "male",
      updatedUserObj.weight || 70,
      updatedUserObj.weight_unit || "kg",
      updatedUserObj.settings || mockUserSettings,
      updatedUserObj.progress || mockUserProgress,
      updatedUserObj.schedule || mockUserSchedule
    );
    return updatedUser;

    // Asl kod:
    /*
    const updatedUser = new User(
      user_id,
      updatedUserObj.name,
      updatedUserObj.picture,
      updatedUserObj.birthday,
      updatedUserObj.gender,
      updatedUserObj.weight,
      updatedUserObj.weight_unit,
      updatedUserObj.settings,
      updatedUserObj.progress,
      updatedUserObj.schedule
    );
    const response = await axiosClient.put(
      `${API_ROUTE}/${user_id}`,
      updatedUser
    );
    if (updatedUser.settings) {
      await updateUserSettings(user_id, updatedUser.settings);
    }
    if (updatedUser.progress) {
      await updateUserProgress(user_id, updatedUser.progress);
    }
    if (updatedUser.schedule) {
      await createUserSchedule(user_id, updatedUser.schedule);
    }
    return response;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const updateUserSettings = async (user_id, updatedSettingsObj) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    return mockUserSettings;

    // Asl kod:
    /*
    const response = await axiosClient.put(
      `${API_ROUTE}/${API_USER_SETTINGS_ROUTE}/${user_id}`,
      {
        user_id: user_id,
        goal_id: updatedSettingsObj.goal_id,
        intensity_id: updatedSettingsObj.intensity_id,
      }
    );
    return response;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const updateUserProgress = async (user_id, updatedProgressObj) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    return mockUserProgress;

    // Asl kod:
    /*
    const response = await axiosClient.put(
      `${API_ROUTE}/${API_USER_PROGRESS_ROUTE}/${user_id}`,
      updatedProgressObj
    );
    return response;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getUserSchedule = async (user_id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    return mockUserSchedule;

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_USER_SCHEDULE_ROUTE}/${user_id}`
    );
    return response.data.data.map((info) => info.day);
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const createUserSchedule = async (user_id, scheduleArray) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    return scheduleArray || mockUserSchedule;

    // Asl kod:
    /*
    const promises = [];
    scheduleArray.forEach(async (day) => {
      promises.push(
        axiosClient.post(`${API_ROUTE}/${API_USER_SCHEDULE_ROUTE}/${user_id}`, {
          day: day,
        })
      );
    });
    return await Promise.all(promises);
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const updateUserSchedule = async (
  user_id,
  currentScheduleArray,
  newScheduleArray
) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    return newScheduleArray || mockUserSchedule;

    // Asl kod:
    /*
    const promises = [];
    newScheduleArray.forEach(async (day) => {
      // TODO
    });
    return await Promise.all(promises);
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getUserHistory = async (user_id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const history = mockUserHistory;
    if (history.length > 1) history.sort(historyItemComparator);
    return history;

    // Asl kod:
    /*
    const programsResponse = await getUserCompletedPrograms(user_id);
    const routinesResponse = await getUserCompletedRoutines(user_id);
    const achievementsResponse = await getUserAchievements(user_id);
    const history = [
      ...programsResponse,
      ...routinesResponse,
      ...achievementsResponse,
    ];
    if (history.length > 1) history.sort(historyItemComparator);
    return history;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getUserAchievements = async (user_id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    return mockUserAchievements.map(
      (ach) =>
        new UserAchievement(ach.id, ach.name, ach.description, ach.earned_at)
    );

    // Asl kod:
    /*
    const userAchievements = [];
    const userAchievementsResponse = await axiosClient.get(
      `${API_ROUTE}/${API_USER_ACHIEVEMENT_ROUTE}/${user_id}`
    );
    if (userAchievementsResponse.status >= 400) return userAchievements;
    const achievements = await getAllAchievements();
    userAchievementsResponse.data.data.forEach((achievement) => {
      let localAchievement = achievements.find(
        (element) => element.id == achievement.achievement_id
      );
      userAchievements.push(
        new UserAchievement(
          localAchievement.id,
          localAchievement.name,
          localAchievement.description,
          achievement.earned_at
        )
      );
    });
    return userAchievements;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const addUserAchievement = async (user_id, achievement_id, earned_at) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const newAchievement = {
      id: achievement_id,
      name: `Achievement ${achievement_id}`,
      description: `Mock achievement for user ${user_id}`,
      earned_at,
    };
    mockUserAchievements.push(newAchievement);
    return newAchievement;

    // Asl kod:
    /*
    let response = await axiosClient.post(
      `${API_ROUTE}/${API_USER_ACHIEVEMENT_ROUTE}`,
      { user_id: user_id, achievement_id: achievement_id, earned_at: earned_at }
    );
    return response;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getUserAccumulatedStats = async (user_id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    return mockUserAccumulatedStats;

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_USER_PROGRESS_ROUTE}/${API_USER_ACCUMULATED_STATS_ROUTE}/${user_id}`
    );
    if (response.status >= 400) return [];
    return response.data;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const updateUserAccumulatedStats = async (user_id, date, minutes, calories) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const newStat = { date, minutes, calories };
    mockUserAccumulatedStats.push(newStat);
    return newStat;

    // Asl kod:
    /*
    let response = await axiosClient.put(
      `${API_ROUTE}/${API_USER_PROGRESS_ROUTE}/${API_USER_ACCUMULATED_STATS_ROUTE}/${user_id}`,
      { date: date, minutes: minutes, calories: calories }
    );
    return response.data;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export {
  getUserSettings,
  getUserProgress,
  createUser,
  updateUser,
  getUserHistory,
  createUserSchedule,
  updateUserSchedule,
  getUserAchievements,
  addUserAchievement,
  getUserAccumulatedStats,
  updateUserAccumulatedStats,
  updateUserProgress,
};
