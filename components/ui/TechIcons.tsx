import React from "react";

type SvgProps = { className?: string };

const NextJs = ({ className }: SvgProps) => (
  <svg viewBox="0 0 180 180" className={className} fill="none">
    <mask id="mask0_nx" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="black" />
    </mask>
    <g mask="url(#mask0_nx)">
      <circle cx="90" cy="90" r="90" fill="black" />
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1V69.3L139.87 164.44C143.19 162.22 146.4 159.92 149.508 157.52Z" fill="url(#paint0_nx)" />
      <rect x="115" y="54" width="12" height="72" fill="url(#paint1_nx)" />
    </g>
    <defs>
      <linearGradient id="paint0_nx" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="paint1_nx" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const ReactIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="12" cy="12" r="2.139" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1">
      <ellipse rx="10" ry="3.8" cx="12" cy="12" />
      <ellipse rx="10" ry="3.8" cx="12" cy="12" transform="rotate(60 12 12)" />
      <ellipse rx="10" ry="3.8" cx="12" cy="12" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

const TypeScript = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="2" fill="#3178C6" />
    <path d="M13.5 14.3v1.7c.3.2.7.3 1.1.3.5 0 .9-.1 1.2-.3.3-.2.4-.5.4-.9 0-.3-.1-.5-.2-.7-.1-.2-.3-.3-.5-.4l-.8-.3c-.1-.1-.2-.1-.3-.2-.1 0-.1-.1-.1-.2 0-.1 0-.2.1-.2.1-.1.2-.1.4-.1.2 0 .4 0 .6.1.2.1.4.2.5.3V12.3c-.3-.1-.6-.2-1-.2-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.9 0 .3.1.5.2.7.1.2.3.3.5.4l.8.3.3.2c.1.1.1.1.1.2 0 .1 0 .2-.1.2-.1.1-.2.1-.4.1-.4 0-.8-.2-1.2-.4zM9 11H7v1.5h2V17h1.5v-4.5H12V11H9z" fill="white" />
  </svg>
);

const TailwindCSS = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.17 1.173.664 1.715 1.212C13.245 10.383 14.205 11.4 16.5 11.4c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.17-1.173-.664-1.715-1.212C15.255 7.017 14.295 6 12 6zM7.5 11.4C5.1 11.4 3.6 12.6 3 15c.9-1.2 1.95-1.65 3.15-1.35.685.17 1.173.664 1.715 1.213C8.745 15.783 9.705 16.8 12 16.8c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.17-1.173-.664-1.715-1.212C10.755 12.417 9.795 11.4 7.5 11.4z" fill="#06B6D4" />
  </svg>
);

const FramerMotion = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M4 3h16v7h-8zM4 10h8l8 7H4zM4 17h8v7z" fill="#BB4AE8" />
  </svg>
);

const Vite = ({ className }: SvgProps) => (
  <svg viewBox="0 0 32 32" className={className} fill="none">
    <path d="M29.6 6.3L16.8 29.1c-.3.5-1 .5-1.3 0L1.4 6.3c-.3-.6.1-1.3.8-1.2l13.7 2.4c.1 0 .2 0 .3 0l13.4-2.4c.7-.1 1.1.6.8 1.2z" fill="url(#vite_a)" />
    <path d="M22.3 5L16 15.7 9.7 5H7.1L16 20.8 24.9 5z" fill="url(#vite_b)" />
    <defs>
      <linearGradient id="vite_a" x1="6" y1="3" x2="24" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient id="vite_b" x1="10" y1="5" x2="16" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF3E00" />
        <stop offset="1" stopColor="#FF7400" />
      </linearGradient>
    </defs>
  </svg>
);


