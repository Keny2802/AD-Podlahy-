// "use client";

// import {
//     useState,
//     useEffect,
//     Fragment
// } from "react";
// import {
//     motion,
//     Variants
// } from "motion/react";
// import Link from "next/link";
// import dynamic from "next/dynamic";

// import Wrapper from "./Wrapper";
// import BodyText from "./BodyText";

// type cookieCategory = {
//     id: string;
//     title: string;
//     desc: string;
//     required: boolean
// };

// const Cookies: React.FC = () => {
//     const cookieCategories:cookieCategory[] = [
//         {
//             id: "necessary",
//             title: "Nezbytné cookies",
//             desc: "Tyto cookies jsou pro běh webu nezbytné.",
//             required: true
//         },
//         {
//             id: "analytics",
//             title: "Analytické cookies",
//             desc: "Pomáhájí nám porozumět jak využíváte náš web, aby jsme mohli pracovat na jeho vylepšení.",
//             required: false
//         },
//         {
//             id: "marketing",
//             title: "Marketingové cookies",
//             desc: "Slouží pro zobrazování relevantní reklamy na jiných webech.",
//             required: false
//         },
//     ];

//     const [showBanner, setShowBanner] = useState<boolean>(false);
//     const [isShowDetails, setShowDetails] = useState<boolean>(false);
//     const [isCookiePreferences, setCookiePreferences] = useState<Record<string, boolean>>({});

//     useEffect(() => {
//         console.log("Component mounted.");

//         const cookieConsentGiven = localStorage.getItem("cookieConsentGiven");

//         if (!cookieConsentGiven) {
//             const initialCookiePreferences = cookieCategories.reduce((acc, cat) => {
//                 acc[cat.id] = cat.required;

//                 return acc;
//             }, {} as Record<string, boolean>);

//             setCookiePreferences(initialCookiePreferences);
//             setShowBanner(true);
//         } else {
//             try {
//                 const savedPreferences = JSON.parse(localStorage.getItem("cookiePreferences") || "{}");

//                 setCookiePreferences(savedPreferences);
//             } catch (error) {
//                 console.error("Chyba při načítání cookie preferencí:", error);
//             };
//         };
//     }, []);

//     const acceptAllCookies = () => {
//         const allAccepted = cookieCategories.reduce((acc, cat) => {
//             acc[cat.id] = true;

//             return acc;
//         }, {} as Record<string, boolean>);

//         saveCookiePreferences(allAccepted);
//     };

//     const acceptNecessaryCookies = () => {
//         const necessaryOnly = cookieCategories.reduce((acc, cat) => {
//             acc[cat.id] = cat.required;

//             return acc;
//         }, {} as Record<string, boolean>);

//         saveCookiePreferences(necessaryOnly);
//     };

//     const saveCookiePreferences = (cookiePreferences: Record<string, boolean>) => {
//         setCookiePreferences(cookiePreferences);

//         localStorage.setItem("cookieConsentGiven", "true");
//         localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));

//         setShowBanner(false);
//     };

//     const handlePreferencesChange = (
//         catID: string,
//         isChecked: boolean
//     ) => {
//         setCookiePreferences(prev => {
//             if (cookieCategories.find((cat) => cat.id === catID)?.required) {
//                 return prev;
//             };

//             return {
//                 ...prev,
//                 [catID]: isChecked
//             };
//         });
//     };

//     const saveDetailedPreferences = () => {
//         saveCookiePreferences(isCookiePreferences);
//     };

//     if (!showBanner) return null;

//     return (
//         <Fragment>
//             <div style={{
//   display: showBanner ? 'block' : 'none',
//   position: 'fixed',
//   bottom: '20px',
//   left: '20px',
//   background: 'red',
//   color: 'white',
//   padding: '40px',
//   fontSize: '24px',
//   zIndex: 999999,
//   border: '5px solid black'
// }}>
//   TEST – BANNER BY MĚL BÝT VIDĚT
// </div>
//         </Fragment>
//     );
// };

// export default Cookies;

"use client";

import { useState, useEffect } from "react";

type CookieCategory = {
  id: string;
  title: string;
  desc: string;
  required: boolean;
};

export default function Cookies() {
  const cookieCategories: CookieCategory[] = [
    { id: "necessary", title: "Nezbytné cookies", desc: "Pro běh webu.", required: true },
    { id: "analytics", title: "Analytické cookies", desc: "Pomáhá nám vylepšovat web.", required: false },
    { id: "marketing", title: "Marketingové cookies", desc: "Pro reklamu.", required: false },
  ];

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsentGiven");
    if (!consentGiven) setShowBanner(true);
  }, []);

  const acceptAll = () => {
    const prefs = cookieCategories.reduce((acc, cat) => ({ ...acc, [cat.id]: true }), {});
    localStorage.setItem("cookieConsentGiven", "true");
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      left: 20,
      padding: 20,
      background: "red",
      color: "white",
      zIndex: 9999
    }}>
      <p>TEST – BANNER BY MĚL BÝT VIDĚT</p>
      <button onClick={acceptAll}>Přijmout vše</button>
    </div>
  );
}