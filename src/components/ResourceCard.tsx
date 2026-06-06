import type { Resource } from "../lib/types";

type ResourceCardProps = {
  label: string;
  resource: Resource;
  urgent?: boolean;
};

export function ResourceCard({ label, resource, urgent = false }: ResourceCardProps) {
  return (
    <article className={urgent ? "resource-card urgent" : "resource-card"}>
      <p className="card-label">{label}</p>
      <h3>{resource.name}</h3>
      <p>{resource.description}</p>
      <p className="card-action">{resource.action}</p>
      {resource.url ? (
        <a href={resource.url} target="_blank" rel="noreferrer">
          Open official page
        </a>
      ) : null}
    </article>
  );
}
