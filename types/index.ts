// export interface ITemplate {
//   name: string;
//   desc: string;
//   icon: string;
//   category: string;
//   slog: string;
//   aiPrompt: string;
//   form?: ITemplateForm[];
// }

// export interface ITemplateForm {
//     label: string;
//     field: string;
//     name: string;
//     require?: boolean;
// }

interface FormField {
  label: string;
  field: "input" | "textarea" | "select";
  name: string;
  required?: boolean;
  options?: string[]; // Optional field for 'select' type to specify available options
}

export interface ITemplate {
  name: string;
  desc: string;
  category: string;
  icon: string; // Assuming this is a URL or a path to an icon, you might want to use a more specific type if necessary
  aiPrompt: string;
  slug: string;
  form: FormField[];
}