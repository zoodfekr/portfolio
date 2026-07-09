interface PagesHeaderProps {
    title: string
}

const PagesHeader = ({ title }: PagesHeaderProps) => {
    return (
        <div className="relative text-center mb-8 md:mb-12 pt-4">
            <div 
            className="absolute  top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C5CFF]/40 to-transparent" 
            style={{ borderRadius: "40px 40px 0 0" }} 
            />
            <h2
                className="text-3xl sm:text-3xl md:text-4xl font-extrabold leading-tight gradient-text inline-block"
                style={{ animation: "fadeUp .6s ease .05s both", filter: "drop-shadow(0 2px 12px rgba(124,92,255,0.35))" }}
            >
                {title}
            </h2>
        </div>
    );
};

export default PagesHeader;