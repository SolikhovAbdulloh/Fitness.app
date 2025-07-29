import Routine from "../models/Routine";
import Exercise from "../models/Exercise";
import RoutineHistory from "../models/RoutineHistory";
import Goal from "../models/Goal";
import axiosClient from "../utils/axiosClient";

// Mock ma'lumotlar
const mockRoutines = [
  {
    id: 1,
    duration: 30,
    program_id: 1,
    name: "Morning Routine",
    description: "A morning workout to energize your day",
    estimated_calories: 200,
    scheduled_date: "2025-07-02",
    completed: true,
    exercises: [
      {
        id: 1,
        routine_id: 1,
        name: "Push Up",
        description: "A bodyweight exercise for chest and triceps",
        order: 1,
        sets: 3,
        reps: 15,
        duration: 60,
        rest_time: 30,
        demo_url:
          "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/bodyweightsquat-1457041691.gif",
        types: [{ id: 1, name: "Strength" }],
        muscleGroups: [
          { id: 1, name: "Chest" },
          { id: 2, name: "Triceps" },
        ],
      },
      {
        id: 2,
        routine_id: 1,
        name: "Squat",
        description: "A lower body exercise for quads and glutes",
        order: 2,
        sets: 3,
        reps: 12,
        duration: 60,
        rest_time: 30,
        demo_url:
          "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/plankrollingsideplank-1472131261.gif",
        types: [{ id: 2, name: "Endurance" }],
        muscleGroups: [
          { id: 3, name: "Quads" },
          { id: 4, name: "Glutes" },
        ],
      },
    ],
    goals: [{ id: 1, name: "Build Muscle" }],
    completed_at: "2025-07-02",
    recording_url: "http://example.com/recording1.mp4",
    calories: 210,
    score: 95,
  },
  {
    id: 2,
    duration: 45,
    program_id: 1,
    name: "Evening Routine",
    description: "An evening workout for strength and flexibility",
    estimated_calories: 300,
    scheduled_date: "2025-07-03",
    completed: false,
    exercises: [
      {
        id: 3,
        routine_id: 2,
        name: "Deadlift",
        description: "A compound exercise for full body strength",
        order: 1,
        sets: 3,
        reps: 10,
        duration: 90,
        rest_time: 60,
        demo_url:
          "https://i.pinimg.com/originals/ef/c2/63/efc2639d761621ea2e9646a8096958e3.gif",
        types: [{ id: 1, name: "Strength" }],
        muscleGroups: [{ id: 5, name: "Back" }],
      },
    ],
    goals: [{ id: 2, name: "Improve Stamina" }],
    completed_at: null,
    recording_url: null,
    calories: null,
    score: null,
  },
];

