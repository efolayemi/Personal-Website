import React from 'react';
import { Briefcase } from 'lucide-react';

export const ExperienceCard: React.FC = () => {
  return (
    <section className="animate-fade-in-up animate-delay-700 relative rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-sm p-6 sm:p-8 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-5 h-5 text-neutral-700" />
        <h3 className="text-xl font-geist font-extralight tracking-tight">Professional Journey</h3>
      </div>

      <div className="space-y-4">
        <ExperienceItem 
          role="Junior DevOps Engineer"
          period="May 2025 - Present"
          company="Cloudboosta Academy, UK"
          description={[
            "Supported the configuration and management of scalable cloud infrastructure using AWS (EC2, S3, Lambda, DynamoDB, IAM).",
            "Designed and maintained CI/CD pipelines with Jenkins and GitHub Actions, automating build, test, and deployment workflows.",
            "Provisioned and managed cloud environments using Infrastructure as Code (Terraform, CloudFormation).",
            "Deployed and managed containerised applications using Docker and Kubernetes to support scalability and reliability.",
            "Implemented monitoring and alerting using AWS CloudWatch to support performance visibility and incident response."
          ]}
          isCurrent={true}
        />
        <ExperienceItem 
          role="Digital Comms. Manager"
          period="April 2022 - May 2023"
          company="Afrikindness, UK"
          description={[
            "Managed digital communication strategy to drive engagement and audience retention.",
            "Coordinated with creative teams to deliver timely digital content.",
            "Produced educational content supporting youth development and wellbeing."
          ]}
        />
        <ExperienceItem 
          role="Social Media Manager & Admin"
          period="Oct 2018 - July 2023"
          company="Corporate Shepherds Ltd, Nigeria"
          description={[
            "Planned and managed digital content workflows, increasing engagement by 75% across platforms in 9 months.",
            "Researched and supported content delivery for broadcasts reaching 1M+ monthly listeners.",
            "Coordinated communication with partners and clients to support consistent messaging."
          ]}
        />
      </div>
    </section>
  );
};

interface ExperienceItemProps {
  role: string;
  period: string;
  company: string;
  description: string[];
  isCurrent?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, period, company, description, isCurrent }) => {
  const containerClasses = isCurrent 
    ? "relative rounded-lg bg-neutral-900 border border-neutral-700 p-5 hover:shadow-sm transition-all duration-200"
    : "relative rounded-lg bg-neutral-50 border border-neutral-200 p-5 hover:shadow-sm transition-all duration-200";

  const titleColor = isCurrent ? "text-neutral-100" : "text-neutral-900";
  const dateColor = isCurrent ? "text-neutral-400" : "text-neutral-600";
  const companyColor = isCurrent ? "text-neutral-200" : "text-neutral-900";
  const descColor = isCurrent ? "text-neutral-400" : "text-neutral-600";

  return (
    <div className={containerClasses}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <h4 className={`font-geist font-light tracking-tight text-lg ${titleColor}`}>{role}</h4>
        <span className={`text-xs font-medium font-inter ${dateColor}`}>{period}</span>
      </div>
      <p className={`font-medium mb-3 font-inter text-sm ${companyColor}`}>{company}</p>
      <ul className={`text-xs leading-relaxed font-inter space-y-2 list-disc list-inside ${descColor}`}>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};