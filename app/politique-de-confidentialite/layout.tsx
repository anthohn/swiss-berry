import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Politique de confidentialité",
};

export default function PrivacyPolicyLayout({
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