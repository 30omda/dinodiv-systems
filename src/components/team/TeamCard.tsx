import { motion } from "framer-motion";
import { Linkedin, Github, Globe } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { TeamMember } from "@/types/team";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl border border-border bg-card p-6 text-center hover-glow"
    >
      <Avatar className="mx-auto mb-5 h-24 w-24 border-2 border-border transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(82_100%_50%/0.2)]">
        {member.image && (
          <AvatarImage src={member.image} alt={member.name} />
        )}
        <AvatarFallback className="bg-secondary text-lg font-semibold text-primary">
          {getInitials(member.name)}
        </AvatarFallback>
      </Avatar>

      <h3 className="font-heading text-lg font-semibold text-foreground">
        {member.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {member.description}
      </p>

      <div className="mt-4 flex items-center justify-center gap-3">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            <Linkedin size={18} />
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} GitHub`}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            <Github size={18} />
          </a>
        )}
        {member.portfolio && (
          <a
            href={member.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} Portfolio`}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            <Globe size={18} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;
