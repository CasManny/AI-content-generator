"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ITemplate } from "@/types";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2Icon } from "lucide-react";
import OutputSection from "./OutputSection";
import { saveToDatabase } from "@/lib/actions/aioutput.actions";
import { chatSession } from "@/utils/AIModal";
interface props {
  templateSelected: ITemplate;
}

const FormSection = ({
  templateSelected,
  userEmail,
}: {
  templateSelected: ITemplate;
  userEmail: string;
}) => {
  const [formdata, setFormdata] = useState({});
  const router = useRouter();
  const [aiOutput, setAiOutput] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const generateAIContent = async (formdata: any) => {
    setLoading(true);
    const selectedPrompt = templateSelected?.aiPrompt;

    const finalAIPrompt = JSON.stringify(formdata) + ", " + selectedPrompt;
    const result = await chatSession.sendMessage(finalAIPrompt);
    setAiOutput(result.response.text());
    const formattedFormData = Object.entries(formdata).map(([key, value]) => {
      return { data: `${key}: ${value}` };
    });
    const output = result.response.text();

    const data: any = {
      formdata: formattedFormData,
      aiResponse: output,
      templateSlug: templateSelected?.slug,
      creatorEmail: userEmail,
    };

    console.log(data);
    await saveToDatabase(data);
    setLoading(false);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
      <div>
        <Button onClick={() => router.back()} className="my-5 w-[6rem] p-2">
          <ArrowLeft /> Back
        </Button>

        <div className="p-5 shadow-lg border rounded-lg">
          <Image
            src={templateSelected.icon}
            width={70}
            height={70}
            alt="selected template"
          />
          <h2 className="font-bold text-2xl mb-2 text-primary">
            {templateSelected.name}
          </h2>
          <p className="text-gray-500 text-sm">{templateSelected.desc}</p>

          <form onSubmit={generateAIContent}>
            {templateSelected.form?.map((item, index) => {
              return (
                <div className="mt-4" key={index}>
                  <label htmlFor="" className="font-bold">
                    {item.label}
                  </label>
                  {item.field === "input" ? (
                    <Input
                      type="text"
                      placeholder={item.label}
                      name={item.name}
                      required={item?.required}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <Textarea
                      rows={5}
                      placeholder={item.label}
                      className="resize-none"
                      name={item.name}
                      required={item?.required}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              );
            })}

            <Button
              type="submit"
              className="w-full mt-5 p-6"
              disabled={loading}
            >
              {loading && <Loader2Icon className="animate-spin" />}
              {loading ? "Generating..." : "Generate content"}
            </Button>
          </form>
        </div>
      </div>
      <div className="w-full col-span-2">
        <OutputSection aiOutput={aiOutput} />
      </div>
    </section>
  );
};

export default FormSection;
