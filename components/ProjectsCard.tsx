import React from 'react';
import { FolderGit2, ArrowUpRight } from 'lucide-react';

export const ProjectsCard: React.FC = () => {
  return (
    <section className="animate-fade-in-up animate-delay-600 relative rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-sm p-6 sm:p-8 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-8">
        <FolderGit2 className="w-5 h-5 text-neutral-700" />
        <h3 className="text-xl font-geist font-extralight tracking-tight">Key Projects</h3>
      </div>

      <div className="grid gap-8">
        <ProjectItem
          title="Medibot Healthcare Chatbot"
          description={`🩺 What is 𝗠𝗲𝗱𝗶𝗯𝗼𝘁?
𝗠𝗲𝗱𝗶𝗯𝗼𝘁 is a virtual assistant designed to help patients check appointment availability, book, reschedule, and cancel hospital appointments — all from the palm of their hands.

💡 Why 𝗠𝗲𝗱𝗶𝗯𝗼𝘁?
Growing up in Nigeria, I’ve witnessed the long queues patients endure at hospitals just to book an appointment - a frustrating experience for both patients and admin staff.
I've seen a similar pattern in the UK - patients waiting endlessly on the phone or in-person just to secure a GP slot, often weeks or months away. I’ve experienced it firsthand.

So I thought:
"What if patients could simply book instantly without staying on hold for minutes or standing in line?"
That’s the challenge 𝗠𝗲𝗱𝗶𝗯𝗼𝘁 aims to solve.

🔧 The Build
I created the chatbot by:
• Defining patient intents (like booking or cancelling)
• Setting up slot types
• Connecting AWS Lambda Functions to Amazon Lex
• Deployed on Kommunicate`}
          tags={['AWS Lex', 'Lambda', 'DynamoDB', 'Kommunicate', 'GitHub']}
          demoLink="https://drive.google.com/file/d/1iWLz3YVCG7rffqmKr8wqb_NVDhrsEwr1/view?usp=drive_link"
          readMoreLink="https://www.linkedin.com/posts/efolayemi_cloudcomputing-amazonlex-healthcareinnovation-activity-7346075953069977600-bVUa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAdrCpYBv0hhupstFIQRINf9FfJxmfAUaTg"
          image="https://drive.google.com/thumbnail?id=1tuYX8lKmUN6J7_w0Gt-NuRLJFWNRO_VY&sz=w1000"
          link="#"
        />
        <ProjectItem
          title="Netflix Clone (Kubernetes)"
          description="Ever wondered what it takes to run a Netflix-style app - but on your own cloud infrastructure? What happens when you mix Terraform, Kubernetes, Jenkins, and ArgoCD in one project? You get a fully automated, production-grade Netflix Clone deployed and monitored in the cloud!"
          tags={['Docker', 'Kubernetes', 'CI/CD', 'GitHub', 'Prometheus', 'Grafana', 'Terraform', 'Sonarqube', 'ArgoCD']}
          demoLink="https://drive.google.com/file/d/1pJ1o8-wHnjoCOQRLBNB939l9cw0F9yo0/view?usp=sharing"
          readMoreLink="https://www.linkedin.com/posts/efolayemi_devops-devsecops-aws-activity-7383458631473659904-DXXx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAdrCpYBv0hhupstFIQRINf9FfJxmfAUaTg"
          image="https://drive.google.com/thumbnail?id=1fg0-SoNdUkCo2PsnfZjyv_kFGPm5XfNA&sz=w1000"
          link="#"
        />
        <ProjectItem
          title="Production CI/CD Pipeline"
          description="Designing a production-grade CI/CD pipeline implementing blue-green deployment to enable low-downtime releases and safe rollbacks."
          tags={['Jenkins', 'Blue-Green', 'DevOps']}
          image="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=2088"
          status="In Progress"
          link="#"
        />
      </div>
    </section>
  );
};

interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  video?: string;
  link?: string;
  demoLink?: string;
  readMoreLink?: string;
  status?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, tags, image, video, link, demoLink, readMoreLink, status }) => (
  <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 p-4 rounded-xl hover:bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-all duration-300 bg-white">
    <div className="md:col-span-4 relative overflow-hidden rounded-lg aspect-video md:aspect-[4/3] bg-neutral-100 border border-neutral-200">
      {video ? (
        <video 
          src={video} 
          poster={image}
          controls
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <img 
          src={image} 
          alt={title} 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
      )}
      {status && (
        <span className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium rounded-full border border-white/10 z-10">
          {status}
        </span>
      )}
    </div>
    <div className="md:col-span-8 flex flex-col justify-center">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h4 className="text-lg font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors duration-200">
          {title}
        </h4>
        {link && link !== '#' && (
          <a href={link} className="text-neutral-400 hover:text-neutral-900 transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
      <div className="text-sm text-neutral-600 leading-relaxed mb-4 font-inter whitespace-pre-wrap">
        {description}
      </div>
      
      {(demoLink || readMoreLink) && (
        <div className="flex flex-wrap items-center gap-4 mb-4 mt-2">
          {demoLink && (
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
            >
              Watch Demo here <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
          {readMoreLink && (
            <a 
              href={readMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
            >
              Read More <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-xs text-neutral-600 font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);