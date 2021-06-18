import * as React from "react";

function Planet2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Ebene 1" viewBox="0 0 829.3 581.5" {...props}>
      <circle
        cx={371.6}
        cy={420.8}
        r={290.8}
        fill="#223f65"
        transform="rotate(-45 211 365)"
      />
      <path
        fill="#4ebdc6"
        d="M283 159c-52 43-110 60-129 37s7-77 60-121 110-60 129-37-7 77-60 121z"
        opacity={0.3}
      />
      <ellipse
        cx={194.2}
        cy={478.2}
        fill="#4ebdc6"
        opacity={0.3}
        rx={78.7}
        ry={123.2}
        transform="rotate(-35 -15 425)"
      />
      <path
        fill="#4ebdc6"
        d="M492 366c46-58 108-85 138-61s17 90-30 148-108 85-138 61-17-90 30-148z"
        opacity={0.1}
      />
      <path
        fill="#4ebdc6"
        d="M264 390c33 47 43 96 24 110s-62-13-95-60-44-96-24-110 62 13 95 60zm-2-159c-17 54-49 93-72 86s-27-57-10-112 49-93 71-86 28 57 11 112zm132-80c-68 5-124-16-126-46s51-58 119-62 124 15 126 45-51 58-119 63z"
        opacity={0.3}
      />
      <path
        fill="#5ec0c1"
        d="M86 377s-73 55-55 82 199 0 404-122C658 204 762 101 740 80c-32-31-154 23-154 23l-7-7s172-66 229-31c43 26 49 127-261 303C317 498 75 535 9 492c-41-27 74-128 74-128z"
      />
      <path
        fill="#fff"
        d="M40 480s84 13 210-34c85-31 202-82 275-127 140-85 235-209 243-231s-34-28-34-28 71-6 58 32-54 108-244 229c-153 98-279 141-429 163-45 7-79-4-79-4z"
      />
      <path
        fill="#e2e265"
        d="M372 435s255-123 349-229c63-69 74-98 78-111s-6-28-6-28 22 11 17 33c-7 37-63 117-167 188-118 81-271 147-271 147z"
      />
    </svg>
  );
}

const MemoPlanet2 = React.memo(Planet2);
export default MemoPlanet2;
