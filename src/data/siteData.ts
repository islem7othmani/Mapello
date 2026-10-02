import generalDentistryImage from '../assets/why mapello.jpeg'

export type ServiceItem = {
  slug: string
  name: string
  shortDescription: string
  description: string
  icon: string
  image: string
  intro: string
  forWho: string[]
  benefits: string[]
  process: string[]
  expect: string[]
  faqs: { question: string; answer: string }[]
}

export type Review = {
  name: string
  initials: string
  treatment: string
  review: string
  rating: number
}

export type FaqEntry = {
  category: string
  question: string
  answer: string
}

export const services: ServiceItem[] = [
  {
    slug: 'general-dentistry',
    name: 'General Dentistry',
    shortDescription: 'Routine examinations, preventive care, cleanings, fillings and oral health maintenance.',
    description: 'Thoughtful, preventive care built around long-term oral health and comfort.',
    icon: 'shield-check',
    image: generalDentistryImage,
    intro:
      'General dentistry is the foundation of a confident, healthy smile. We focus on prevention, early intervention and long-term oral health so your care feels simple and reassuring.',
    forWho: ['Patients seeking routine preventive care', 'Those needing a consistent dental care plan', 'Anyone wanting a proactive approach to oral health'],
    benefits: ['Regular monitoring and preventive guidance', 'Comfortable, gentle treatment in a calming environment', 'Tailored care plans for lasting oral health'],
    process: ['Comprehensive assessment and discussion of concerns', 'Diagnosis and treatment planning with clear communication', 'Gentle treatment and preventive recommendations tailored to your needs'],
    expect: ['A welcoming, low-pressure appointment experience', 'Clear explanations and tailored recommendations', 'Supportive guidance for home care and future visits'],
    faqs: [
      {
        question: 'How often should I visit for a check-up?',
        answer: 'Most patients benefit from regular review appointments as recommended by their dental care team, with timing tailored to their needs and history.'
      },
      {
        question: 'Do you offer preventive care for children?',
        answer: 'Yes. Preventive care plans can be designed for all ages, with a focus on comfort, education and long-term oral health.'
      }
    ]
  },
  {
    slug: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    shortDescription: 'Teeth whitening, veneers, bonding and smile enhancement.',
    description: 'Smile transformations that feel natural, balanced and beautifully personal.',
    icon: 'sparkles',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80',
    intro:
      'Cosmetic dentistry enables subtle, personalized smile enhancements designed to reflect your individual features and goals. Every plan is created to feel natural, polished and confident.',
    forWho: ['Patients looking to enhance smile appearance', 'Anyone wanting whiter, more balanced teeth', 'People seeking a refreshed, natural aesthetic'],
    benefits: ['Improved confidence and smile harmony', 'Natural-looking, individualized treatment planning', 'Thoughtful treatment designed around comfort and goals'],
    process: ['Consultation to understand aesthetic goals', 'Digital planning and smile design discussion', 'Treatment tailored to your smile and lifestyle'],
    expect: ['Clear communication about options and outcomes', 'A careful, personalized treatment approach', 'Results that feel refined and natural'],
    faqs: [
      {
        question: 'What cosmetic options are available?',
        answer: 'Options vary based on your goals and clinical assessment. Common approaches include whitening, bonding and other smile-enhancing techniques.'
      },
      {
        question: 'Will the results look natural?',
        answer: 'A natural-looking result depends on thoughtful planning, materials and careful treatment design. Your clinician will discuss what is suitable for your smile.'
      }
    ]
  },
  {
    slug: 'dental-implants',
    name: 'Dental Implants',
    shortDescription: 'Modern implant solutions for replacing missing teeth.',
    description: 'Tailored implant treatment that restores function, esthetics and confidence.',
    icon: 'stethoscope',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
    intro:
      'Dental implants can provide a durable and restorative approach to replacing missing teeth, while supporting a more complete, natural-feeling smile. Treatment planning is designed around your overall oral health and long-term goals.',
    forWho: ['Patients missing one or more teeth', 'Those seeking a stable, long-term replacement option', 'People looking for improved chewing comfort and confidence'],
    benefits: ['A restorative solution that supports a more complete smile', 'Improved function and confidence', 'Individualized planning and follow-up care'],
    process: ['Detailed assessment and discussion of options', 'Planning and preparation around your oral health', 'Implant placement and ongoing review with supportive care'],
    expect: ['A measured, carefully explained treatment journey', 'Transparent guidance and clear timing expectations', 'Thoughtful post-treatment care planning'],
    faqs: [
      {
        question: 'Who is a good candidate for implants?',
        answer: 'Suitability depends on oral health, bone support and overall treatment goals. A thorough assessment helps determine whether implants are an appropriate option.'
      },
      {
        question: 'How long does treatment take?',
        answer: 'Treatment timelines vary based on the treatment plan, healing needs and whether any preparatory work is required.'
      }
    ]
  },
  {
    slug: 'restorative-dentistry',
    name: 'Restorative Dentistry',
    shortDescription: 'Crowns, bridges, dentures and restorative treatments.',
    description: 'Repair and renewal care designed to restore comfort, strength and confidence.',
    icon: 'wrench',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    intro:
      'Restorative dentistry focuses on repairing worn, damaged or missing teeth while helping restore both function and appearance. Plans are designed to feel as natural and comfortable as possible.',
    forWho: ['Patients with damaged or worn teeth', 'Those seeking repairs for function and comfort', 'People looking to revive their smile with tailored treatments'],
    benefits: ['Improved comfort and chewing function', 'A more stable, confident smile', 'Treatment tailored to your needs and long-term oral health'],
    process: ['Assessment of current condition and treatment goals', 'Planning and material selection based on clinical needs', 'Precise restoration with ongoing support'],
    expect: ['Calm, transparent guidance at each stage', 'A restorative plan that balances function and aesthetics', 'Follow-up care that supports long-term comfort'],
    faqs: [
      {
        question: 'What is the difference between a crown and a filling?',
        answer: 'A filling is used for smaller areas of damage, while a crown is often recommended to restore a tooth when strength, coverage or protection is needed.'
      },
      {
        question: 'How do I know if I need restorative treatment?',
        answer: 'A clinical assessment helps determine whether restoration is indicated based on symptoms, tooth condition and long-term oral health goals.'
      }
    ]
  },
  {
    slug: 'orthodontics',
    name: 'Orthodontics',
    shortDescription: 'Braces and clear aligner solutions.',
    description: 'Thoughtful alignment care for a smile that feels balanced and confident.',
    icon: 'wand-sparkles',
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    intro:
      'Orthodontic care can help enhance alignment and smile harmony with treatment plans tailored to comfort, lifestyle and goals. Whether you are exploring braces or clear aligners, each option is selected with care.',
    forWho: ['Patients seeking alignment improvements', 'Those wanting to refine smile balance', 'People who want a personalised orthodontic plan'],
    benefits: ['Improved smile alignment and confidence', 'Options that fit personal preferences and routines', 'A clear, guided treatment journey'],
    process: ['Assessment and discussion of alignment goals', 'Planning and treatment recommendation', 'Ongoing review and progress support'],
    expect: ['Clear timelines and helpful guidance', 'A practical treatment plan suited to your goals', 'Supportive care throughout the process'],
    faqs: [
      {
        question: 'Are clear aligners suitable for everyone?',
        answer: 'Suitability depends on your goals and the complexity of the treatment needed. A consultation helps determine the most appropriate option.'
      },
      {
        question: 'How long does orthodontic treatment usually take?',
        answer: 'Treatment length varies according to the situation and the plan recommended. Your clinician will explain the expected timeline during consultation.'
      }
    ]
  },
  {
    slug: 'pediatric-dentistry',
    name: 'Pediatric Dentistry',
    shortDescription: 'Comfortable dental care for children.',
    description: 'Gentle, reassuring oral care designed to help children feel at ease.',
    icon: 'smile',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    intro:
      'Pediatric dentistry focuses on a calm, reassuring experience for children while supporting healthy habits from an early age. Preventive care and education are central to this approach.',
    forWho: ['Children and young patients', 'Families seeking gentle dental care', 'Parents who want a positive first dental experience'],
    benefits: ['Comfort-focused care in a welcoming setting', 'Education that supports healthy habits', 'A positive, supportive dental experience'],
    process: ['Friendly consultation and a gentle assessment', 'Preventive care and guidance tailored to age', 'Ongoing support and advice for growing smiles'],
    expect: ['A calm, child-centered experience', 'Clear explanations for families', 'Thoughtful care that supports confidence and trust'],
    faqs: [
      {
        question: 'When should children first begin dental visits?',
        answer: 'A first consultation can be arranged as early as recommended by your dentist, with a focus on prevention and positive early experiences.'
      },
      {
        question: 'How do you help children feel relaxed?',
        answer: 'Care is customized to each child, with a calm environment, clear communication and a gentle approach designed to reduce anxiety.'
      }
    ]
  },
  {
    slug: 'emergency-dentistry',
    name: 'Emergency Dentistry',
    shortDescription: 'Dental care for urgent pain, injury and unexpected problems.',
    description: 'Prompt, reassuring care for urgent dental concerns and sudden discomfort.',
    icon: 'alert-circle',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    intro:
      'Emergency dental care offers timely support when pain, injury or unexpected oral issues arise. The goal is to provide reassurance, assessment and a clear next step as quickly as possible.',
    forWho: ['Patients dealing with sudden dental pain', 'Those with urgent injury or unexpected issues', 'Anyone needing prompt assessment and care'],
    benefits: ['Prompt attention to urgent concerns', 'Clear assessment and next steps', 'Reassuring, calm guidance during unexpected situations'],
    process: ['Quick assessment of the concern and symptoms', 'A practical treatment plan based on urgency and condition', 'Supportive follow-up and guidance as needed'],
    expect: ['A thoughtful, responsive care experience', 'Clear explanations about your options', 'A focus on comfort, relief and next steps'],
    faqs: [
      {
        question: 'What should I do in a dental emergency?',
        answer: 'Contact Mapello as soon as possible and describe the symptoms, timing and urgency. A prompt assessment helps determine the next steps.'
      },
      {
        question: 'Can urgent concerns be seen quickly?',
        answer: 'Mapello aims to accommodate urgent needs as promptly as possible, with treatment guided by the nature and severity of the concern.'
      }
    ]
  }
]

