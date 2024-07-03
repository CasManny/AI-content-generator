"use server";
import { currentUser } from "@clerk/nextjs/server";
import { connectToDatabase } from "../database/connectDB";
import { AIOutput } from "../database/model/aioutput.model";
import { handleError } from "../utils";

export const saveToDatabase = async (data: any) => {

  try {
    await connectToDatabase();
    const saveResponse = new AIOutput({
        formdata: data?.formdata,
        aiResponse: data?.aiResponse,
        templateSlug: data?.templateSlug,
        creatorEmail: data?.creatorEmail,
    })
    await saveResponse.save()
  } catch (error: any) {
    handleError(error.message);
  }
};
