interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedIn: string;
  instagram: string;
  github: string;
}

interface Sponsor {
  name: string;
  tier: "title" | "gold" | "silver" | "bronze" | "others";
  logo: string;
  website: string;
}

interface Startup {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  longDescription: string;
  founded: string;
  team: string[];
  contact: string;
}