const NodeJs = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 1.85c-.27 0-.54.07-.78.2L3.78 6.35c-.48.28-.78.79-.78 1.33v8.66c0 .54.3 1.05.78 1.33l7.44 4.3c.48.28 1.08.28 1.56 0l7.44-4.3c.48-.28.78-.79.78-1.33V7.68c0-.54-.3-1.05-.78-1.33L12.78 2.05c-.24-.13-.51-.2-.78-.2zm0 1.73l7.12 4.12v8.24L12 20.06l-7.12-4.12V7.7L12 3.58z" fill="#339933" />
    <path d="M11.5 7v10l4.33-2.5V9.5L11.5 7z" fill="#339933" />
  </svg>
);

const Express = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.402 4.467 3.4-4.467a1.54 1.54 0 0 1 1.855-.666l-1.798 2.339-2.122 3.102 5.154 6.92zm-22.892.132a1.423 1.423 0 0 1-.135-1.887l5.657-7.573H.5c-.822 0-1.417-.663-1.417-1.417S-.245 6.41.5 6.41h9.141c.822 0 1.417.663 1.417 1.417s-.595 1.417-1.417 1.417H4.414l5.227 6.92a1.417 1.417 0 1 1-2.257 1.702l-5.183-6.864H1.555a1.412 1.412 0 0 1-.447-.789z" />
  </svg>
);

const MongoDB = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.674 10.065-.24 6.312 3.56 9.464 4.063 9.85l.036.025V23c0 .11.1.2.21.2h1.006c.11 0 .21-.09.21-.2v-2.876l.036-.025c.498-.386 4.302-3.538 4.062-9.851-.024-.643-.066-1.27-.118-1.693" fill="#47A248" />
  </svg>
);

const PostgreSQL = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403C12.602.072 10.867 0 10.02 0 4.347 0 .849 2.298.849 6.277c0 1.632.571 2.895 1.698 3.783l-.054.344c-.05.301-.077.617-.077.948C2.416 14.42 5.3 17 8.892 17c.457 0 .906-.04 1.34-.116.06-.011.12-.024.178-.038.058.014.118.027.178.038.434.076.883.116 1.34.116 3.592 0 6.476-2.58 6.476-5.648 0-.33-.027-.647-.077-.948l-.054-.344c1.127-.888 1.698-2.15 1.698-3.783 0-3.979-3.498-6.277-9.171-6.277-.847 0-2.582.072-4.353.403A10.134 10.134 0 0 0 6.872 0H6.87" fill="#336791" />
    <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" fill="#336791" opacity=".2" />
  </svg>
);

const Redis = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-5.562 2.088-5.562-2.088L12 6.16l5.562 2.088zM6.438 9.582 12 11.67l5.562-2.088v3.836L12 15.506l-5.562-2.088V9.582zm5.562 8.258-5.562-2.088v-1.164L12 16.676l5.562-2.088v1.164L12 17.84z" fill="#DC382D" />
  </svg>
);

const Supabase = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.102 12.912.697 14.173 1.77 14.173h7.6l.516 8.791c.015.986 1.26 1.41 1.874.637l9.262-11.653c.662-.862.067-2.122-1.005-2.122h-7.6L11.9 1.036z" fill="url(#supabase_g)" />
    <defs>
      <linearGradient id="supabase_g" x1="14.5" y1="0" x2="6" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3ECF8E" />
        <stop offset="1" stopColor="#1E8A5A" />
      </linearGradient>
    </defs>
  </svg>
);

const Prisma = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M21.8065 18.8463L13.1358 1.2241C12.8354 .6215 12.3093 .2917 11.7522.2917s-.9999.33-1.3006.9326L1.3658 18.4884C1.1111 18.9934 1.0509 19.575 1.1989 20.1221c.148.5471.4986 1.0147.9832 1.3239L10.4006 23.56c.4295.2727.9216.44 1.4295.44.5079 0 .9999-.1673 1.4296-.44l8.2185-2.1153c.4846-.3092.8352-.7769.9832-1.3239.148-.5471.0878-1.1287-.1668-1.6337l.0105.0092z" fill="url(#prisma_g)" />
    <defs>
      <linearGradient id="prisma_g" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4A5568" />
        <stop offset="1" stopColor="#1A202C" />
      </linearGradient>
    </defs>
  </svg>
);


