"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ITemplate } from "@/types";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2Icon } from "lucide-react";
interface props {
  templateSelected: ITemplate;
}

const FormSection = ({
  templateSelected,
  userFormInput,
  loading,
}: {
  templateSelected: ITemplate;
  userFormInput: any;
  loading?: boolean;
}) => {
  const [formdata, setFormdata] = useState({});
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormInput(formdata);
  };
  return (
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

        <form onSubmit={onSubmit}>
          {templateSelected.form?.map((item, index) => {
            return (
              <div className="mt-4">
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

          <Button type="submit" className="w-full mt-5 p-6" disabled={loading}>
            {loading && <Loader2Icon className="animate-spin" />}
            Generate Content
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