const getRoutine = async (routine_id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const data = mockRoutines.find((routine) => routine.id == routine_id);
    if (!data) {
      throw new Error(`Rutin topilmadi: ID ${routine_id}`);
    }
    const routine = new Routine(
      data.id,
      data.duration,
      data.program_id,
      data.name,
      data.description,
      data.estimated_calories,
      data.scheduled_date,
      data.completed,
      data.exercises,
      data.completed_at,
      data.recording_url,
      data.goals,
      data.calories,
      data.score
    );
    return routine;

    // Asl kod:
    /*
    const response = await axiosClient.get(`${API_ROUTE}/${routine_id}`);
    const data = await response.data.data;
    const routine = new Routine(
      data.id,
      data.duration,
      undefined,
      data.name,
      data.description,
      data.estimated_calories,
      data.scheduled_date,
      data.completed
    );
    return routine;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getRoutinesFromProgram = async (program_id, getExercises = true) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const routines = mockRoutines
      .filter((routine) => routine.program_id === program_id)
      .map(
        (routine) =>
          new Routine(
            routine.id,
            routine.duration,
            routine.program_id,
            routine.name,
            routine.description,
            routine.estimated_calories,
            routine.scheduled_date,
            routine.completed,
            getExercises ? routine.exercises : [],
            routine.completed_at,
            routine.recording_url,
            routine.goals,
            routine.calories,
            routine.score
          )
      );
    return routines;

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_PROGRAM_ROUTINE_ROUTE}/${program_id}`
    );
    const data = await response.data.data;
    const routines = await data.map(
      (routine) =>
        new Routine(
          routine.id,
          routine.duration,
          routine.program_id,
          routine.name,
          routine.description,
          routine.estimated_calories,
          routine.scheduled_date,
          routine.completed
        )
    );
    if (getExercises && routines && routines.length > 0) {
      for (const routine of routines) {
        if (routine) {
          const routineExercises = await getExercisesFromRoutine(routine.id);
          routineExercises.forEach((exercise) => routine.addExercise(exercise));
        }
      }
    }
    return routines;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getUserCompletedRoutines = async (user_id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const routines = mockRoutines
      .filter((routine) => routine.completed)
      .map(
        (routine) =>
          new Routine(
            routine.id,
            routine.duration,
            routine.program_id,
            routine.name,
            routine.description,
            routine.estimated_calories,
            routine.scheduled_date,
            routine.completed,
            routine.exercises,
            routine.completed_at,
            routine.recording_url,
            routine.goals,
            routine.calories,
            routine.score
          )
      );
    return routines;

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_ROUTINE_HISTORY_ROUTE}/${user_id}`
    );
    if (response.status == 404) return [];
    const data = await response.data.data;
    const routines = [];
    for (let element of data) {
      const routine = await getRoutine(element.routine_id);
      routines.push(
        new Routine(
          routine.id,
          routine.duration,
          routine.program_id,
          routine.name,
          routine.description,
          routine.estimated_calories,
          routine.scheduled_date,
          routine.completed,
          element.completed_at,
          element.recording_url,
          undefined,
          undefined,
          element.calories,
          element.score
        )
      );
    }
    return routines;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getAllPresetRoutines = async () => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const routines = mockRoutines.map(
      (routine) =>
        new Routine(
          routine.id,
          routine.duration,
          routine.program_id,
          routine.name,
          routine.description,
          routine.estimated_calories,
          routine.scheduled_date,
          routine.completed,
          routine.exercises,
          routine.completed_at,
          routine.recording_url,
          routine.goals
        )
    );
    return routines;

    // Asl kod:
    /*
    const response = await axiosClient.get(`${API_ROUTE}/presets`);
    const data = await response.data;
    const routines = data.data.rows.map(
      (routine) =>
        new Routine(
          routine.id,
          routine.duration,
          routine.program_id,
          routine.name,
          routine.description,
          routine.estimated_calories,
          routine.scheduled_date,
          routine.completed,
          []
        )
    );
    if (routines && routines.length > 0) {
      for (const routine of routines) {
        const routineExercises = await getExercisesFromRoutine(routine.id);
        routine.exercises = routineExercises;
        const routineGoals = await getRoutineGoals(routine.id);
        routine.goals = routineGoals;
      }
    }
    return routines;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const createRoutine = async (routineObj) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const routine = new Routine(
      routineObj.id || mockRoutines.length + 1, // Oddiy ID generatsiyasi
      routineObj.duration,
      routineObj.program_id,
      routineObj.name,
      routineObj.description,
      routineObj.estimated_calories,
      routineObj.scheduled_date,
      routineObj.completed,
      routineObj.exercises || [],
      null,
      null,
      routineObj.goals || []
    );
    mockRoutines.push({
      id: routine.id,
      duration: routine.duration,
      program_id: routine.program_id,
      name: routine.name,
      description: routine.description,
      estimated_calories: routine.estimated_calories,
      scheduled_date: routine.scheduled_date,
      completed: routine.completed,
      exercises: routine.exercises,
      goals: routine.goals,
    });
    return routine;

    // Asl kod:
    /*
    const routine = new Routine(
      routineObj.id,
      routineObj.duration,
      routineObj.program_id,
      routineObj.name,
      routineObj.description,
      routineObj.estimated_calories,
      routineObj.scheduled_date,
      routineObj.completed
    );
    await axiosClient.post(`${API_ROUTE}`, routine);
    if (response.status == 201) {
      for (const exercise of routineObj.exercises) {
        const response = await createRoutineExercise(exercise);
        if (response.status === 201) {
          routine.exercises.push(response.data);
        }
      }
    }
    return routine;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getExercisesFromRoutine = async (routine_id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const routine = mockRoutines.find((r) => r.id == routine_id);
    if (!routine) {
      throw new Error(`Rutin topilmadi: ID ${routine_id}`);
    }
    return routine.exercises.map(
      (exercise) =>
        new Exercise(
          exercise.id,
          exercise.routine_id,
          exercise.name,
          exercise.description,
          exercise.order,
          exercise.sets,
          exercise.reps,
          exercise.duration,
          exercise.rest_time,
          exercise.demo_url,
          exercise.types,
          exercise.muscleGroups
        )
    );

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_ROUTINE_EXERCISE_ROUTE}/${routine_id}`
    );
    const data = await response.data.data;
    const routineExercises = await data.map(
      (exercise) =>
        new Exercise(
          exercise.exercise_id,
          exercise.routine_id,
          exercise.name,
          exercise.description,
          exercise.order,
          exercise.sets,
          exercise.reps,
          exercise.duration,
          exercise.rest_time,
          exercise.demo_url,
          exercise.types,
          exercise.muscleGroups
        )
    );
    const exerciseDetails = await Promise.all(
      routineExercises.map(async (exercise) => {
        const detailedExercise = await getExercise(exercise.id);
        return {
          ...exercise,
          name: detailedExercise.name,
          description: detailedExercise.description,
          demo_url: detailedExercise.demo_url,
          muscleGroups: detailedExercise.muscleGroups,
        };
      })
    );
    return exerciseDetails;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const createRoutineExercise = async (exerciseObj) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const routineExercise = {
      exercise_id: exerciseObj.exercise_id,
      routine_id: exerciseObj.routine_id,
      order: exerciseObj.order,
      sets: exerciseObj.sets,
      reps: exerciseObj.reps,
      duration: exerciseObj.duration,
      rest_time: exerciseObj.restPeriod,
      name: exerciseObj.name || "Mock Exercise",
      description: exerciseObj.description || "Mock description",
      demo_url: exerciseObj.demo_url || "http://example.com/mock.mp4",
      types: exerciseObj.types || [],
      muscleGroups: exerciseObj.muscleGroups || [],
    };
    const routine = mockRoutines.find(
      (r) => r.id === routineExercise.routine_id
    );
    if (routine) {
      routine.exercises.push(routineExercise);
    }
    return routineExercise;

    // Asl kod:
    /*
    const routineExercise = {
      exercise_id: exerciseObj.exercise_id,
      routine_id: exerciseObj.routine_id,
      order: exerciseObj.order,
      sets: exerciseObj.sets,
      reps: exerciseObj.reps,
      duration: exerciseObj.duration,
      rest_time: exerciseObj.restPeriod,
    };
    return await axiosClient.post(
      `${API_ROUTE}/${API_ROUTINE_EXERCISE_ROUTE}`,
      routineExercise
    );
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getRoutineHistory = async (user_id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const routineHistories = mockRoutines
      .filter((routine) => routine.completed_at)
      .map(
        (routine) =>
          new RoutineHistory(
            user_id,
            routine.id,
            routine.completed_at,
            routine.recording_url,
            routine.score,
            routine.calories
          )
      );
    return routineHistories;

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_ROUTINE_HISTORY_ROUTE}/${user_id}`
    );
    const data = await response.data.data;
    const routineHistories = await data.map(
      (routineHistory) =>
        new RoutineHistory(
          routineHistory.user_id,
          routineHistory.routine_id,
          routineHistory.completed_at,
          routineHistory.recording_URL,
          routineHistory.score,
          routineHistory.calories
        )
    );
    return routineHistories;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getRoutineGoals = async (routine_id) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const routine = mockRoutines.find((r) => r.id === routine_id);
    if (!routine) {
      throw new Error(`Rutin topilmadi: ID ${routine_id}`);
    }
    return routine.goals.map((goal) => new Goal(goal.id, goal.name));

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/${API_ROUTINE_GOALS_ROUTE}/${routine_id}`
    );
    const data = await response.data.data;
    const routineGoals = await data.map((goal) => new Goal(goal.goal_id));
    return routineGoals;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export {
  getRoutine,
  getRoutinesFromProgram,
  getUserCompletedRoutines,
  getAllPresetRoutines,
  createRoutine,
  createRoutineExercise,
  getExercisesFromRoutine,
  getRoutineHistory,
  getRoutineGoals,
};
