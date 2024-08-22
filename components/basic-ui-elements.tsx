import Link from "next/link";
import { ReactNode } from "react";

export const PrimaryButton = ({onClick, innerText}: {onClick: any, innerText: string}) => {
    return (<button onClick={onClick} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
        {innerText}
    </button>);
};

export const SecondaryButton = ({onClick, innerText}: {onClick: any, innerText: string}) => {
    return (<button className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium">
        {innerText}
    </button>);
};


export const PrimaryLink = ({href, children, newTab}: {href: string, children: ReactNode, newTab: boolean}) => {
    return (<Link href={href} target={newTab ? "_blank":"_self"} rel={newTab ? "noopener noreferrer":""} 
        className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg">
        {children}
    </Link>);
};

export const SecondaryLink = ({href, children, newTab}: {href: string, children: ReactNode, newTab: boolean}) => {
    return (<Link href={href} target={newTab ? "_blank":"_self"} rel={newTab ? "noopener noreferrer":""} 
        className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium">
        {children}
    </Link>);
};

export const ReferenceContainer = ({href, children, newTab}: {href: string, children: ReactNode, newTab: boolean}) => {
    return (<Link href={href} target={newTab ? "_blank":"_self"} rel={newTab ? "noopener noreferrer":""} 
        className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg">
        {children}
    </Link>);
};

