"use client"
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { ITemplate } from "@/types";
import { templateFormat } from "@/app/(data)/Template";

const CreatingContentPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const templateSelected: ITemplate | any = templateFormat.find(
    (item) => item.slug === slug
  );
    
    const generateAIContent = (formdata:any) => {
        const selectedPrompt = templateSelected?.aiPrompt
        console.log(selectedPrompt)
        console.log(formdata);
        
    }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
      <FormSection templateSelected={templateSelected} userFormInput={(v: any) => generateAIContent(v)} />
      <div className="col-span-2">
        <OutputSection />
      </div>
    </div>
  );
};

export default CreatingContentPage;