export const reviews: Review[] = [
  {
    name: 'A. Thompson',
    initials: 'AT',
    treatment: 'Cosmetic Dentistry',
    review: 'The care felt thoughtful and polished from the first call to the final visit. Mapello explained everything clearly, and the practice felt calm and welcoming.',
    rating: 5
  },
  {
    name: 'M. Patel',
    initials: 'MP',
    treatment: 'Dental Implants',
    review: 'I appreciated how comfortable and transparent the process felt. Each step was explained in a way that helped me feel informed and reassured.',
    rating: 5
  },
  {
    name: 'L. Garcia',
    initials: 'LG',
    treatment: 'General Dentistry',
    review: 'A very professional and genuinely warm experience. The practice feels modern, efficient and focused on patient comfort rather than rushing the visit.',
    rating: 5
  },
  {
    name: 'S. Nguyen',
    initials: 'SN',
    treatment: 'Orthodontics',
    review: 'Everything felt organized and reassuring. Mapello made treatment planning easy to understand and made the experience comfortable from start to finish.',
    rating: 5
  },
  {
    name: 'E. Brooks',
    initials: 'EB',
    treatment: 'Restorative Dentistry',
    review: 'The practice balances professionalism with a friendly, calm atmosphere. I felt respected, informed and looked after throughout my treatment plan.',
    rating: 5
  }
]

