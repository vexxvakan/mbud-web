import * as React from "react";

function Planet1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Ebene 1" viewBox="0 0 829.8 487" {...props}>
      <circle cx={422} cy={231.9} r={231.9} fill="#ec6527" />
      <path
        fill="#ef8a35"
        d="M374 279c-44-25-114-20-147 19-6 7-12 17-16 30a232 232 0 00160 131c58-47 80-137 3-180zm-71-168c-28-3-62 26-68 54-10 41 28 42 58 43 29 2 67-5 72-41s-27-54-62-56zm271 33c-11-32-32-58-54-82-13-13-108-45-86 22 6 17 13 41 22 55 19 29 39 80 77 79 38 0 52-44 41-74zm48 122l-11-38c-30-42-101 87-88 115 30 61 110-26 99-77z"
      />
      <path
        fill="#fff"
        d="M216 125a232 232 0 00377 263c-7-5-17-9-30-10-48-4-98 14-146 11-101-6-191-66-166-178 11-46 43-91 85-111 48-23 88 6 126 35 38 28 86 96 138 96 14 0 50-10 49-41A232 232 0 00528 27a232 232 0 00-312 98z"
        opacity={0.2}
      />
      <path
        fill="#86509b"
        d="M230 78s-78-18-99 15 73 130 257 208c203 87 319 98 348 67 18-20-61-88-61-88l5-15s133 80 83 136-259 13-387-51C205 265 38 137 68 83c30-56 170-15 170-15z"
      />
      <path
        fill="#86509b"
        d="M143 43c-8 2-122-6-103 54 14 48 112 160 299 251 221 108 311 104 375 106 135 4 74-90 74-90s89 90 8 112c-156 42-381-46-487-103C183 305 44 205 8 126c-25-57 12-83 46-93 35-11 89 10 89 10z"
      />
      <path
        fill="#c85fa1"
        d="M162 178c-9-14-22-22-32-36-9-12-25-22-28-36-5-18 5-27 21-33 7-3 13-6 20-7 4-1 26 0 14-8-5-4-19 1-24 2a163 163 0 01-24 2l-5 2c-16 4-27 19-25 35 2 17 8 32 23 41 28 19 43 54 74 71 4 2 7 5 12 4 3-18-17-24-26-37z"
        opacity={0.6}
      />
      <path
        fill="#c85fa1"
        d="M97 199l-13-15c-6-8-14-11-20-18-18-22-34-55-38-81-2-11 0-25 9-32 9-6 22-8 30-14-4-4-11-3-16 0l-7 4c-18 1-29 26-29 41-1 16 11 31 17 46 7 18 9 31 24 45 13 13 24 24 38 35 4 4 20 16 20 3 0-4-12-11-15-14z"
        opacity={0.6}
      />
      <path
        fill="#c85fa1"
        d="M748 369c-16 20-42 27-67 26s-50-8-75-10c-26-3-50-5-74-11-26-7-50-13-74-25-9-4-24-16-34-16-23-1 6 9 11 14l6 3c9 19 50 25 69 28 30 5 60 13 92 18 26 3 51 11 77 14 21 2 52-2 68-15 7-6 18-15 18-24-1-19-11-10-17-2z"
        opacity={0.3}
      />
    </svg>
  );
}

const MemoPlanet1 = React.memo(Planet1);
export default MemoPlanet1;
