import FormSection from "../_components/FormSection";
import { ITemplate } from "@/types";
import { templateFormat } from "@/app/(data)/Template";
import { currentUser } from "@clerk/nextjs/server";

const CreatingContentPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const templateSelected: ITemplate | any = templateFormat.find(
    (item) => item.slug === slug
  );
  const user = await currentUser()
  const userEmail = user?.emailAddresses[0].emailAddress
  

 

  return (
    <FormSection templateSelected={templateSelected} userEmail={userEmail!}  />
  );
};

export default CreatingContentPage;