const JavaScript = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="2" fill="#F7DF1E" />
    <path d="M7 16.5c.4.7 1 1.1 1.9 1.1 1 0 1.6-.5 1.6-1.3 0-.8-.6-1.1-1.6-1.6L8.3 14c-1.5-.7-2.5-1.5-2.5-3.2 0-1.6 1.2-2.8 3.1-2.8 1.3 0 2.3.5 3 1.5l-1.6 1c-.4-.6-.8-.9-1.4-.9s-1 .3-1 .9c0 .6.4.9 1.3 1.3l.6.3C11.5 12.8 12.5 13.6 12.5 15.3c0 1.9-1.5 3-3.5 3-2 0-3.2-1-3.8-2.2l1.8-1zm9.8-.4c.3.5.6.9 1.2.9.6 0 .9-.2.9-1.1V8h2.1v8c0 2.1-1.2 3-3 3-1.6 0-2.5-.8-3-1.8l1.8-1.1z" fill="#323330" />
  </svg>
);

const GSAP = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="12" cy="12" r="12" fill="#0AE448" />
    <text x="6" y="16" fontSize="8" fontWeight="bold" fill="black">GSAP</text>
  </svg>
);

const HTML = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M1.5 0l2.0 18.4 8.5 2.4 8.5-2.4L22.5 0H1.5zm17.0 4H5.5l.4 4h12.2l-.5 5.3-5.6 1.5-5.6-1.5-.4-4h3.6l.2 2 2.2.6 2.2-.6.3-3H4.9L4.1 2h15.8l-.4 2z" fill="#E34F26" />
  </svg>
);

const CSS = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M1.5 0l2.0 18.4 8.5 2.4 8.5-2.4L22.5 0H1.5zm15.4 5.8-.3 3.2H7.4l.2 2.4h8.9l-.8 8.9-3.7 1-3.7-1-.3-2.9h2.5l.1 1.2 1.4.4 1.4-.4.4-4.6H6.7L5.9 4.2h12.2l-.2 1.6z" fill="#1572B6" />
  </svg>
);

const Git = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.6.177-.18.383-.316.605-.406V8.835c-.222-.09-.43-.224-.606-.404-.544-.545-.674-1.346-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" fill="#F05032" />
  </svg>
);

const Docker = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.185h-2.119a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.185H5.136a.185.185 0 0 0-.186.185v1.887c0 .102.084.185.186.185m-2.93 0h2.12a.186.186 0 0 0 .184-.185V9.006a.186.186 0 0 0-.184-.185H2.206a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.185M23.733 12.26c-.24-.248-.55-.415-.854-.415-.36 0-.72.135-1.043.36-.188-1.09-.82-2.026-1.657-2.64l-.33-.25-.248.33c-.5.668-.756 1.584-.675 2.466.073.698.36 1.394.81 1.931-.374.21-.785.36-1.315.39H1.378c-.245 0-.445.2-.445.443 0 2.025.683 3.86 1.876 5.184C4.147 21.45 5.895 22.28 8 22.28c4.95 0 8.68-2.25 10.48-6.218.668.017 2.09 0 2.82-1.394a.17.17 0 0 0 .025-.056l.116-.341-.708-.01z" fill="#2496ED" />
  </svg>
);

const AWS = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.167-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.15 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.127a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.155.167z" fill="#FF9900" />
    <path d="M20.16 16.135c-2.393 1.77-5.866 2.707-8.854 2.707-4.19 0-7.956-1.547-10.806-4.117-.224-.2-.024-.472.248-.32 3.076 1.79 6.874 2.862 10.806 2.862 2.647 0 5.558-.55 8.234-1.69.406-.167.742.272.372.558z" fill="#FF9900" />
    <path d="M21.069 15.089c-.303-.391-2.011-.183-2.783-.096-.232.024-.27-.176-.056-.33 1.357-.957 3.59-.678 3.846-.358.255.32-.072 2.553-1.34 3.618-.191.16-.38.08-.295-.136.287-.71.93-2.307.628-2.698z" fill="#FF9900" />
  </svg>
);

