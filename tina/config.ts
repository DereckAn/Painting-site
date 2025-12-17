import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // ============================================
      // SITE SETTINGS COLLECTION
      // ============================================
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "companyInfo",
            label: "Company Information",
            fields: [
              {
                type: "string",
                name: "name",
                label: "Company Name",
                required: true,
              },
              {
                type: "string",
                name: "tagline",
                label: "Tagline",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "email",
                label: "Email",
              },
              {
                type: "string",
                name: "phone",
                label: "Phone",
              },
              {
                type: "object",
                name: "address",
                label: "Address",
                fields: [
                  { type: "string", name: "street", label: "Street" },
                  { type: "string", name: "city", label: "City" },
                  { type: "string", name: "state", label: "State" },
                  { type: "string", name: "zipCode", label: "ZIP Code" },
                  { type: "string", name: "country", label: "Country" },
                ],
              },
              {
                type: "object",
                name: "socialMedia",
                label: "Social Media",
                fields: [
                  { type: "string", name: "facebook", label: "Facebook URL" },
                  { type: "string", name: "instagram", label: "Instagram URL" },
                  { type: "string", name: "linkedin", label: "LinkedIn URL" },
                ],
              },
            ],
          },
        ],
      },

      // ============================================
      // HERO SECTION COLLECTION
      // ============================================
      {
        name: "hero",
        label: "Hero Section",
        path: "content/sections",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "hero",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "ctaText",
            label: "Button Text",
          },
          {
            type: "string",
            name: "ctaLink",
            label: "Button Link",
          },
          {
            type: "image",
            name: "backgroundImage",
            label: "Background Image",
          },
        ],
      },

      // ============================================
      // SERVICES COLLECTION
      // ============================================
      {
        name: "services",
        label: "Services",
        path: "content/sections",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "services",
        },
        fields: [
          {
            type: "object",
            name: "services",
            label: "Services List",
            list: true,
            fields: [
              {
                type: "string",
                name: "icon",
                label: "Icon",
                options: ["home", "paintbrush", "sparkles", "palette"],
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },

      // ============================================
      // ABOUT SECTION COLLECTION
      // ============================================
      {
        name: "about",
        label: "About Section",
        path: "content/sections",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about",
        },
        fields: [
          {
            type: "string",
            name: "label",
            label: "Section Label",
            description: "Small text above the title (e.g., 'About Us')",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "titleHighlight",
            label: "Title Highlight",
            description: "Second line of title (highlighted)",
          },
          {
            type: "string",
            name: "paragraphs",
            label: "Content Paragraphs",
            list: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Section Image",
          },
          {
            type: "string",
            name: "imageAlt",
            label: "Image Alt Text",
          },
          {
            type: "object",
            name: "stats",
            label: "Statistics",
            list: true,
            fields: [
              {
                type: "string",
                name: "value",
                label: "Value",
                description: "e.g., '10+'",
              },
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "e.g., 'Years'",
              },
            ],
          },
        ],
      },

      // ============================================
      // WHAT WE DO SECTION COLLECTION
      // ============================================
      {
        name: "whatwedo",
        label: "What We Do",
        path: "content/sections",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "whatwedo",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Section Title",
            required: true,
          },
          {
            type: "object",
            name: "residential",
            label: "Residential Card",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "features",
                label: "Features",
                list: true,
                description:
                  "List of features (e.g., 'PAINTING', 'CEILING', etc.)",
              },
            ],
          },
          {
            type: "object",
            name: "commercial",
            label: "Commercial Card",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "additionalDescription",
                label: "Additional Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "features",
                label: "Features",
                list: true,
                description:
                  "List of features (e.g., 'RETAIL', 'NEW CONSTRUCTION', etc.)",
              },
            ],
          },
        ],
      },

      // ============================================
      // TEAM SECTION COLLECTION
      // ============================================
      {
        name: "team",
        label: "Team Members",
        path: "content/sections",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "team",
        },
        fields: [
          {
            type: "string",
            name: "label",
            label: "Section Label",
            description: "Small text above the title (e.g., 'Our Team')",
          },
          {
            type: "string",
            name: "title",
            label: "Section Title",
            required: true,
          },
          {
            type: "string",
            name: "titleHighlight",
            label: "Title Highlight",
            description: "Second line of title",
          },
          {
            type: "string",
            name: "description",
            label: "Section Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "members",
            label: "Team Members",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
                required: true,
              },
              {
                type: "string",
                name: "role",
                label: "Role",
                required: true,
              },
              {
                type: "image",
                name: "image",
                label: "Photo",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },

      // ============================================
      // GALLERY SECTION COLLECTION
      // ============================================
      {
        name: "gallery",
        label: "Gallery",
        path: "content/sections",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "gallery",
        },
        fields: [
          {
            type: "string",
            name: "label",
            label: "Section Label",
            description: "Small text above the title (e.g., 'Portfolio')",
          },
          {
            type: "string",
            name: "title",
            label: "Section Title",
            required: true,
          },
          {
            type: "object",
            name: "residential",
            label: "Residential Images",
            list: true,
            fields: [
              {
                type: "image",
                name: "url",
                label: "Image",
                required: true,
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "commercial",
            label: "Commercial Images",
            list: true,
            fields: [
              {
                type: "image",
                name: "url",
                label: "Image",
                required: true,
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
                required: true,
              },
            ],
          },
        ],
      },

      // ============================================
      // REVIEWS SECTION COLLECTION
      // ============================================
      {
        name: "reviews",
        label: "Customer Reviews",
        path: "content/sections",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "reviews",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Section Title",
            required: true,
          },
          {
            type: "object",
            name: "reviews",
            label: "Reviews List",
            list: true,
            fields: [
              {
                type: "string",
                name: "text",
                label: "Review Text",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "author",
                label: "Author Name",
                required: true,
              },
              {
                type: "image",
                name: "image",
                label: "Project Image",
              },
              {
                type: "string",
                name: "imageAlt",
                label: "Image Alt Text",
              },
            ],
          },
          {
            type: "string",
            name: "googleReviewsLink",
            label: "Google Reviews Link",
            description: "Link to your Google Business reviews",
          },
        ],
      },

      // ============================================
      // CONTACT SECTION COLLECTION
      // ============================================
      {
        name: "contact",
        label: "Contact Section",
        path: "content/sections",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact",
        },
        fields: [
          {
            type: "string",
            name: "label",
            label: "Section Label",
            description: "Small text above the title (e.g., 'Contact')",
          },
          {
            type: "string",
            name: "title",
            label: "Section Title",
            required: true,
          },
          {
            type: "string",
            name: "heading",
            label: "Form Heading",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "phone",
            label: "Phone Number",
          },
          {
            type: "string",
            name: "email",
            label: "Email Address",
          },
          {
            type: "string",
            name: "location",
            label: "Location Text",
          },
        ],
      },

      // ============================================
      // CLIENTS SECTION COLLECTION
      // ============================================
      {
        name: "clients",
        label: "Clients Carousel",
        path: "content/sections",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "clients",
        },
        fields: [
          {
            type: "string",
            name: "heading",
            label: "Section Title",
            required: true,
          },
          {
            type: "string",
            name: "subheading",
            label: "Section Subtitle",
          },
          {
            type: "object",
            name: "clients",
            label: "Clients List",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Client Name",
                required: true,
              },
              {
                type: "image",
                name: "logo",
                label: "Client Logo",
                required: true,
              },
            ],
          },
        ],
      },

      // ============================================
      // FOOTER SECTION COLLECTION
      // ============================================
      {
        name: "footer",
        label: "Footer",
        path: "content/sections",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "footer",
        },
        fields: [
          {
            type: "string",
            name: "companyName",
            label: "Company Name",
            required: true,
          },
          {
            type: "object",
            name: "menuLinks",
            label: "Menu Links",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label", required: true },
              { type: "string", name: "href", label: "Link", required: true },
            ],
          },
          {
            type: "object",
            name: "socialLinks",
            label: "Social Links",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label", required: true },
              { type: "string", name: "href", label: "URL", required: true },
              {
                type: "string",
                name: "icon",
                label: "Icon",
                options: ["facebook", "instagram", "linkedin", "twitter"],
              },
            ],
          },
          {
            type: "object",
            name: "contactInfo",
            label: "Contact Info",
            fields: [
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "phone", label: "Phone" },
            ],
          },
          {
            type: "object",
            name: "legalLinks",
            label: "Legal Links",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label", required: true },
              { type: "string", name: "href", label: "Link", required: true },
            ],
          },
        ],
      },
    ],
  },
});
