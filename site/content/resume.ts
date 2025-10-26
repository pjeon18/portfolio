export type Resume = {
  profile: { name: string; title?: string; email?: string; phone?: string; location?: string; links?: { label: string; href: string }[] };
  education: { school: string; degree: string; location?: string; gpa?: string; dates?: string }[];
  experience: { role: string; org: string; location?: string; dates?: string; bullets: string[] }[];
  skills: string[];
  certifications?: string[];
  awards?: string[];
  activities?: string[];
  languages?: string[];
};

export const resume: Resume = {
  "profile": {
    "name": "Paul Jeon",
    "title": "",
    "email": "pauljeon@college.harvard.edu | 781-999-2598",
    "phone": "pauljeon@college.harvard.edu | 781-999-2598",
    "location": "304 Albion Rd, Bedford, MA 01730",
    "links": []
  },
  "education": [
    {
      "school": "Harvard College",
      "degree": "A.B. in Computer Science (Honors); Secondary in Visual Studies",
      "location": "Cambridge, MA",
      "gpa": "3.7",
      "dates": "Expected May 2027"
    }
  ],
  "experience": [
    {
      "role": "UI/UX Designer",
      "org": "Tech for Social Good",
      "location": "Cambridge, MA",
      "dates": "Feb 2025 – May 2025",
      "bullets": [
        "Worked with a college-application mentorship nonprofit to design and prototype a sign-up website (lo-fi & hi-fi in Figma).",
        "Conducted user research through surveys and interviews; led weekly design iterations for the company board."
      ]
    },
    {
      "role": "Procurement Manager",
      "org": "The Harvard Shop",
      "location": "Cambridge, MA",
      "dates": "Sep 2023 – Feb 2025",
      "bullets": [
        "Ordered and managed warehouse inventory of ~$7.8M across ~1,100 SKUs for three retail locations and an online store.",
        "Decreased web stockout rate from 5.32% to 1.90% through weekly walkthroughs and prioritizing low-inventory SKUs.",
        "Reached record-high profit margins; increased revenue 47% YoY (~$370K) by automating high-demand product orders with a Python API integration (Lightspeed).",
        "Grew inventory 64% to ~$1.9M while improving margins.",
        "Sourced and designed new products and collections aligned with consumer preferences.",
        "Maintained partnerships with brands including Nike, Champion, Patagonia, and Peter Millar to ensure product quality.",
        "Led weekly procurement meetings with stores, marketing, and product teams to coordinate new campaigns.",
        "Collaborated with the business office and CFO to ensure compliance with taxes and trademarks.",
        "Improved product outflow by ~65% via supplier pre-ticketing and related process optimizations."
      ]
    },
    {
      "role": "Marketing Analytics Intern",
      "org": "The Harvard Shop",
      "location": "Cambridge, MA",
      "dates": "Jun 2023 – Aug 2023",
      "bullets": [
        "Used digital marketing tools to analyze return on ad spend on Meta and Instagram, conversions, and open rates of emails.",
        "Conducted user research through survey and A/B testing of email format, checkout flow, and pop-up campaigns.",
        "Tracked user-satisfaction rates to measure potential for new implementations; presented data to the board of directors.",
        "Designed layouts for summer email marketing campaign, generating over $8,000 in attributed campaigns.",
        "Strategized and launched SMS campaign as a final project; presented case study in front of the board of directors."
      ]
    },
    {
      "role": "Student Intern",
      "org": "Consulate General of the Republic of Korea",
      "location": "Boston, MA",
      "dates": "Jun 2022 – Jun 2023",
      "bullets": [
        "Transcribed contents of biotech strategy forum and conferences from Korean to English.",
        "Stationed at local Korean Schools to assist teachers with competitions and ceremonies held by the Consulate General.",
        "Designated as photographer and receptionist for Korean Biotech conferences at the Cambridge Innovation Center."
      ]
    },
    {
      "role": "Student Worker",
      "org": "Bedford Food Bank",
      "location": "Bedford, MA",
      "dates": "May 2022 – Sep 2022",
      "bullets": [
        "Initiated a summer lunch program for school lunch-dependent student families in the summer.",
        "Coordinated with local library for an easily accessible meal pick-up program for qualifying families and the elderly.",
        "Packaged delivery and pick-up meal bags for families, partnering with local farms, grocery stores, and volunteers to manage supply of food and operation.",
        "Designed and delivered information packets for government assistance and food bank programs."
      ]
    }
  ],
  "skills": [
    "Python",
    "Figma",
    "Adobe Creative Suite",
    "Java",
    "JavaScript",
    "SQL",
    "Klaviyo",
    "Shopify"
  ],
  "certifications": [
    "MIT Beaverworks — GitHub",
    "MIT Beaverworks — Medlytics",
    "MIT Beaverworks — Python Core",
    "EHSSP Korean Language Program (Ewha Harvard Summer School Program)"
  ],
  "awards": [
    "FY 2023 SNUAA NE Scholarship",
    "Scholastic Art & Writing — Gold Key",
    "National Merit Commended Scholar",
    "AP Scholar with Distinction",
    "AP with WE Service Recognition"
  ],
  "activities": [
    "Community Group Leader - Harvard Radcliffe Asian American Chrsitian Fellowship (AACF)",
    "Design Chair — Harvard Korean Association",
    "Social Chair - Asian American Brotherhood",
    "Designer - The Harvard Crimson"
  ],
  "languages": []
};