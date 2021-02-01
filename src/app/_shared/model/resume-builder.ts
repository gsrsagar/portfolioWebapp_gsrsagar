
export class PersonalDetails{
    fullName:string;
    emailId:string;
    contactNo:any;
    country:any;
    state:string;
    district:string;
    githubProfile:string;
    linkedInProfile:string;
    codingProfile:string;
}

export class Education{
    educationType:string;
    institutionName:string;
    branch:string;
    district:string;
    state:string;
    country:string;
    yearOfPassing:number;
    percentage:number;
    startDate:any;
    endDate:any;
}

export class Skills{
    skill:string;
    class:string;
    classIndex:number;
}

export class Experience{
    employer:string;
    jobTitle:string;
    country:any;
    state:any;
    city:any;
    jobDescription:string;
    experience:number;
    fromDate:any;
    toDate:any;
}
export class CareerObjective{
    careerObjective:string;
}

export class Project{
    constructor(){
        this.skills=new Array<Skills>();
    }
    title:string;
    description:string;
    skills:Skills[];
    link:string;
}
export class ResumeBuilder{
    constructor(){
        this.personalDetails=new PersonalDetails;
        this.education=new Array<Education>();
        this.skills=new Array<Skills>();
        this.experience=new Array<Experience>();
        this.careerObjective=new CareerObjective;
    }
    personalDetails:PersonalDetails;
    education:Education[];
    skills:Skills[];
    experience:Experience[];
    careerObjective:CareerObjective
}

export const buttonClass=[
    {class:"p-button-raised p-button-text"},
    {class:"p-button-raised p-button-secondary p-button-text"},
    {class:"p-button-raised p-button-success p-button-text"},
    {class:"p-button-raised p-button-info p-button-text"},
    {class:"p-button-raised p-button-warning p-button-text"},
    {class:"p-button-raised p-button-help p-button-text"},
    {class:"p-button-raised p-button-danger p-button-text"},
    {class:"p-button-raised p-button-text p-button-plain"}
]


export const personaldetailsMock:any={
    fullName:'Sagar Guvvala',
    contactNo:9494744282,
    emailId:'sagarreddyguvvala@gmail.com',
    state:'Andhra Pradesh',
    district:'Nellore',
    country:'India',
    githubProfile:'https://github.com/gsrsagar',
    linkedInProfile:'https://www.linkedin.com/in/sagar-reddy-guvvala-a76612176/',
    codingProfile:''
}
export const educationMock:Education[]=[
    {
        educationType:'B.Tech',
        branch:'Computer Science and Engineering',
        institutionName:'Priyadarshini College of Engineering, Nellore',
        district:'Nellore',
        state:'Andhra Pradesh',
        country:'India',
        percentage:71,
        startDate:new Date(),
        endDate:new Date(),
        yearOfPassing:2019
    },
    {
        educationType:'Intermediate',
        institutionName:'SriChaitanya Junior College',
        district:'Nellore',
        state:'Andhra Pradesh',
        country:'India',
        branch:'MPC',
        percentage:91,
        startDate:new Date(),
        endDate:new Date(),
        yearOfPassing:2015
    },
    {
        educationType:'10th Standard',
        institutionName:'MSM MCHS AC NAGAR , Nellore',
        district:'Nellore',
        state:'Andhra Pradesh',
        country:'India',
        branch:'',
        startDate:new Date(),
        endDate:new Date(),
        percentage:92,
        yearOfPassing:2013
    }
]

export const experienceMock:Experience[]=[
    {
        jobTitle:'Associate Software Engineer',
        employer:'Mphasis',
        country:'India',
        state:'Maharashtra',
        city:'Pune',
        jobDescription:`Worked as a full stack developer, by Managing website development projects from intial development to the final completion, optimizing all 
        cross-browser and multi-platform compatibility , work closely with the programmers and clients to meet projects requirements ,goals and 
        desired functionality`,
        experience:2.5,
        fromDate:new Date(),
        toDate:new Date()

    },
    {
        jobTitle:'Associate Software Engineer',
        employer:'Mphasis',
        country:'India',
        state:'Maharashtra',
        city:'Pune',
        jobDescription:`Worked as a full stack developer, by Managing website development projects from intial development to the final completion, optimizing all 
        cross-browser and multi-platform compatibility , work closely with the programmers and clients to meet projects requirements ,goals and 
        desired functionality`,
        experience:2.5,
        fromDate:new Date(),
        toDate:new Date()

    }
]

export const careerobjMock:CareerObjective={
    careerObjective:`To perform well in a learning environment that offers scope for professional and personal growth in 
    order to learn new things in technologies that helps to build a creative ideas to optimise the existing models as 
    well as to develop innovative models for business`,

}

export const skillsMock:Skills[]=[
    {skill:'Java',class:'',classIndex:0},
    {skill:'Angular 2+',class:'',classIndex:0},
    {skill:'.NET Core API',class:'',classIndex:0},
    {skill:'SQL',class:'',classIndex:0},
    {skill:'C#',class:'',classIndex:0},
    {skill:'Algorithms',class:'',classIndex:0}
]


export const projectsMock:Project[]=[
    {
        title:'Resume Builder App',
        description:`I developed this project as a part of my hands-on in the latest technology like Angular 9 and Django 
        Rest API that having all the features like printing as pdf , convert to document, proper validations , social login
        and good Authentication techniques are used to showcase my skills`,
        skills:[
            {skill:'Angular 9',class:'',classIndex:0},
            {skill:'DJango Rest API',class:'',classIndex:0},
            {skill:'Mongo DB',class:'',classIndex:0}
        ],
        link:'https://github.com/gsrsagar'
    }
]