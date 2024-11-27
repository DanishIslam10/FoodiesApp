'use server'

import saveMeal from "./meals"

export async function createMeal(data) {
    const { creator, creator_email, title, summary, instructions, image } = data;
    const requiredValues = { creator, creator_email, title, summary, instructions, image };

    // Validate required fields
    for (const [key, value] of Object.entries(requiredValues)) {
        if (!value) {
            return {
                success: false,
                message: `${key} is required.`,
            };
        }
    }

    try {
        // Save the meal and return success
        await saveMeal(data);
        return {
            success: true,
            message: "Meal saved successfully.",
        };
    } catch (error) {
        // Handle any errors from saveMeal
        return {
            success: false,
            message: "Failed to save meal.",
            error: error.message,
        };
    }
}
