"use client"
import Settings from "@/components/Settings";
import User from "@/components/User";
import { useAuth } from "@/hooks/useAuth";


export default function SettingsPage() {
  const user = useAuth();
  if (!user) return null;
  return (
    <main className="flex h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] flex-col items-center">
     <header className="h-14 flex items-center border-b w-full">
      <h1 className="text-center w-full uppercase font-bold">Configuração</h1>
     </header>
     <User/>
      {user.reloadUserInfo.customAttributes.admin && <Settings />}
    </main>
  );
}
