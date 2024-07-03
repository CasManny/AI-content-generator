"use server";
import { connectToDatabase } from "../database/connectDB";
import { AIOutput } from "../database/model/aioutput.model";
import { handleError } from "../utils";

interface FormDataItem {
  data: string;
}
export interface ISaveTodatabase {
  formdata?: FormDataItem[];
  aiResponse: string;
  creatorEmail?: string;
  templateSlug: string;
}

export const saveToDatabase = async ({ data }: { data: ISaveTodatabase }) => {
    
  try {
    await connectToDatabase();
      const saveResponse = new AIOutput({
          formdata: data?.formdata,
          aiResponse: data?.aiResponse,
          templateSlug: data?.templateSlug,
          creatorEmail: data?.creatorEmail,
      })
      await saveResponse.save()
      console.log(data)
  } catch (error: any) {
    handleError(error.message);
  }
};
