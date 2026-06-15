// Button.jsx — Reusable button component.
// Props: label (text), variant ("secondary" | "primary")

function Button({ label, variant = "secondary" }) {
    // Shared styles for all buttons
    const base = "mt-auto w-fit rounded-full px-4 py-4 text-xl font-normal cursor-pointer border-none transition-colors duration-200";

    // Variant-specific colours — each class maps to a semantic token in index.css
    const variants = {
        secondary: "bg-action-secondary text-text-primary hover:bg-action-secondary-hover",
        primary:   "bg-action-primary text-white hover:bg-action-primary-hover",
    };

    return (
        <button className={`${base} ${variants[variant]}`}>
            {label}
        </button>
    );
}

export default Button;
