import { Program } from "../models/Program";

// Mock ma'lumotlar
const mockPrograms = [
  {
    id: 1,
    created_at: "2025-07-01",
    completed_at: "2025-07-10",
    duration: 30,
    user_id: "user_id_123",
    name: "Beginner Program",
    description: "A 30-day program for beginners",
    routines: [
      {
        id: 1,
        name: "Morning Routine",
        scheduled_date: "2025-07-02",
        completed: true,
        exercises: [
          { id: 1, name: "Push Up" },
          { id: 2, name: "Squat" },
        ],
      },
    ],
  },
  {
    id: 2,
    created_at: "2025-07-05",
    completed_at: null,
    duration: 45,
    user_id: "user_id_124",
    name: "Advanced Program",
    description: "A 45-day program for advanced users",
    routines: [
      {
        id: 1,
        name: "Morning Routine",
        scheduled_date: "2025-07-02",
        completed: true,
        exercises: [
          { id: 1, name: "Push Up" },
          { id: 2, name: "Squat" },
        ],
      },
    ],
  },
];

const getProgram = async (
  id,
  getRoutines = true,
  getRoutineExercises = true
) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const data = mockPrograms.find((program) => program.id === id);
    if (!data) {
      throw new Error(`Dastur topilmadi: ID ${id}`);
    }
    const program = new Program(
      data.id,
      data.created_at,
      data.created_at,
      data.duration,
      data.user_id,
      data.name,
      data.description
    );
    if (getRoutines && data.routines) {
      data.routines.forEach((routine) => program.addRoutine(routine));
    }
    return program;

    // Asl kod:
    /*
    const response = await axiosClient.get(`${API_ROUTE}/${id}`);
    const data = await response.data;
    const program = new Program(
      data.id,
      data.created_at,
      data.completed_at,
      data.duration,
      data.user_id,
      data.name,
      data.description
    );
    if (getRoutines) {
      const programRoutines = await getRoutinesFromProgram(
        program.id,
        getRoutineExercises
      );
      programRoutines.forEach((routine) => program.addRoutine(routine));
    }
    return program;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getAllUserPrograms = async (
  user_id,
  getRoutines = true,
  getRoutineExercises = true
) => {

  try {
    if (!user_id) throw new Error("user id is null");
    // Mock ma'lumotlar bilan ishlash
    const programs = mockPrograms
      .filter((program) => program.user_id == user_id)
      .map(
        (program) =>
          new Program(
            program.id,
            program.created_at,
            program.completed_at,
            program.duration,
            program.user_id,
            program.name,
            program.description
          )
      );
    if (getRoutines) {
      for (const program of programs) {
        const programRoutines = mockPrograms.find(
          (p) => p.id === program.id
        ).routines;
        if (programRoutines) {
          programRoutines.forEach((routine) => program.addRoutine(routine));
        }
      }
    }
    return programs;

    // Asl kod:
    /*
    const response = await axiosClient.get(`${API_ROUTE}/user/${user_id}`);
    const data = await response.data;
    const programs = data.data.rows.map(
      (program) =>
        new Program(
          program.id,
          program.created_at,
          program.completed_at,
          program.duration,
          program.user_id,
          program.name,
          program.description
        )
    );
    if (getRoutines) {
      for (const program of programs) {
        const programRoutines = await getRoutinesFromProgram(
          program.id,
          getRoutineExercises
        );
        if (programRoutines) {
          programRoutines.forEach((routine) => program.addRoutine(routine));
        }
      }
    }
    return programs;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getUserCompletedPrograms = async (
  user_id,
  getRoutines = true,
  getRoutineExercises = true
) => {
  try {
    if (!user_id) throw new Error("user id is null");
    // Mock ma'lumotlar bilan ishlash
    const programs = mockPrograms
      .filter((program) => program.user_id === user_id && program.completed_at)
      .map(
        (program) =>
          new Program(
            program.id,
            program.created_at,
            program.completed_at,
            program.duration,
            program.user_id,
            program.name,
            program.description,
            program.completed_at
          )
      );
    if (getRoutines) {
      for (const program of programs) {
        const programRoutines = mockPrograms.find(
          (p) => p.id === program.id
        ).routines;
        if (programRoutines) {
          programRoutines.forEach((routine) => program.addRoutine(routine));
        }
      }
    }
    return programs;

    // Asl kod:
    /*
    const response = await axiosClient.get(
      `${API_ROUTE}/user/${user_id}/completed`
    );
    if (response.status == 404) return [];
    const data = await response.data.data;
    const programs =
      data && data.length > 0
        ? data.map(
            (program) =>
              new Program(
                program.id,
                program.created_at,
                program.completed_at,
                program.duration,
                program.user_id,
                program.name,
                program.description,
                program.completed_at
              )
          )
        : [];
    if (getRoutines) {
      if (programs.length > 0) {
        for (const program of programs) {
          const programRoutines = await getRoutinesFromProgram(
            program.id,
            getRoutineExercises
          );
          if (programRoutines) {
            programRoutines.forEach((routine) => program.addRoutine(routine));
          }
        }
      }
    }
    return programs;
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const createProgram = async (user_id, generatedProgramObj) => {
  try {
    if (!user_id) throw new Error("User ID is null");
    // Mock ma'lumotlar bilan ishlash
    const newProgram = {
      id: mockPrograms.length + 1, // Oddiy ID generatsiyasi
      user_id: user_id,
      duration: generatedProgramObj.duration,
      name: generatedProgramObj.name,
      description: generatedProgramObj.description,
      created_at: new Date().toISOString(),
      completed_at: null,
      routines: [],
    };
    mockPrograms.push(newProgram);
    return newProgram;

    // Asl kod:
    /*
    const program = {
      id: null,
      user_id: user_id,
      duration: generatedProgramObj.duration,
      name: generatedProgramObj.name,
      description: generatedProgramObj.description,
    };
    await axiosClient.post(`${API_ROUTE}`, program);
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const createProgramRoutine = async (
  program_id,
  routine_id,
  scheduled_date,
  completed
) => {
  try {
    // Mock ma'lumotlar bilan ishlash
    const programRoutine = {
      program_id: program_id,
      routine_id: routine_id,
      scheduled_date: scheduled_date,
      completed: completed,
    };
    const program = mockPrograms.find((p) => p.id === program_id);
    if (program) {
      program.routines.push(programRoutine);
    }
    return programRoutine;

    // Asl kod:
    /*
    const programRoutine = {
      program_id: program_id,
      routine_id: routine_id,
      scheduled_date: scheduled_date,
      completed: completed,
    };
    return await axiosClient.post(
      `${API_ROUTE}/${API_PROGRAM_ROUTINE_ROUTE}`,
      programRoutine
    );
    */
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export {
  getProgram,
  getAllUserPrograms,
  getUserCompletedPrograms,
  createProgram,
  createProgramRoutine,
};
