// Centralised social link configuration.
// Update the URLs below to point to the real brand profiles.

export type SocialLinks = {
  
  instagram: string;
  linkedin: string;
};

export const mainSocials: SocialLinks = {

  instagram: "https://www.instagram.com/ohreems_workforce_solutions?igsh=eGhtZG00c3l6b3Rq",
  linkedin: "https://www.linkedin.com/company/ohreems-workforce-solutions-pvt-ltd/posts/?feedView=all",
};

export const workforceSocials: SocialLinks = {

  instagram: "https://www.instagram.com/ohreems_workforce_solutions?igsh=eGhtZG00c3l6b3Rq",
  linkedin: "https://www.linkedin.com/company/ohreems-workforce-solutions-pvt-ltd/posts/?feedView=all",
};

export const greencellSocials: SocialLinks = {
  
  instagram: "https://www.instagram.com/ohreems_greencell_tech?igsh=MTdqNHF3YXEzNGQ5Yg==",
  linkedin: "https://www.linkedin.com/company/ohreems-green-cell-tech-pvt-ltd/posts/?feedView=all",
};

export type BrandKey = "main" | "workforce" | "greencell";

export const SOCIALS_BY_BRAND: Record<BrandKey, SocialLinks> = {
  main: mainSocials,
  workforce: workforceSocials,
  greencell: greencellSocials,
};
