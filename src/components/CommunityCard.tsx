import { MapPin, Clock, Compass } from "lucide-react";
import type { PeerPost } from "../lib/types";

type CommunityCardProps = {
  post: PeerPost;
};

export function CommunityCard({ post }: CommunityCardProps) {
  return (
    <article className="community-card">
      <p className="card-label">Community step</p>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <dl>
        <div>
          <dt>
            <MapPin size={14} aria-hidden="true" />
            <span>Borough</span>
          </dt>
          <dd>{post.borough}</dd>
        </div>
        <div>
          <dt>
            <Compass size={14} aria-hidden="true" />
            <span>Place hint</span>
          </dt>
          <dd>{post.placeHint}</dd>
        </div>
        <div>
          <dt>
            <Clock size={14} aria-hidden="true" />
            <span>Window</span>
          </dt>
          <dd>{post.timeWindow}</dd>
        </div>
      </dl>
      <p className="demo-note">Mock demo data, not a live meetup.</p>
    </article>
  );
}

