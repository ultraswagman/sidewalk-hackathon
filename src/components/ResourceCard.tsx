import { ShieldAlert, MapPinned, ArrowUpRight } from "lucide-react";
import type { Resource } from "../lib/types";

type ResourceCardProps = {
  label: string;
  resource: Resource;
  urgent?: boolean;
};

export function ResourceCard({ label, resource, urgent = false }: ResourceCardProps) {
  return (
    <article className={urgent ? "resource-card urgent" : "resource-card"}>
      <div className="card-header-row">
        <p className="card-label">{label}</p>
        {urgent ? (
          <ShieldAlert className="urgent-icon" size={16} aria-hidden="true" />
        ) : (
          <MapPinned className="place-icon" size={16} aria-hidden="true" />
        )}
      </div>
      <h3>{resource.name}</h3>
      <p>{resource.description}</p>
      <p className="card-action">{resource.action}</p>
      {resource.url ? (
        <a href={resource.url} target="_blank" rel="noreferrer" className="card-link">
          <span>Open official page</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      ) : null}
    </article>
  );
}

