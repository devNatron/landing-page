export type ImageProps = {
    alternativeText: string
    url: string
}

export type HeaderProps = {
    title: string
    description: string
    button: {
      label: string
      url: string
    }
    image: ImageProps
}

export type SectionAboutProjectProps = {
    title: string
    description: string
    image: ImageProps
}

export type SectionTechProps = {
    title: string
    techIcons: [{
        title: string
        icon: ImageProps
    }]
}

export type SectionConceptsProps = {
    title: string
    concepts: [{
      title: string
    }]
}

export type SectionModulesProps = {
    title: string
    modules: [{
      title: string
      subtitle: string
      description: string
    }]
}

export type SectionAgendaProps = {
    title: string
    description: string
}

export type PricingBoxProps = {
    totalPrice: number
    numberInstallments: number
    priceInstallment: number
    benefits: string
    button: {
      label: string
      url: string
    }
}

export type AuthorProps = {
    name: string
    role: string
    socialLinks: [{
      title: string
      url: string
    }]
    description: string
    photo: ImageProps
  }

export type sectionAboutUsProps = {
    title: string
    authors: AuthorProps[]
}

export type sectionReviewsProps = {
  title: string
  reviews: [{
    name: string
    photo: ImageProps
    text: string
  }]
}

export type sectionFaqProps = {
  title: string
  questions: [{
    question: string
    answer: string
  }]
}

export type landingPageProps = {
    logo: ImageProps
    header: HeaderProps
    sectionAboutProject: SectionAboutProjectProps
    sectionTech: SectionTechProps
    sectionConcepts: SectionConceptsProps
    sectionModules: SectionModulesProps
    sectionAgenda: SectionAgendaProps
    pricingBox: PricingBoxProps
    sectionAboutUs: sectionAboutUsProps
    sectionReviews: sectionReviewsProps
    sectionFaq: sectionFaqProps
}