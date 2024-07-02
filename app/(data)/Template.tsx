export const templateFormat = [
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depending on your blog information",
    category: "Blog",
    icon: "/blog_title.png",
    aiPrompt:
      "Give me 5 blog topic idea in a bullet wise only based on given niche topic and give me result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Product Description",
    desc: "An AI tool that generates product descriptions based on given product information",
    category: "E-commerce",
    icon: "/product-description.png",
    aiPrompt:
      "Write a compelling product description in a paragraph based on the provided product name and features, suitable for an e-commerce website.",
    slug: "generate-product-description",
    form: [
      {
        label: "Enter product name",
        field: "input",
        name: "product_name",
        required: true,
      },
      {
        label: "Enter product features",
        field: "textarea",
        name: "product_features",
      },
    ],
  },
  {
    name: "Social Media Post",
    desc: "An AI tool that generates social media posts based on provided content ideas",
    category: "Social Media",
    icon: "social_media_post.png",
    aiPrompt:
      "Create an engaging social media post in 150 characters or less based on the provided topic and tone.",
    slug: "generate-social-media-post",
    form: [
      {
        label: "Enter post topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Select post tone",
        field: "select",
        name: "tone",
        options: ["Casual", "Formal", "Funny", "Inspirational"],
        required: true,
      },
    ],
  },
  {
    name: "Email Subject Line",
    desc: "An AI tool that generates email subject lines based on the email content",
    category: "Email Marketing",
    icon: "/email_subject.png",
    aiPrompt:
      "Provide 5 compelling email subject lines based on the given email content and target audience.",
    slug: "generate-email-subject-line",
    form: [
      {
        label: "Enter email content",
        field: "textarea",
        name: "content",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
        required: true,
      },
    ],
  },
  {
    name: "SEO Meta Description",
    desc: "An AI tool that generates SEO meta descriptions based on provided page content",
    category: "SEO",
    icon: "/seo_meta_description.png",
    aiPrompt:
      "Write an SEO-friendly meta description in 160 characters or less based on the provided page content.",
    slug: "generate-seo-meta-description",
    form: [
      {
        label: "Enter page content",
        field: "textarea",
        name: "content",
        required: true,
      },
      {
        label: "Enter primary keyword",
        field: "input",
        name: "keyword",
        required: true,
      },
    ],
  },
  {
    name: "Video Script Outline",
    desc: "An AI tool that generates a video script outline based on the provided video idea",
    category: "Video Production",
    icon: "video_script_outline.png",
    aiPrompt:
      "Create a detailed video script outline based on the provided video idea and target audience.",
    slug: "generate-video-script-outline",
    form: [
      {
        label: "Enter video idea",
        field: "input",
        name: "idea",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
      },
    ],
  },
];
