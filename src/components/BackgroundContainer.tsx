export default function BackgroundContainer() {
  return (
    <>
      <div
        className="fixed inset-0 -z-10 bg-[#0B1020]"
        style={{
          backgroundImage:
            "radial-gradient(900px 600px at 85% -5%, rgba(124,92,255,0.18), transparent 60%), radial-gradient(800px 500px at 0% 110%, rgba(34,211,238,0.14), transparent 55%)",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>
        <div
          className="absolute w-[480px] h-[480px] rounded-full opacity-55"
          style={{
            top: "-120px",
            insetInlineStart: "-100px",
            background: "radial-gradient(circle, #7C5CFF, transparent 70%)",
            filter: "blur(90px)",
            animation: "float 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[480px] h-[480px] rounded-full opacity-55"
          style={{
            bottom: "-140px",
            insetInlineEnd: "-120px",
            background: "radial-gradient(circle, #22D3EE, transparent 70%)",
            filter: "blur(90px)",
            animation: "float 14s ease-in-out infinite",
            animationDelay: "-7s",
          }}
        />
      </div>
    </>
  );
}