export const faqEntries: FaqEntry[] = [
  {
    category: 'General Dentistry',
    question: 'What does a general dental check-up include?',
    answer: 'A general dental consultation typically includes a review of oral health, a clinical assessment and a discussion of preventive recommendations based on your individual needs.'
  },
  {
    category: 'Appointments',
    question: 'How do I book an appointment?',
    answer: 'Appointments can be requested through the online booking form, by phone or by contacting Mapello directly for scheduling support.'
  },
  {
    category: 'Dental Implants',
    question: 'How do I know if dental implants are right for me?',
    answer: 'Suitability is determined through a comprehensive assessment of your oral health, treatment goals and overall clinical needs.'
  },
  {
    category: 'Cosmetic Dentistry',
    question: 'Can I discuss my smile goals before treatment?',
    answer: 'Yes. Many treatment plans begin with a consultation to discuss your goals, desired aesthetic and the most suitable care options.'
  },
  {
    category: 'Emergency Care',
    question: 'What should I do if I have a dental emergency?',
    answer: 'Contact Mapello as soon as possible and explain the urgency of the issue so he can guide you to the most appropriate next step.'
  },
  {
    category: 'Payments',
    question: 'Do you offer treatment discussions before care begins?',
    answer: 'Yes. Treatment planning includes clear communication and discussion of care recommendations before treatment proceeds.'
  }
]

