// import axiosClient from "../utils/axiosClient";
import Exercise from "../models/Exercise";
// import {
//   getExerciseType,
//   getGoal,
//   getMuscleGroup,
// } from "./LocalTablesController";
import ExerciseType from "../models/ExerciseType";
import Goal from "../models/Goal";
import MuscleGroup from "../models/MuscleGroup";
import { mockExercises } from "./FakeExercise";

// const API_ROUTE = "exercises";
// const API_EXERCISE_TYPE_ROUTE = "types";
// const API_EXERCISE_GOALS_ROUTE = "goals";
// const API_EXERCISE_MUSCLE_GROUPS_ROUTE = "muscleGroups";

const getAllExercises = async (offset, limit) => {
  const exercises = mockExercises.slice(offset, offset + limit).map((item) => {
    const exercise = new Exercise();
    exercise.id = item.id;
    exercise.name = item.name;
    exercise.description = item.description;
    exercise.demo_url = item.demo_url;
    exercise.video_tutorial_url = item.video_tutorial_url;
    exercise.types = item.types;
    exercise.goals = item.goals;
    exercise.muscleGroups = item.muscleGroups;
    exercise.ImgId_By_Youtube = item.ImgId_By_Youtube;
    return exercise;
  });
  return exercises;
  // const response = await axiosClient.get(
  //   `${API_ROUTE}/offset=${offset}&limit=${limit}`
  // );
  // const exercises = await response.data.data.map((item) => {
  //   const exercise = new Exercise();
  //   exercise.id = item.id;
  //   exercise.name = item.name;
  //   exercise.description = item.description;
  //   exercise.demo_url = item.demo_url;
  //   exercise.video_tutorial_url = item.video_tutorial_url;
  //   exercise.types = [];
  //   exercise.goals = [];
  //   exercise.muscleGroups = [];
  //   return exercise;
  // });
  // for (let exercise of exercises) {
  //   const exerciseTypes = await getExerciseTypes(exercise.id, true);
  //   exercise.types = exerciseTypes;
  //   const exerciseGoals = await getExerciseGoals(exercise.id, false);
  //   exercise.goals = exerciseGoals;
  //   const exerciseMuscleGroups = await getExerciseMuscleGroups(
  //     exercise.id,
  //     false
  //   );
  //   exercise.muscleGroups = exerciseMuscleGroups;
  // }
  // return exercises;
};
const getExercisesCount = async () => {
  // const response = await axiosClient.get(`${API_ROUTE}/count`);
  // return response;
  return { data: { count: mockExercises.length } };
};
const getExercisesThumbnails = async () => {
  return mockExercises.map((item) => {
    const exercise = new Exercise();
    exercise.id = item.id;
    exercise.name = item.name;
    exercise.description = item.description;
    exercise.demo_url = item.demo_url;
    exercise.video_tutorial_url = item.video_tutorial_url;
    exercise.types = item.types;
    exercise.goals = item.goals;
    exercise.muscleGroups = item.muscleGroups;
    return exercise;
  });

  // const response = await axiosClient.get(`${API_ROUTE}`);
  // return await response.data.data.map((item) => {
  //   const exercise = new Exercise();
  //   exercise.id = item.id;
  //   exercise.name = item.name;
  //   exercise.description = item.description;
  //   exercise.demo_url = item.demo_url;
  //   exercise.video_tutorial_url = item.video_tutorial_url;
  //   exercise.types = [];
  //   exercise.goals = [];
  //   exercise.muscleGroups = [];
  //   return exercise;
  // });
};
const getExercise = async (id, allInfo = true) => {
  try {
    const data = mockExercises.find((exercise) => exercise.id == id);

    if (!data) {
      throw new Error(`Mashq topilmadi: ID ${id}`);
    }
    const exercise = new Exercise();
    exercise.id = data.id;
    exercise.name = data.name;
    exercise.description = data.description;
    exercise.demo_url = data.demo_url;
    exercise.types = data.types;
    exercise.goals = data.goals;
    exercise.muscleGroups = data.muscleGroups;
    exercise.video_tutorial_url = data.video_tutorial_url;
    exercise.execution_steps = data.execution_steps;
    return exercise;
    // const response = await axiosClient.get(`${API_ROUTE}/${id}`);
    // const data = await response.data.data;
    // const exercise = new Exercise();
    // exercise.id = data.id;
    // exercise.name = data.name;
    // exercise.description = data.description;
    // exercise.demo_url = data.demo_url;
    // exercise.types = await getExerciseTypes(exercise.id, allInfo);
    // exercise.goals = await getExerciseGoals(exercise.id, allInfo);
    // exercise.muscleGroups = await getExerciseMuscleGroups(exercise.id, allInfo);
    // exercise.video_tutorial_url = data.video_tutorial_url;
    // exercise.execution_steps = data.execution_steps;
    // return exercise;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
const getExerciseTypes = async (id, allInfo = true) => {
  try {
    const exercise = mockExercises.find((ex) => ex.id === id);
    if (!exercise) {
      return [];
    }
    return exercise.types.map((type) =>
      allInfo ? new ExerciseType(type.id, type.name) : new ExerciseType(type.id)
    );
    // const response = await axiosClient.get(
    //   `${API_ROUTE}/${API_EXERCISE_TYPE_ROUTE}/${id}`
    // );
    // const data = await response.data.data;
    // const typeArray = [];

    // for (let exerciseType of data) {
    //   const type = allInfo
    //     ? await getExerciseType(exerciseType.type_id)
    //     : new ExerciseType(exerciseType.type_id);
    //   typeArray.push(type);
    // }
    // return typeArray;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
const getExerciseGoals = async (id, allInfo = true) => {
  try {
    const exercise = mockExercises.find((ex) => ex.id === id);
    if (!exercise) {
      return [];
    }
    return exercise.goals.map((goal) =>
      allInfo ? new Goal(goal.id, goal.name) : new Goal(goal.id)
    );
    // const response = await axiosClient.get(
    //   `${API_ROUTE}/${API_EXERCISE_GOALS_ROUTE}/${id}`
    // );
    // const data = await response.data.data;
    // const goalsArray = [];

    // for (let exerciseGoal of data) {
    //   const goal = allInfo
    //     ? await getGoal(exerciseGoal.goal_id)
    //     : new Goal(exerciseGoal.goal_id);
    //   goalsArray.push(goal);
    // }
    // return goalsArray;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
const getExerciseMuscleGroups = async (id, allInfo = true) => {
  try {
    const exercise = mockExercises.find((ex) => ex.id === id);
    if (!exercise) {
      return [];
    }
    return exercise.muscleGroups.map((mg) =>
      allInfo ? new MuscleGroup(mg.id, mg.name) : new MuscleGroup(mg.id)
    );
    // const response = await axiosClient.get(
    //   `${API_ROUTE}/${API_EXERCISE_MUSCLE_GROUPS_ROUTE}/${id}`
    // );
    // const data = await response.data.data;
    // const muscleGroupsArray = [];

    // for (let item of data) {
    //   const muscleGroup = allInfo
    //     ? await getMuscleGroup(item.muscle_group_id)
    //     : new MuscleGroup(item.muscle_group_id);
    //   muscleGroupsArray.push(muscleGroup);
    // }
    // return muscleGroupsArray;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
export {
  getAllExercises,
  getExercisesCount,
  getExercisesThumbnails,
  getExercise,
  getExerciseTypes,
  getExerciseGoals,
  getExerciseMuscleGroups,
};
