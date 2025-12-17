import React from 'react';
import { User, ArrowUpRight } from 'lucide-react';

export const AboutCard: React.FC = () => {
  return (
    <section 
      className="animate-fade-in-up animate-delay-500 relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-700 shadow-sm p-6 sm:p-8 hover:shadow-md transition-all duration-300"
      id="about-me"
    >
      <div className="flex items-center gap-3 mb-6">
        <User className="w-5 h-5 text-neutral-300" />
        <h3 className="text-xl font-geist font-extralight tracking-tight text-neutral-100">About Me</h3>
      </div>

      <div className="text-neutral-300 leading-relaxed text-sm font-inter mb-8">
        <p className="mb-4">
          I am a versatile professional transitioning into cloud computing and DevOps Engineering while leveraging a strong background in digital communications, administration and a strong academic background from prior roles. I possess hands-on expertise in key technologies: AWS, IaC (Terraform and CloudFormation), CI/CD (Jenkins/GitHub Actions), Docker and Kubernetes. I am seeking an early career or junior cloud engineer/DevOps role to contribute technical depth, drive automation, and ensure system reliability within a forward-thinking organization.
        </p>
        <a 
          href="https://www.linkedin.com/posts/efolayemi_cloudcomputing-devops-aws-activity-7389307616264421376-gD9D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAdrCpYBv0hhupstFIQRINf9FfJxmfAUaTg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-neutral-100 hover:text-white font-medium hover:underline transition-colors"
        >
          Learn More About Me <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        <StatCard value="3" label="Projects Deployed" />
      </div>

      <div className="border-t border-neutral-700 pt-6">
        <h4 className="text-xs font-medium text-neutral-500 mb-4 font-inter uppercase tracking-wider">CORE EXPERTISE</h4>
        <div className="flex flex-wrap gap-2">
          {[
            'Cloud Architecture', 
            'DevOps', 
            'System Administration', 
            'Network Security', 
            'Infrastructure as Code',
            'Kubernetes',
            'Docker'
          ].map((skill) => (
            <span key={skill} className="px-3 py-1.5 rounded-md bg-neutral-800 border border-neutral-700 text-xs font-medium text-neutral-300 font-inter">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center p-4 rounded-lg bg-neutral-800 border border-neutral-700">
    <div className="text-2xl font-geist font-extralight text-neutral-200">{value}</div>
    <div className="text-xs text-neutral-400 font-inter">{label}</div>
  </div>
);