export const clinicInfo = {
  phone: '+1 438-503-7621',
  phoneLink: '+14385037621',
  email: 'info@thedentalsolutions.ca',
  address: 'Montréal, Quebec, Canada',
  hours: 'Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM',
  whatsapp: '14385037621'
}

export const resultsCategories = ['All', 'Cosmetic Dentistry', 'Veneers', 'Whitening', 'Restorative Dentistry', 'Orthodontics', 'Dental Implants'] as const

export const resultGallery = [
  {
    title: 'Smile Refresh',
    category: 'Cosmetic Dentistry',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZVc1NChGpIQOoNSe_5jUirWLe43NMvAd2dT5ExpYsyGlCDjrL22Xldo&s=10'
  },
  {
    title: 'Whitening Case',
    category: 'Whitening',
    image:
      'https://studiosmiles.com.au/wp-content/uploads/2022/11/211208-Studio-Smiles-135-min-1024x683.jpg'
  },
  {
    title: 'Smile Design',
    category: 'Veneers',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Restoration Plan',
    category: 'Restorative Dentistry',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Alignment Journey',
    category: 'Orthodontics',
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Implant Renewal',
    category: 'Dental Implants',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80'
  }
]

export const technologyFeatures = [
  {
    title: 'Digital X-Ray',
    description: 'Low-radiation imaging with detailed diagnostic clarity for confident treatment planning.',
    image: 'https://s16736.pcdn.co/wp-content/uploads/sites/205/2025/07/shutterstock_2455016935.jpg.optimal.jpg'
  },
  {
    title: '3D Imaging / CBCT',
    description: 'Three-dimensional views that support precise, individualized care and treatment planning.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Intraoral Scanning',
    description: 'Comfortable digital scanning that supports accurate impressions and efficient workflows.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Digital Dentistry',
    description: 'Modern digital workflows designed for efficiency, accuracy and a streamlined patient journey.',
    image: 'https://angstadtfamilydental.com/wp-content/uploads/2024/03/Angstadt-Digital-Dentistry-Scanner.jpg'
  },
  {
    title: 'CAD/CAM',
    description: 'Computer-aided design and manufacturing used to support refined restorations and planning.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Modern Sterilization',
    description: 'Care processes supporting a clean, well-managed clinical environment and patient confidence.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80'
  }
]
