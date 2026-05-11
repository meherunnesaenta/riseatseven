import React from "react";

/**
 * Reusable button for sections that need the “flip” hover effect.
 *
 * Props:
 * - href: string (optional)
 * - variant: "white" | "transparent" (optional)
 * - arrow: ReactNode (optional)
 * - children: string | ReactNode (required)
 */
export default function Button({ href, variant = "white", arrow, children }) {
  const className =
    variant === "transparent" ? "as-btn as-btn-transparent" : "as-btn as-btn-white";

  const content = (
    <div className="as-btn-inner">
      <div className="as-btn-text-wrapper">
        <span className="as-btn-text">{children}</span>
        <span className="as-btn-text as-btn-text-hover">{children}</span>
      </div>
      {arrow ? <span className="as-arrow">{arrow}</span> : <span className="as-arrow">↗</span>}
    </div>
  );

  if (href) {
    return (
      <a className={className} href={href}>
        {content}
      </a>
    );
  }

  return <button type="button" className={className}>{content}</button>;
}

