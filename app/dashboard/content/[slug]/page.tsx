"use client";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { ITemplate } from "@/types";
import { templateFormat } from "@/app/(data)/Template";
import { useState } from "react";
import { chatSession } from "@/utils/AIModal";
import { saveToDatabase } from "@/lib/actions/aioutput.actions";

const CreatingContentPage = ({ params }: { params: { slug: string } }) => {
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>("")
  const { slug } = params;
  const templateSelected: ITemplate | any = templateFormat.find(
    (item) => item.slug === slug
  );

  const generateAIContent = async (formdata: any) => {
    setLoading(true);
    const selectedPrompt = templateSelected?.aiPrompt;

    const finalAIPrompt = JSON.stringify(formdata) + ", " + selectedPrompt;
    const result = await chatSession.sendMessage(finalAIPrompt);
    setAiOutput(result.response.text());
   const formattedFormData = Object.entries(formdata).map(([key, value]) => {
     return { data: `${key}: ${value}` };
   });
    const output = result.response.text()
    
    const data = {
      formdata: formattedFormData,
      aiResponse: output,
      templateSlug: templateSelected?.slug,
      creatorEmail: "casmannydev@gmail.com",
    };

    console.log(data)
    await saveToDatabase(data);
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
      <FormSection
        templateSelected={templateSelected}
        userFormInput={(v: any) => generateAIContent(v)}
        loading={loading}
      />
      <div className="col-span-2">
        <OutputSection aiOutput={aiOutput} />
      </div>
    </div>
  );
};

export default CreatingContentPage;
