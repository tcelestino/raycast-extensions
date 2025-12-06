export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "now";
  if (diffMins < 60) return ` ${diffMins} min`;
  if (diffHours < 24) return ` ${diffHours}h`;
  if (diffDays < 7) return ` ${diffDays}d`;

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
