"use client";
import { useRouter } from "next/navigation";

export default function ContactPage() {
    const router = useRouter();
    return (
        <div>
            <p>Contact</p>
            <button type="button" onClick={() => router.push('/')} className="rounded-md p-4 my-4 text-white bg-yellow-700">Go home</button>
        </div>
    );
}