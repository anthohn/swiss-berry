import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "FAQ",
};

export default function FaqLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}