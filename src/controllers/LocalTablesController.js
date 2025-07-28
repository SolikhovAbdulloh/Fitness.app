import Goal from "../models/Goal";
import Intensity from "../models/Intensity";
import Achievement from "../models/Achievement";
import ExerciseType from "../models/ExerciseType";
import MuscleGroup from "../models/MuscleGroup";
import {
  mockAchievements,
  mockExerciseTypes,
  mockGoals,
  mockIntensities,
  mockMuscleGroups,
} from "./FakeExercise";

// Mock ma'lumotlar

const getAllGoals = async () => {
  try {
    // Mock ma'lumotlar bilan ishlash
    return mockGoals.map(
      (goal) => new Goal(goal.id, goal.name, goal.description)
    );

    // Asl kod:
    /*
    const response = await axiosClient.get(`${API_ROUTE}/${API_GOALS_ROUTE}`);
    const data = await response.data.data;
    return data.map((goal) => new Goal(goal.id, goal.name, goal.description));
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getGoal = async (goal_id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const goal = mockGoals.find((g) => g.id === goal_id);
    if (!goal) {
      throw new Error(`Maqsad topilmadi: ID ${goal_id}`);
    }
    return new Goal(goal.id, goal.name, goal.description);

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_GOALS_ROUTE}/${goal_id}`
    );
    const data = await response.data.data;
    return new Goal(data.id, data.name, data.description);
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getAllIntensities = async () => {
  try {
    // Mock ma'lumotlar bilan ishlash
    return mockIntensities.map(
      (intensity) => new Intensity(intensity.id, intensity.name)
    );

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_INTENSITY_ROUTE}`
    );
    const data = await response.data.data;
    return data.map((intensity) => new Intensity(intensity.id, intensity.name));
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getIntensity = async (intensity_id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const intensity = mockIntensities.find((i) => i.id === intensity_id);
    if (!intensity) {
      throw new Error(`Intensivlik topilmadi: ID ${intensity_id}`);
    }
    return new Intensity(intensity.id, intensity.name);

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_INTENSITY_ROUTE}/${intensity_id}`
    );
    const data = await response.data.data;
    return new Intensity(data.id, data.name);
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getAllAchievements = async () => {
  try {
    // Mock ma'lumotlar bilan ishlash
    return mockAchievements.map(
      (achievement) =>
        new Achievement(
          achievement.id,
          achievement.name,
          achievement.description,
          achievement.badge_url
        )
    );

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_ACHIEVEMENT_ROUTE}`
    );
    const data = await response.data.data;
    return data.map(
      (achievement) =>
        new Achievement(
          achievement.id,
          achievement.name,
          achievement.description,
          achievement.badge_url
        )
    );
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getAchievement = async (achievement_id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const achievement = mockAchievements.find((a) => a.id === achievement_id);
    if (!achievement) {
      throw new Error(`Yutuq topilmadi: ID ${achievement_id}`);
    }
    return new Achievement(
      achievement.id,
      achievement.name,
      achievement.description,
      achievement.badge_url
    );

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_ACHIEVEMENT_ROUTE}/${achievement_id}`
    );
    const data = await response.data;
    return new Achievement(
      data.id,
      data.name,
      data.description,
      data.badge_url
    );
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getAllExerciseTypes = async () => {
  try {
    // Mock ma'lumotlar bilan ishlash
    return mockExerciseTypes.map(
      (type) => new ExerciseType(type.id, type.name, type.default_duration)
    );

    // Asl kod:
    /*
    const response = await axiosClient.get(`${API_ROUTE}/${API_TYPE_ROUTE}`);
    const data = await response.data;
    return data.map(
      (type) => new ExerciseType(type.id, type.name, type.default_duration)
    );
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getExerciseType = async (type_id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const type = mockExerciseTypes.find((t) => t.id === type_id);
    if (!type) {
      throw new Error(`Mashq turi topilmadi: ID ${type_id}`);
    }
    return new ExerciseType(type.id, type.name, type.default_duration);

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_TYPE_ROUTE}/${type_id}`
    );
    const type = await response.data.data;
    return new ExerciseType(type.id, type.name, type.default_duration);
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getAllMuscleGroups = async () => {
  try {
    // Mock ma'lumotlar bilan ishlash
    return mockMuscleGroups.map(
      (muscleGroup) => new MuscleGroup(muscleGroup.id, muscleGroup.name)
    );

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_MUSCLE_GROUPS_ROUTE}`
    );
    const data = await response.data;
    return data.data.map(
      (muscleGroup) => new MuscleGroup(muscleGroup.id, muscleGroup.name)
    );
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getMuscleGroup = async (muscle_group_id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const muscleGroup = mockMuscleGroups.find(
      (mg) => mg.id === muscle_group_id
    );
    if (!muscleGroup) {
      throw new Error(`Mushak guruhi topilmadi: ID ${muscle_group_id}`);
    }
    return new MuscleGroup(muscleGroup.id, muscleGroup.name);

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_MUSCLE_GROUPS_ROUTE}/${muscle_group_id}`
    );
    const muscleGroup = await response.data.data;
    return new MuscleGroup(muscleGroup.id, muscleGroup.name);
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export {
  getAllGoals,
  getGoal,
  getAllIntensities,
  getIntensity,
  getAllAchievements,
  getAchievement,
  getAllExerciseTypes,
  getExerciseType,
  getAllMuscleGroups,
  getMuscleGroup,
};
