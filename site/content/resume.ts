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
      "school": "Harvard College\tCambridge, MA",
      "degree": "Bachelor of Arts (A.B.) in Computer Science on the Honor Track, Secondary in Visual Studies\tGPA: 3.7\t Expected Graduation May 2027",
      "location": "",
      "gpa": "",
      "dates": ""
    }
  ],
  "experience": [
    {
      "role": "UI/UX Designer, Tech for Social Good \tCambridge, MA Worked with a college-application mentorship nonprofit to design and prototype sign-up website (lo-fi & hi-fi in Figma)",
      "org": "February",
      "location": "",
      "dates": "2025 \u2013 May 2025",
      "bullets": []
    },
    {
      "role": "Conducted user research through surveys and interviews; ed design iterations weekly to the company board.",
      "org": "",
      "location": "",
      "dates": "present",
      "bullets": []
    },
    {
      "role": "Procurement Manager, The Harvard Shop\tCambridge, MA",
      "org": "September",
      "location": "",
      "dates": "2023 \u2013 February 2025",
      "bullets": []
    },
    {
      "role": "Ordered and managed warehouse inventory of $7.8M across + SKUs for three retail locations and an online store Decreased web stockout rate from 5.32% to 1.90% with weekly walkthroughs and prioritizing low inventory SKUs",
      "org": "",
      "location": "",
      "dates": "1100",
      "bullets": []
    },
    {
      "role": "Reached record-high profit margins Increased revenue 47% YoY ($370K) by automating high-demand product orders via Python API integration with Lightspeed, while growing inventory 64% to $1.9M and improving margins Sourced and designed new products and collections to foster brand growth while meeting consumer preferences Maintained partnerships with brands such as Nike, Champion, Patagonia, Peter Millar to ensure higher quality products Led weekly procurement meetings on updates with the stores, marketing, product teams to coordinate new campaigns Worked with the business office and CFO to ensure company compliance with industry standards of taxes and trademark",
      "org": "65% by optimizing product outflow such as by supplier pre-ticketing",
      "location": "",
      "dates": "",
      "bullets": []
    },
    {
      "role": "Marketing Analytics Intern, The Harvard Shop\tCambridge, MA Used digital marketing tools to analyze return on ad spend on Meta and Instagram, conversions, and open rates of emails Conducted user research through survey and A/B testing of email format, checkout flow, and pop-up campaigns",
      "org": "June",
      "location": "",
      "dates": "2023 \u2013 August 2023",
      "bullets": []
    },
    {
      "role": "Tracked user-satisfaction rates to measure potential for new implementations, ed data to the board of directors Designed layouts for summer email marketing campaign, generating over $8,000 in attributed campaigns",
      "org": "",
      "location": "",
      "dates": "present",
      "bullets": []
    },
    {
      "role": "Strategized and launched SMS campaign as a final project, ing case study in front of the board of directors",
      "org": "",
      "location": "",
      "dates": "present",
      "bullets": []
    },
    {
      "role": "Student Intern, Consulate General of the Republic of Korea\tBoston, MA Transcribed contents of biotech strategy forum and conferences from Korean to English",
      "org": "June",
      "location": "",
      "dates": "2022 \u2013 June 2023",
      "bullets": []
    },
    {
      "role": "Stationed",
      "org": "local Korean Schools to assist teachers with competitions and ceremonies held by the Consulate General",
      "location": "",
      "dates": "",
      "bullets": []
    },
    {
      "role": "Designated as photographer and receptionist for Korean Biotech conferences",
      "org": "the Cambridge Innovation Center",
      "location": "",
      "dates": "",
      "bullets": []
    },
    {
      "role": "Student Worker, Bedford Food Bank\tBedford, MA Initiated a summer lunch program for school lunch-dependent student families in the summer Coordinated with local library for an easily accessible meal pick-up program for qualifying families and the elderly Packaged delivery and pick-up meal bags for families, partnering with local farms, grocery stores, and volunteers to manage supply of food and operation Designed and delivered information packets for government assistance and food bank programs",
      "org": "May",
      "location": "",
      "dates": "2022 \u2013 September 2022",
      "bullets": []
    }
  ],
  "skills": [
    "Technical Skills: Python",
    "Figma",
    "Adobe Suite",
    "Java",
    "JavaScript",
    "SQL",
    "Klaviyo",
    "Shopify Certifications & Training: MIT Beaverworks (Github",
    "Medlytics",
    "and Python Core)",
    "EHSSP Korean Language Program (Ewha Harvard Summer School Program) Awards: FY 2023 SNUAA",
    "NE Scholarship",
    "Scholastic Art and Writing Gold Key",
    "National Merit Commended Scholar",
    "AP Scholar with Distinction",
    "AP with WE Service Recognition Activities: Designer for Harvard Korean Association",
    "Asian American Brotherhood",
    "the Harvard Crimson"
  ],
  "certifications": [],
  "awards": [],
  "activities": [],
  "languages": []
};