import { OrbitingCircles } from "@/components/ui/orbiting-circles"

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white p-1.5 md:p-2 rounded-full shadow-lg flex items-center justify-center w-full h-full hover:scale-110 transition-transform duration-200">
    {children}
  </div>
);

const Icons = {
  indeed: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.06 11.667c.72 0 1.347.56 1.347 1.253v5.64h3.693V11.2c0-2.013-1.16-3.067-2.92-3.067-1.373 0-2.027.76-2.373 1.293v-1.12h-3.68v7.253h3.68v-3.893h.253zM7.067 18.56h3.68v-7.253h-3.68v7.253zM8.907 5.44a2.14 2.14 0 0 0-2.134 2.133c0 1.174.96 2.134 2.134 2.134 1.173 0 2.133-.96 2.133-2.134a2.14 2.14 0 0 0-2.133-2.133z"
        fill="#2164f3"
      />
    </svg>
  ),
  linkedin: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        fill="#0077b5"
      />
    </svg>
  ),
  freelancer: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4 17.6l-3.2-4.5-5.3 2.2c-.4.2-.9-.1-.9-.6 0-.1 0-.3.1-.4L13.7 3.6c.3-.5.9-.6 1.4-.3.1.1.2.2.3.4l5.3 12.6c.2.5-.1 1.1-.6 1.3-.3.1-.5.1-.7 0z"
        fill="#29b2fe"
      />
      <path
        d="M9.8 13.9l1.6-2.2-4.1-3.6c-.4-.3-1-.3-1.3.1-.1.1-.2.3-.2.4l-1.6 4.3c-.2.5.1 1.1.6 1.3.2.1.4.1.6 0l4.4-1.8c0 .5 0 1-.5 1.5z"
        fill="#29b2fe"
      />
    </svg>
  ),
  upwork: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-.437c1.122-2.143 2.135-4.739 2.135-7.155V2.406h-2.545v1.933c0 2.116-.89 4.432-1.885 6.322-.97-1.89-1.86-4.206-1.86-6.322V2.406H8.991v1.933c0 2.416 1.013 5.012 2.134 7.155l.228.437c-.94.76-1.972 1.227-3.074 1.227-2.656 0-4.818-2.22-4.818-4.946V2.406H.916v5.806c0 4.14 3.28 7.506 7.318 7.506 1.626 0 3.125-.54 4.346-1.438l.605 1.154h2.66l-.777-1.484c1.244.914 2.766 1.465 4.43 1.465 2.27 0 4.367-1.07 5.82-2.76l1.766 2.443h3.13l-2.39-3.305c.75-1.29 1.177-2.79 1.177-4.385 0-4.75-3.76-8.605-8.386-8.605h-2.545v2.56h2.545c3.215 0 5.84 2.7 5.84 6.045 0 3.345-2.625 6.045-5.84 6.045V13.158z"
        fill="#14a800"
      />
    </svg>
  ),
  glassdoor: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
        fill="#0caa41"
      />
      <path
        d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
        fill="#0caa41"
      />
      <path
        d="M15 12h-2v2h2v-2z"
        fill="#0caa41"
      />
    </svg>
  ),
  fiverr: () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="#1dbf73"/>
      <path
        d="M16.5 9h-2.8V6.8c0-.9-.7-1.6-1.6-1.6h-2.8v3.8h2.8v8.8h-2.8v-8.8h-2.8v8.8h-2.8v-8.8H6.9v8.8H4.1v-8.8H1.3v-2.8h2.8V3.4c0-2.4 2-4.4 4.4-4.4h5.6v3.8H8.5c-.9 0-1.6.7-1.6 1.6v1.8h2.8v2.8h2.8V6.8c0-2.4 2-4.4 4.4-4.4h5.6v6.6z"
        fill="#ffffff"
        transform="scale(0.5) translate(12, 12)"
      />
    </svg>
  ),
}

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={50} radius={190}>
        <IconWrapper><Icons.indeed /></IconWrapper>
        <IconWrapper><Icons.linkedin /></IconWrapper>
        <IconWrapper><Icons.glassdoor /></IconWrapper>
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
        <IconWrapper><Icons.freelancer /></IconWrapper>
        <IconWrapper><Icons.upwork /></IconWrapper>
        <IconWrapper><Icons.fiverr /></IconWrapper>
      </OrbitingCircles>
    </div>
  )
}
