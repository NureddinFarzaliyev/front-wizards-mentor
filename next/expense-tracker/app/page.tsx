"use client";
import { BigButton } from "@/app/components/BigButton";
import { CreateTransactionPopup } from "@/app/components/CreateTransactionPopup";
import ChartIcon from "@/app/icons/ChartIcon";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen gap-4 overflow-hidden">
      <Link href="/dashboard">
        <BigButton text="Dashboard" icon={<ChartIcon />} />
      </Link>
      <CreateTransactionPopup />
    </div>
  );
}