// const Cloudflare = ({ className }: SvgProps) => (
//   <svg viewBox="0 0 24 24" className={className} fill="none">
//     <path d="M16.5 15.75l1.5-4.5-4.5-1.5 1.5-4.5H9L7.5 9.75l-4.5 1.5 1.5 4.5H16.5z" fill="#F38020" />
//     <path d="M15.75 15.75H8.25c-.413 0-.75-.337-.75-.75V9c0-.413.337-.75.75-.75h7.5c.413 0 .75.337.75.75v6c0 .413-.337.75-.75.75z" fill="#FBAD41" />
//   </svg>
// );

const ReactQuery = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="12" cy="12" r="10" stroke="#FF4154" strokeWidth="2" fill="none" />
    <path d="M12 6l2 4h-4z" fill="#FF4154" />
    <circle cx="12" cy="14" r="2" fill="#FF4154" />
  </svg>
);

const ShadcnUI = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect x="2" y="2" width="8" height="8" rx="1" fill="currentColor" />
    <rect x="14" y="2" width="8" height="8" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="2" y="14" width="8" height="8" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="14" y="14" width="8" height="8" rx="1" fill="currentColor" opacity="0.25" />
  </svg>
);

const Lenis = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="#6366F1" />
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="#6366F1" opacity=".4" />
  </svg>
);



const DefaultIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);



type IconComponent = (props: SvgProps) => React.ReactElement;

const TECH_ICON_MAP: Record<string, IconComponent> = {

  "next.js": NextJs,
  "nextjs": NextJs,
  "next": NextJs,


  "react": ReactIcon,


  "typescript": TypeScript,
  "ts": TypeScript,


  "tailwind": TailwindCSS,
  "tailwindcss": TailwindCSS,
  "tailwind css": TailwindCSS,

  
  "framer motion": FramerMotion,
  "framermotion": FramerMotion,
  "framer-motion": FramerMotion,

  
  "vite": Vite,

  
  "node": NodeJs,
  "node.js": NodeJs,
  "nodejs": NodeJs,

  "express": Express,
  "express.js": Express,

  
  "mongodb": MongoDB,

  
  "postgresql": PostgreSQL,
  "postgres": PostgreSQL,
  "postgress": PostgreSQL,

 
  "redis": Redis,

 
  "supabase": Supabase,

  
  "prisma": Prisma,

 
  "react query": ReactQuery,
  "react-query": ReactQuery,
  "react-tanstack-query": ReactQuery,
  "tanstack query": ReactQuery,


  "javascript": JavaScript,
  "js": JavaScript,


  "gsap": GSAP,


  "html": HTML,

 
  "css": CSS,

  
  "git": Git,

  
  "docker": Docker,

  
  "aws": AWS,


  // "cloudflare": Cloudflare,


  "shadcn ui": ShadcnUI,
  "shadcn": ShadcnUI,


  "lenis": Lenis,
};


export function getTechIcon(name: string, className?: string): React.ReactElement {
  const key = name.toLowerCase().trim();
  const Icon = TECH_ICON_MAP[key] ?? DefaultIcon;
  return <Icon className={className ?? "w-4 h-4"} />;
}


export function hasTechIcon(name: string): boolean {
  return name.toLowerCase().trim() in TECH_ICON_MAP;
}

export {
  NextJs, ReactIcon, TypeScript, TailwindCSS, FramerMotion, Vite,
  NodeJs, Express, MongoDB, PostgreSQL, Redis, Supabase, Prisma,
  ReactQuery, JavaScript, GSAP, HTML, CSS, Git, Docker, AWS,
  ShadcnUI, Lenis, DefaultIcon,
};
