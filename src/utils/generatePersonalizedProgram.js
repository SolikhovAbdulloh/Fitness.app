import { createProgramRoutine } from "../controllers/ProgramController";
import { createRoutineExercise } from "../controllers/RoutineController";

// Mock ma'lumotlar ombori (ProgramController.js va RoutineController.js bilan moslashtirilgan)
const mockPrograms = [
  {
    id: 1,
    created_at: "2025-07-01",
    completed_at: null,
    duration: 30,
    user_id: "user_id_123",
    name: "Beginner Program",
    description: "A 30-day program for beginners",
    routines: [],
  },
];

const mockRoutines = [
  {
    id: 1,
    duration: 30,
    program_id: 1,
    name: "Morning Routine",
    description: "A morning workout to energize your day",
    estimated_calories: 200,
    scheduled_date: "2025-07-02",
    completed: false,
    exercises: [],
    goals: [{ id: 1, name: "Build Muscle" }],
  },
];

// Mock OpenAI javobi
const mockOpenAIResponse = {
  data: {
    data: {
      choices: [
        {
          message: {
            content: JSON.stringify({
              program: {
                name: "Personalized Program",
                description: "A custom program based on user input",
                duration: 45,
              },
              routine: [
                {
                  name: "Custom Routine",
                  description: "A custom routine for the program",
                  duration: 40,
                  estimated_calories: 250,
                  scheduled_date: "2025-07-22",
                  completed: false,
                },
              ],
              program_routine: [
                {
                  program_id: null, // Dastur yaratilgandan keyin o'rnatiladi
                  routine_id: null, // Rutin yaratilgandan keyin o'rnatiladi
                  scheduled_date: "2025-07-22",
                  completed: false,
                },
              ],
              routine_exercise: [
                {
                  exercise_id: 1,
                  routine_id: null, // Rutin yaratilgandan keyin o'rnatiladi
                  order: 1,
                  sets: 3,
                  reps: 12,
                  rest_time: 30,
                },
              ],
            }),
          },
        },
      ],
    },
  },
};

export const generatePersonalizedProgram = async (userId, prompt) => {
  if (!prompt) return;

  try {
    // Mock OpenAI javobini olish
    const response_openai = mockOpenAIResponse;
    const parsedContent = JSON.parse(
      response_openai.data.data.choices[0].message.content
    );

    // Dastur ma'lumotlarini qo'shish (mock)
    const newProgram = {
      id: mockPrograms.length + 1,
      user_id: userId,
      name: parsedContent.program.name,
      description: parsedContent.program.description,
      duration: parsedContent.program.duration,
      created_at: new Date().toISOString(),
      completed_at: null,
      routines: [],
    };
    mockPrograms.push(newProgram);

    // Rutin ma'lumotlarini qo'shish (mock)
    const newRoutines = parsedContent.routine.map((routine_item, index) => {
      const newRoutine = {
        id: mockRoutines.length + 1 + index,
        duration: routine_item.duration,
        program_id: newProgram.id,
        name: routine_item.name,
        description: routine_item.description,
        estimated_calories: routine_item.estimated_calories,
        scheduled_date: routine_item.scheduled_date,
        completed: routine_item.completed,
        exercises: [],
        goals: [], // Agar kerak bo'lsa, maqsadlarni qo'shing
      };
      mockRoutines.push(newRoutine);
      return newRoutine;
    });

    // Dastur-rutin bog'lanishlarini qo'shish (mock)
    await Promise.all(
      parsedContent.program_routine.map(async (program_routine_item) => {
        const newProgramRoutine = {
          program_id: newProgram.id,
          routine_id: newRoutines[0].id, // Soddaligi uchun bitta rutin qabul qilinadi
          scheduled_date: program_routine_item.scheduled_date,
          completed: program_routine_item.completed,
        };
        await createProgramRoutine(
          newProgramRoutine.program_id,
          newProgramRoutine.routine_id,
          newProgramRoutine.scheduled_date,
          newProgramRoutine.completed
        );
      })
    );

    // Rutin-mashq bog'lanishlarini qo'shish (mock)
    await Promise.all(
      parsedContent.routine_exercise.map(async (routine_exercise_item) => {
        const newRoutineExercise = {
          exercise_id: routine_exercise_item.exercise_id,
          routine_id: newRoutines[0].id, // Soddaligi uchun bitta rutin qabul qilinadi
          order: routine_exercise_item.order,
          sets: routine_exercise_item.sets,
          reps: routine_exercise_item.reps,
          duration: routine_exercise_item.duration || 0,
          rest_time: routine_exercise_item.rest_time,
          name: "Mock Exercise", // Mashq uchun soxta ma'lumot
          description: "Mock description",
          demo_url: "http://example.com/mock.mp4",
          types: [],
          muscleGroups: [],
        };
        await createRoutineExercise(newRoutineExercise);
      })
    );

    return newProgram; // Yaratilgan dasturni qaytarish

    // Asl axiosClient kodi:
    /*
    const response_openai = await axiosClient.post(`openai/`, {
      prompt: prompt,
    });
    if (Number(response_openai.status) !== 200) {
      throw new Error("Failed to get OpenAI response");
    }
    const parsedContent = JSON.parse(
      response_openai.data.data.choices[0].message.content
    );
    const response_program = await axiosClient.post("programs/", {
      ...parsedContent.program,
      user_id: userId,
    });
    if (Number(response_program.status) !== 201) {
      throw new Error("Failed to insert program info");
    }
    for (const routine_item of parsedContent.routine) {
      const response_routine = await axiosClient.post(
        "routines/",
        routine_item
      );
      if (Number(response_routine.status) !== 201) {
        throw new Error("Failed to insert routine info");
      }
    }
    await Promise.all(
      parsedContent.program_routine.map(async (program_routine_item) => {
        const response_program_routine = await createProgramRoutine(
          program_routine_item.program_id,
          program_routine_item.routine_id,
          program_routine_item.scheduled_date,
          program_routine_item.completed
        );
        if (
          response_program_routine.status !== 201 &&
          response_program_routine.status !== 200
        ) {
          throw new Error("Failed to insert program_routine info");
        }
      })
    );
    await Promise.all(
      parsedContent.routine_exercise.map(async (routine_exercise_item) => {
        const response_routine_exercise = await createRoutineExercise({
          exercise_id: routine_exercise_item.exercise_id,
          routine_id: routine_exercise_item.routine_id,
          order: routine_exercise_item.order,
          sets: routine_exercise_item.sets,
          reps: routine_exercise_item.reps,
          duration: 0,
          rest_time: routine_exercise_item.rest_time,
        });
        if (
          response_routine_exercise.status !== 201 &&
          response_routine_exercise.status !== 200
        ) {
          throw new Error("Failed to insert routine_exercise info");
        }
      })
    );
    */
  } catch (error) {
    console.error("Shaxsiy dastur yaratishda xato:", error);
    throw error;
  }
};
